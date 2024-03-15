package com.project.coc.jwt;

import com.project.coc.member.mapper.MemberMapper;
import com.project.coc.member.model.MemberResponse;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserDetailsService implements org.springframework.security.core.userdetails.UserDetailsService {

    private final MemberMapper memberMapper;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        MemberResponse member = memberMapper.selectMemberByEmail(username);
        if (member == null) {
            throw new UsernameNotFoundException("해당하는 유저를 찾을 수 없습니다");
        }

        return new CustomUserDetails(member);
    }
}
