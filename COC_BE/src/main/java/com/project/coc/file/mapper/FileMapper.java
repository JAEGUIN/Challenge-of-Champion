package com.project.coc.file.mapper;

import com.project.coc.file.model.FileResponse;
import com.project.coc.file.model.SearchFileRequest;
import com.project.coc.file.model.UploadFileRequest;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface FileMapper {
    void upload(UploadFileRequest request);

    List<FileResponse> getFiles(SearchFileRequest request);

    void deleteFiles(Long seq);
}
