package com.project.coc.member.model;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateMemberRequest {


    @Schema(defaultValue = "password")
    private String password;
    @Schema(defaultValue = "testUser")
    private String nickName;
    @Schema(defaultValue = "Hi,I'm test user")
    private String profileCont;

}
