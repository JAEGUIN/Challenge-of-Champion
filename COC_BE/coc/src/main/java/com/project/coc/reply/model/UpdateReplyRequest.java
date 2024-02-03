package com.project.coc.reply.model;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class UpdateReplyRequest {

    /**
     *  답변 번호
     */
    private Long seq;

    /**
     * 답변 글
     */
    @Schema(defaultValue = "답변 달았습니다.")
    private String content;
}
