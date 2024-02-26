package com.project.coc.board.controller;

import com.project.coc.board.model.Board;
import com.project.coc.board.model.PostBoardRequest;
import com.project.coc.board.model.SearchBoardRequest;
import com.project.coc.board.model.UpdateBoardRequest;
import com.project.coc.board.service.BoardService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/board")
@RequiredArgsConstructor
@RestController
public class BoardController {

    private final BoardService service;

    @Operation(summary="게시판 목록조회(+검색)", description = "content, category, userSeq")
    @GetMapping
    public List<Board> selectBoardList(SearchBoardRequest request, HttpServletRequest httpRequest){
//        HttpSession session = httpRequest.getSession();
//        String userInfo = (UserInfoDto)session.getAttribute("userInfo");
//        세션정보 하드코딩
        int userInfo = 2;

        return service.selectBoardList(request, userInfo);
    }

    @Operation(summary="게시판 상세조회", description = "seq*")
    @GetMapping("/{seq}")
    public Board selectBoard(@PathVariable("seq") Long seq){
        return service.selectBoard(seq);
    }

    @Operation(summary = "게시판 등록", description = "content* , category* , userSeq*")
    @PostMapping("/regi")
    public void postBoard(@RequestBody PostBoardRequest request){
        service.regiBoard(request);
    }

    @Operation(summary = "게시판 수정", description = "seq* , content*")
    @PutMapping("/{seq}")
    public void updateBoard(@PathVariable Long seq, @RequestBody UpdateBoardRequest request){
        service.updateBoard(seq, request);
    }

    @Operation(summary = "게시판 삭제", description = "seq*")
    @DeleteMapping("/{seq}")
    public void deleteBoard(@PathVariable Long seq){
        service.deleteBoard(seq);
    }
}
