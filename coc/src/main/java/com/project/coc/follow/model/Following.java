package com.project.coc.follow.model;

import com.project.coc.common.model.CommonModel;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.ToString;

@ToString
@Getter
public class Following {

    /**
     * 팔로잉 카운트
     */
    @Schema(defaultValue = "팔로잉 카운트")
    private int followingCount;
}
