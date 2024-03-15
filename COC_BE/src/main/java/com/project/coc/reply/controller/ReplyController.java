package com.project.coc.reply.controller;

import com.project.coc.reply.model.Reply;
import com.project.coc.reply.model.PostReplyRequest;
import com.project.coc.reply.model.SearchReplyRequest;
import com.project.coc.reply.model.UpdateReplyRequest;
import com.project.coc.reply.service.ReplyService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/reply")
@RequiredArgsConstructor
@RestController
public class ReplyController {

    private final ReplyService service;

    @Operation(summary = "게시글당 답글 목록조회", description = "")
    @GetMapping
    public List<Reply> selectReplyByBoardSeq(SearchReplyRequest request){
        return service.selectReplyList(request);
    }

    @Operation(summary="답글 단건조회", description = "seq*")
    @GetMapping("/{seq}")
    public Reply selectReply(@PathVariable Long seq){
        return service.selectReply(seq);
    }

    @Operation(summary = "답글 등록", description = "content*, boardSeq*, userSeq*")
    @PostMapping("/regi")
    public void postReply(@RequestBody PostReplyRequest request){
        service.regiReply(request);
    }

    @Operation(summary = "답글 수정", description = "seq* , content*")
    @PutMapping("/{seq}")
    public void updateReply(@PathVariable Long seq, @RequestBody UpdateReplyRequest request){
        service.updateReply(seq, request);
    }

    @Operation(summary = "답글 삭제", description = "seq*")
    @DeleteMapping("/{seq}")
    public void deleteReply(@PathVariable Long seq){
        service.deleteReply(seq);
    }
}
