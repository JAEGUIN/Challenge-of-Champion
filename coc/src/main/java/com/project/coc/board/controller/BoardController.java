package com.project.coc.board.controller;

import com.project.coc.board.model.Board;
import com.project.coc.board.model.BoardRequest;
import com.project.coc.board.model.UpdateBoardRequest;
import com.project.coc.board.service.BoardService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/board")
@RequiredArgsConstructor
@RestController
public class BoardController {

    private final BoardService service;

    @Operation(summary="게시판 목록보기(+검색)", description = "content, category, userSeq")
    @GetMapping
    public List<Board> selectBoardList(BoardRequest request){
        return service.selectBoardList(request);
    }

    @Operation(summary="게시판 상세보기", description = "seq*")
    @GetMapping("/{seq}")
    public Board selectBoard(@PathVariable("seq") String seq){
        return service.selectBoard(seq);
    }

    @Operation(summary = "게시판 등록", description = "추가로 넣을 것!*")
    @PostMapping("/regi")
    public void postBoard(@RequestBody BoardRequest request){
        service.regiBoard(request);
    }

    @Operation(summary = "게시판 수정", description = "추가로 넣을 것!*")
    @PutMapping("/{seq}")
    public void updateBoard(@PathVariable String seq, @RequestBody UpdateBoardRequest request){
        service.updateBoard(seq, request);
    }

    @Operation(summary = "게시판 삭제", description = "추가로 넣을 것!*")
    @DeleteMapping("/{seq}")
    public void deleteBoard(@PathVariable String seq){
        service.deleteBoard(seq);
    }
}
