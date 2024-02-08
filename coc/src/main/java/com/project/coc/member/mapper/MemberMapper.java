package com.project.coc.member.mapper;

import com.project.coc.member.model.LoginMemberRequest;
import com.project.coc.member.model.MemberResponse;
import com.project.coc.member.model.PostMemberRequest;
import com.project.coc.member.model.UpdateMemberRequest;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
@Mapper
public interface MemberMapper {
    List<MemberResponse> selectAllMembers();

    MemberResponse selectMember(Long seq);

    MemberResponse loginMember(LoginMemberRequest request);

    void regiMember(PostMemberRequest request);

    void updateMember(Long seq, UpdateMemberRequest request);

    void deleteMember(Long seq);


}