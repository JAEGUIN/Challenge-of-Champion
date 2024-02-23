package com.project.coc.member.service.Impl;

import com.project.coc.jwt.JwtProvider;
import com.project.coc.member.mapper.MemberMapper;
import com.project.coc.member.model.*;
import com.project.coc.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {

    private final MemberMapper memberMapper;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    //회원가입
    @Override
    public void joinProcess(PostMemberRequest request) throws Exception {
        MemberResponse member = memberMapper.selectMemberByEmail(request.getEmail());
        if (member != null) {
            throw new Exception("해당 계정은 이미 존재합니다");
        }
        request.setPassword(bCryptPasswordEncoder.encode(request.getPassword()));//비밀번호 암호화
        request.setDelYn("N");
        request.setRole("user");
        memberMapper.regiMember(request);
    }

    //로그인
    @Override
    public SignInResponse loginMember(LoginMemberRequest request) throws Exception {

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
        String token=JwtProvider.generateToken(member.getEmail(), member.getRole());

        return new SignInResponse(member.getSeq(),member.getEmail(),member.getRole(),token);
    }

    //유저 정보 업데이트
    @Override
    public void updateMember(Long seq, UpdateMemberRequest request) {

        request.setPassword(bCryptPasswordEncoder.encode(request.getPassword()));//비밀번호 암호화
        memberMapper.updateMember(request);
    }

    //유저 삭제
    @Override
    public void deleteMember(Long seq) {
        memberMapper.deleteMember(seq);
    }

    //유저 전체 조회
    @Override
    public List<MemberResponse> selectAllMembers() {
        return memberMapper.selectAllMembers();
    }

    //유저 상세 조회(seq)
    @Override
    public MemberResponse selectMember(Long seq) {
        return memberMapper.selectMember(seq);
    }

    //유저 상세 조회(email)
    @Override
    public MemberResponse selectMemberByEmail(String email) {
        return memberMapper.selectMemberByEmail(email);
    }
}
