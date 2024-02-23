package com.project.coc.member.model;

public record SignInResponse(Long seq, String email, String role,String token) {
}
