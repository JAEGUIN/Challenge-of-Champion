package com.project.coc.replyHeart.controller;

import com.project.coc.replyHeart.model.PostRHeart;
import com.project.coc.replyHeart.service.RHeartService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/replyHeart")
@RequiredArgsConstructor
@RestController
public class RHeartController {

    private final RHeartService service;

    @Operation(summary = "답변 하트 등록")
    @PostMapping("/post")
    public void postHeart(@RequestBody PostRHeart request){
        service.postHeart(request);
    }

    @Operation(summary = "답변 하트 삭제")
    @DeleteMapping("/{seq}")
    public void deleteHeart(@PathVariable Long seq){
        service.deleteHeart(seq);
    }

}
