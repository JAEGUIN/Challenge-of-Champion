package com.project.coc.file.model;

import com.project.coc.common.model.CommonModel;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
@Getter
public class FileResponse {

    /**
     * 파일 게시판 번호
     */
    @Schema(defaultValue = "게시판 번호")
    private Long boardSeq;

    /**
     * 파일 작성자 번호
     */
    @Schema(defaultValue = "작성자 번호")
    private int userSeq;

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
}
