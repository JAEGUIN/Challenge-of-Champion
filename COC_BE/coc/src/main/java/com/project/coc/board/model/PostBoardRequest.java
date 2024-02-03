package com.project.coc.board.model;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PostBoardRequest {

    /**
     * 게시판 글
     */
    @Schema(defaultValue = "안녕하세요 좋은 아침 입니다.")
    private String content;

    /**
     * 게시판 카테고리
     */
    @Schema(defaultValue = "게시판 카테고리(b1)")
    private String category;

    /**
     * 게시판 작성자명
     */
    @Schema(defaultValue = "작성자명")
    private Long userSeq;
}
