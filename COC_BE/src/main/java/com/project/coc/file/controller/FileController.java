package com.project.coc.file.controller;

import com.project.coc.file.FileUtil;
import com.project.coc.file.model.FileResponse;
import com.project.coc.file.model.SearchFileRequest;
import com.project.coc.file.model.UploadFileRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@RequestMapping("/file")
@RequiredArgsConstructor
@RestController
public class FileController {

    private final FileUtil fileUtil;

    @GetMapping("/view/{fileName}")
    public ResponseEntity<Resource> getFile(@PathVariable String fileName){
        return fileUtil.getFile(fileName);
    }

    @GetMapping("/view/detailList")
    public ResponseEntity<List<FileResponse>> getFilesByBoardSeq(SearchFileRequest request){
        return ResponseEntity.ok(fileUtil.getFiles(request));
    }


    @PostMapping("/upload")
    public Map<String, String> upload(UploadFileRequest request){

        List<MultipartFile> files = request.getFiles();

        List<String> uploadFileNames = fileUtil.saveFiles(files, request);

        System.out.println("uploadFileNames : "+uploadFileNames);

        return Map.of("result", "success");
    }

    @DeleteMapping("/delete/{seq}")
    public ResponseEntity<List<?>> deleteFileList(@PathVariable Long seq){
        return ResponseEntity.ok(fileUtil.deleteFiles(seq));
    }
}