package com.project.coc.file.model;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class UploadFileRequest {

    /**
     * 파일 게시판 번호
     */
    @Schema(defaultValue = "작성자 번호")
    private Long boardSeq;

    /**
     * 파일 작성자 번호
     */
    @Schema(defaultValue = "작성자 번호(jwt 토큰 값 자동으로 들어감)")
    private Long userSeq;

    /**
     * 파일원본 이름
     */
    @Schema(defaultValue = "파일 원본 이름")
    private String fileName;

    /**
     * 업로드된 파일이름
     */
    @Schema(defaultValue = "업로드된 파일 이름(자동생성)")
    private String uploadedName;

    private List<MultipartFile> files = new ArrayList<>();

    private List<String> uploadedNames = new ArrayList<>();
}
