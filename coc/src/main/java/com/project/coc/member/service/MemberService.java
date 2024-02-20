package com.project.coc.member.service;

import com.project.coc.member.model.LoginMemberRequest;
import com.project.coc.member.model.MemberResponse;
import com.project.coc.member.model.PostMemberRequest;
import com.project.coc.member.model.UpdateMemberRequest;

import java.util.List;

public interface MemberService {
    void joinProcess(PostMemberRequest request) throws Exception;

    String  loginMember(LoginMemberRequest request) throws Exception;

    void updateMember(Long seq, UpdateMemberRequest request);

    void deleteMember(Long seq);

    List<MemberResponse> selectAllMembers();

    MemberResponse selectMember(Long seq);

    MemberResponse selectMemberByEmail(String email);

}