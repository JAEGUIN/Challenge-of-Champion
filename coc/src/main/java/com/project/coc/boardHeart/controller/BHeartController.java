package com.project.coc.boardHeart.controller;

import com.project.coc.boardHeart.model.PostBHeart;
import com.project.coc.boardHeart.service.BHeartService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/boardHeart")
@RequiredArgsConstructor
@RestController
public class BHeartController {

    private final BHeartService service;

    @Operation(summary = "보드 하트 등록")
    @PostMapping("/post")
    public void postHeart(@RequestBody PostBHeart request){
        service.postHeart(request);
    }

    @Operation(summary = "보드 하트 삭제")
    @DeleteMapping("/delete")
    public void deleteHeart(@RequestBody PostBHeart request){
        service.deleteHeart(request);
    }
}
