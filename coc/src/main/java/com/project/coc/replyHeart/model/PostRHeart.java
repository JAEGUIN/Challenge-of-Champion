package com.project.coc.replyHeart.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PostRHeart {

    /**
     * 하트 답변
     */
    private Long replySeq;

    /**
     * 하트 유저
     */
    private Long userSeq;
}
