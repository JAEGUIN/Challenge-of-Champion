package com.project.coc.follow.model;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PostFollowRequest {

    /**
     * 팔로우할 번호
     */
    @Schema(defaultValue = "팔로우할 번호")
    private Long followSeq;
}
