package com.project.coc.entity.user;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class User {

    private Long seq;
    private String createdBy;
    private String updatedBy;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private String email;
    private String password;
    private String nickname;
    private String delYN;
    private String profileCont;
}