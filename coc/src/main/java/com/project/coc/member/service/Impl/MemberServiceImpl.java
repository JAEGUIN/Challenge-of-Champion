package com.project.coc.member.service.Impl;

import com.project.coc.jwt.JwtUtils;
import com.project.coc.member.mapper.MemberMapper;
import com.project.coc.member.model.LoginMemberRequest;
import com.project.coc.member.model.MemberResponse;
import com.project.coc.member.model.PostMemberRequest;
import com.project.coc.member.model.UpdateMemberRequest;
import com.project.coc.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {

    private final MemberMapper memberMapper;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;


    @Override
    public void joinProcess(PostMemberRequest request) throws Exception  {
        MemberResponse member = memberMapper.selectMemberByEmail(request.getEmail());
        if (member != null) {
            throw new Exception("해당 계정은 이미 존재합니다");
        }
        request.setPassword(bCryptPasswordEncoder.encode(request.getPassword()));//비밀번호 암호화
        request.setDelYn("N");
        request.setRole("user");
        memberMapper.regiMember(request);
    }

    @Override
    public String loginMember(LoginMemberRequest request) throws Exception {

        MemberResponse member = memberMapper.selectMemberByEmail(request.getEmail());
        if (member == null) {
            throw new Exception("회원을 찾을 수 없습니다");
        }
        if (member.getDelYn() == "Y") {
            throw new Exception("해당 이메일의 계정은 삭제되었습니다.복구를 진행하세요");
        }
        if (!bCryptPasswordEncoder.matches(request.getPassword(), member.getPassword())) {
            throw new Exception("비밀번호가 틀렸습니다");
        }

        return JwtUtils.generateToken(request.getEmail());
    }

    @Override
    public void updateMember(Long seq, UpdateMemberRequest request) {
        try {
            memberMapper.updateMember(seq, request);
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

    @Override
    public MemberResponse selectMemberByEmail(String email) {
        return  memberMapper.selectMemberByEmail(email);
    }
}
