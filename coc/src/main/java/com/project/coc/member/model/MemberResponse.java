package com.project.coc.member.model;

import com.project.coc.common.model.CommonModel;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class MemberResponse extends CommonModel {
    @Schema(defaultValue = "test@test.com")
    private String email;
    @Schema(defaultValue = "password")
    private String password;
    @Schema(defaultValue = "testUser")
    private String nickName;
    @Schema(defaultValue = "N")
    private String delYn;
    @Schema(defaultValue = "Hi,I'm test user")
    private String profileCont;
    @Schema(defaultValue = "user")
    private String role;
}
