package com.project.coc.member.service.Impl;

import com.project.coc.member.mapper.MemberMapper;
import com.project.coc.member.model.LoginMemberRequest;
import com.project.coc.member.model.MemberResponse;
import com.project.coc.member.model.PostMemberRequest;
import com.project.coc.member.model.UpdateMemberRequest;
import com.project.coc.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {

    private final MemberMapper memberMapper;

    @Override
    public void regiMember(PostMemberRequest request) {
        try {
            memberMapper.regiMember(request);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public MemberResponse loginMember(LoginMemberRequest request) {
        try {
            return memberMapper.loginMember(request);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public void updateMember(Long seq, UpdateMemberRequest request) {
        try {
            memberMapper.updateMember(seq,request);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public void deleteMember(Long seq) {
        try {
            memberMapper.deleteMember(seq);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public List<MemberResponse> selectAllMembers() {
        try {
            return memberMapper.selectAllMembers();
        } catch (Exception e) {
            e.printStackTrace();
            return Collections.emptyList();
        }
    }

    @Override
    public MemberResponse selectMember(Long seq) {
        try {
            return memberMapper.selectMember(seq);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
