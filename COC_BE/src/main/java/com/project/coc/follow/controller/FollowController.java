package com.project.coc.follow.controller;

import com.project.coc.follow.model.*;
import com.project.coc.follow.service.FollowService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/follow")
@RequiredArgsConstructor
@RestController
public class FollowController {

    private final FollowService service;

    @Operation(summary = "(나를 팔로우하는)팔로워 수", description = "")
    @GetMapping("/{followSeq}")
    public Follow followCount(@PathVariable Long followSeq){
        return service.followCount(followSeq);
    }

    @Operation(summary = "(나를 팔로우하는)팔로워 목록", description = "")
    @GetMapping("/{followSeq}/list")
    public List<FollowList> followList(@PathVariable("followSeq") Long followSeq){
        return service.followList(followSeq);
    }

    @Operation(summary = "(내가 팔로우하는)팔로잉 수", description = "")
    @GetMapping("/ing/{userSeq}")
    public Following followingCount(@PathVariable Long userSeq){
        return service.followingCount(userSeq);
    }

    @Operation(summary = "(내가 팔로우하는)팔로잉 목록 ", description = "")
    @GetMapping("/ing/{userSeq}/list")
    public List<FollowingList> followingList(@PathVariable("userSeq") Long userSeq){
        return service.followingList(userSeq);
    }

    @Operation(summary = "팔로우 등록", description = "작동하면 팔로잉,팔로워 수 새로고침")
    @PostMapping("/post")
    public void postFollow(@RequestBody PostFollowRequest request){
        service.postFollow(request);
    }

    @Operation(summary = "팔로우 취소", description = "작동하면 팔로잉,팔로워 수 새로고침")
    @DeleteMapping("/delete")
    public void deleteFollow(@RequestBody PostFollowRequest request){
        service.deleteFollow(request);
    }
}
