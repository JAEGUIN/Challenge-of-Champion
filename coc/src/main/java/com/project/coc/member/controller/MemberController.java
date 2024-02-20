package com.project.coc.member.controller;

import com.project.coc.member.model.LoginMemberRequest;
import com.project.coc.member.model.MemberResponse;
import com.project.coc.member.model.PostMemberRequest;
import com.project.coc.member.model.UpdateMemberRequest;
import com.project.coc.member.service.MemberService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/member")
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;
    HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR; // 기본적으로 서버 오류 상태 코드 반환
    @Operation(summary="유저 등록")
    @PostMapping("/join")
    public ResponseEntity<String > regiMember(@RequestBody PostMemberRequest request) {

        try {
            memberService.joinProcess(request);
            return ResponseEntity.ok("회원 가입이 완료되었습니다.");
        }catch (DataIntegrityViolationException e) {
            // 데이터베이스 제약 조건 위반 예외 처리
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("회원 가입 중 오류가 발생했습니다. 이미 존재하는 이메일이거나 다른 제약 조건을 위반했습니다.");
        }catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @Operation(summary="유저 로그인")
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginMemberRequest request) {
        try {
            return ResponseEntity.ok(memberService.loginMember(request));//성공시 JWT_token 반환
        } catch (Exception e) {
            String errorMessage = e.getMessage();

            if (errorMessage.equals("회원을 찾을 수 없습니다")) {
                status = HttpStatus.NOT_FOUND; // 회원을 찾을 수 없는 경우 404 반환
            } else if (errorMessage.equals("해당 이메일의 계정은 삭제되었습니다.복구를 진행하세요")) {
                status = HttpStatus.FORBIDDEN; // 계정이 삭제된 경우 403 반환
            } else if (errorMessage.equals("비밀번호가 틀렸습니다")) {
                status = HttpStatus.UNAUTHORIZED; // 비밀번호가 틀린 경우 401 반환
            }

            return ResponseEntity.status(status).body(errorMessage);
        }
    }

    @Operation(summary = "유저 수정")
    @PutMapping("/{seq}")
    public ResponseEntity<?> updateMember(@PathVariable Long seq, @RequestBody UpdateMemberRequest request) {
        try {
            memberService.updateMember(seq, request);
            return ResponseEntity.ok("수정이 완료되었습니다.");
        } catch (Exception e) {
            return ResponseEntity.status(status).body(e.getMessage());
        }
    }

    @Operation(summary = "유저 삭제")
    @DeleteMapping("/{seq}")
    public ResponseEntity<?> deleteMember(@PathVariable Long seq) {
        try {
            memberService.deleteMember(seq);
            return ResponseEntity.ok("탈퇴가 완료되었습니다.");
        } catch (Exception e) {
            return ResponseEntity.status(status).body(e.getMessage());
        }
    }

    @Operation(summary = "유저 전체조회")
    @GetMapping
    public ResponseEntity<List<MemberResponse>> selectAllMembers() {
        return ResponseEntity.ok(memberService.selectAllMembers());
    }

    @Operation(summary = "유저 상세조회(seq)")
    @GetMapping("/{seq}")
    public ResponseEntity<MemberResponse> selectMemberById(@PathVariable() Long seq) {
        return ResponseEntity.ok(memberService.selectMember(seq));
    }

    @Operation(summary = "유저 상세조회(email)")
    @GetMapping("/{email}")
    public ResponseEntity<MemberResponse> selectMemberByEmail(@PathVariable() String email) {
        return ResponseEntity.ok(memberService.selectMemberByEmail(email));
    }


}
