package com.project.coc.reply.model;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SearchReplyRequest {

    /**
     * 답변 게시판번호
     */
    private Long boardSeq;
}
