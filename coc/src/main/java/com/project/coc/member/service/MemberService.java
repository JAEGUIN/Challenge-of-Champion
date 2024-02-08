package com.project.coc.member.service;

import com.project.coc.member.model.LoginMemberRequest;
import com.project.coc.member.model.MemberResponse;
import com.project.coc.member.model.PostMemberRequest;
import com.project.coc.member.model.UpdateMemberRequest;

import java.util.List;

public interface MemberService {
    void regiMember(PostMemberRequest request);

    MemberResponse loginMember(LoginMemberRequest request);

    void updateMember(Long seq, UpdateMemberRequest request);

    void deleteMember(Long seq);

    List<MemberResponse> selectAllMembers();

    MemberResponse selectMember(Long seq);
}
