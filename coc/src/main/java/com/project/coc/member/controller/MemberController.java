package com.project.coc.member.controller;

import com.project.coc.member.model.LoginMemberRequest;
import com.project.coc.member.model.MemberResponse;
import com.project.coc.member.model.PostMemberRequest;
import com.project.coc.member.model.UpdateMemberRequest;
import com.project.coc.member.service.MemberService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/member")
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @Operation(summary="유저 등록")
    @PostMapping("/regi")
    public void regiMember(@RequestBody PostMemberRequest request) {
        memberService.regiMember(request);
    }

    @Operation(summary="유저 로그인")
    @PostMapping("/login")
    public MemberResponse loginMember(@RequestBody LoginMemberRequest request){
        return memberService.loginMember(request);
    }

    @Operation(summary="유저 수정")
    @PutMapping("/{seq}")
    public void updateMember(@PathVariable Long seq, @RequestBody UpdateMemberRequest request) {
        memberService.updateMember(seq,request);
    }

    @Operation(summary="유저 삭제")
    @DeleteMapping("/{seq}")
    public void deleteMember(@PathVariable Long seq) {
        memberService.deleteMember(seq);
    }

    @Operation(summary="유저 전체조회")
    @GetMapping
    public List<MemberResponse> selectAllMembers() {
        return memberService.selectAllMembers();
    }

    @Operation(summary="유저 상세조회")
    @GetMapping("/{seq}")
    public MemberResponse selectMemberById(@PathVariable() Long seq) {
        return memberService.selectMember(seq);
    }






}
