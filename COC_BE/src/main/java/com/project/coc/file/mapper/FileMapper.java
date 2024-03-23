package com.project.coc.file.mapper;

import com.project.coc.file.model.UploadFileRequest;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface FileMapper {
    void upload(UploadFileRequest request);
}
