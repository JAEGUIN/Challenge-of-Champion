package com.project.coc.reply.model;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PostReplyRequest {

    /**
     * 답변 글
     */
    @Schema(defaultValue = "답변 달았습니다.")
    private String content;

    /**
     * 답변 게시판번호
     */
    private Long boardSeq;

    /**
     * 답변 유저번호
     */
    private Long userSeq;
}
