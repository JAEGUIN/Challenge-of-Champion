package com.project.coc.board.model;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SearchBoardRequest {

    /**
     * 게시판 글
     */
    @Schema(defaultValue = "검색할 게시물 내용")
    private String content;

    /**
     * 게시판 카테고리
     */
    @Schema(defaultValue = "검색할 게시판 카테고리")
    private String category;

    /**
     * 게시판 작성자명
     */
    @Schema(defaultValue = "검색할 작성자명")
    private String userName;

    /**
     * 게시판 페이징수
     */
    @Schema(defaultValue = "페이징 숫자")
    private Integer pageNum;
}
