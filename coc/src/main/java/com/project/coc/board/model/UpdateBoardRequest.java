package com.project.coc.board.model;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class UpdateBoardRequest {

    /**
     * 게시판 글
     */
    @Schema(defaultValue = "안녕하세요 좋은 아침 입니다.")
    private String content;

    /**
     * 변경일시 (timestamp)
     */
    @Schema(defaultValue = "안녕하세요 좋은 아침 입니다.")
    private Date updatedAt;
}
