package com.project.coc.member.mapper;

import com.project.coc.member.model.*;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
@Mapper
public interface MemberMapper {
    List<MemberResponse> selectAllMembers();

    MemberResponse selectMember(Long seq);

    String  loginMember(LoginMemberRequest request);

    void regiMember(PostMemberRequest request);

    void updateMember(UpdateMemberRequest request);

    void deleteMember(Long seq);

    MemberResponse selectMemberByEmail(String email);
}