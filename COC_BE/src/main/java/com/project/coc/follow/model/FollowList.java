package com.project.coc.follow.model;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.ToString;

@ToString
@Getter
public class FollowList {

    /**
     * 팔로잉 닉네임
     */
    @Schema(defaultValue = "팔로잉 닉네임")
    private String nickName;

    /**
     * 팔로잉 이메일
     */
    @Schema(defaultValue = "팔로잉 이메일")
    private String email;

}
