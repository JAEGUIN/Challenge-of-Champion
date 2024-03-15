package com.project.coc.member.model;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SearchMemberRequest {

    @Schema(defaultValue = "test@test.com")
    private String email;

    @Schema(defaultValue = "testUser")
    private String nickName;



}
