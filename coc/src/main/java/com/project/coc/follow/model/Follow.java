package com.project.coc.follow.model;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.ToString;

@ToString
@Getter
public class Follow {

    /**
     * 팔로잉 카운트
     */
    @Schema(defaultValue = "팔로잉 카운트")
    private int followCount;
}
