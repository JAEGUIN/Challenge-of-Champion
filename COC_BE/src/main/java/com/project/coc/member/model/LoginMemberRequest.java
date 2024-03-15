package com.project.coc.member.model;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginMemberRequest {
    @Schema(defaultValue = "test@test.com")
    private String email;
    @Schema(defaultValue = "password")
    private String password;
}
