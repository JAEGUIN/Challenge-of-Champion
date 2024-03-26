package com.project.coc.file;

import com.project.coc.file.mapper.FileMapper;
import com.project.coc.file.model.FileResponse;
import com.project.coc.file.model.SearchFileRequest;
import com.project.coc.file.model.UploadFileRequest;
import com.project.coc.jwt.CustomUserDetails;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RequiredArgsConstructor
@Slf4j
@Component
public class FileUtil {

    @Value("${upload.path}")
    private String uploadPath;

    private final FileMapper mapper;

    //jwt에 담긴 userSeq
    private Long getUserSeqFromAuthentication() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return ((CustomUserDetails)authentication.getPrincipal()).getSeq();
    }

    @PostConstruct
    public void init(){

        File tempFolder = new File(uploadPath);

        if(!tempFolder.exists()){
            log.info("폴더 존재하지 않음");
            tempFolder.mkdir();
        }

        uploadPath = tempFolder.getAbsolutePath();

        log.info("------------------------------------------------------------------------------------------------------");
        log.info(uploadPath);
        log.info("------------------------------------------------------------------------------------------------------");

    }

    public List<String> saveFiles(List<MultipartFile> files, UploadFileRequest request) throws RuntimeException{

        log.info("saveFiles start");

        if(files == null || files.size() == 0){
            return null;
        }

        List<String> uploadNames = new ArrayList<>();

        for(MultipartFile file : files){

            String savedName = UUID.randomUUID().toString()+"_"+file.getOriginalFilename();
            Path savePath = Paths.get(uploadPath, savedName);

            request.setFileName(file.getOriginalFilename());
            request.setUploadedName(savedName);
            request.setUserSeq(getUserSeqFromAuthentication());
            mapper.upload(request);
            try {
                Files.copy(file.getInputStream(), savePath);
                uploadNames.add(savedName);

            }catch (IOException io){
                throw new RuntimeException(io);
            }
        }
        return uploadNames;
    }

    public ResponseEntity<Resource> getFile(String fileName){

        Resource resource = new FileSystemResource(uploadPath+File.separator+fileName);

        if(!resource.isReadable()){
            resource = new FileSystemResource(uploadPath+ File.separator + "default.png");
        }

        HttpHeaders headers = new HttpHeaders();

        try {
            headers.add("Content-Type", Files.probeContentType(resource.getFile().toPath()));
        }catch (IOException io){
            throw new RuntimeException(io);
        }

        return ResponseEntity.ok().headers(headers).body(resource);
    }

    public List<FileResponse> getFiles(SearchFileRequest request) {

        List<FileResponse> result = new ArrayList<>();
        result = mapper.getFiles(request);

        return result;
    }

    public List<?> deleteFiles(Long seq) {
        mapper.deleteFiles(seq);
        return null;
    }
}
