package com.project.coc.member.service;

import com.project.coc.member.model.*;

import java.util.List;

public interface MemberService {
    void joinProcess(PostMemberRequest request) throws Exception;

    SignInResponse loginMember(LoginMemberRequest request) throws Exception;

    void updateMember(Long seq, UpdateMemberRequest request);

    void deleteMember(Long seq);

    List<MemberResponse> selectAllMembers();

    MemberResponse selectMember(Long seq);

    MemberResponse selectMemberByEmail(String email);

}
