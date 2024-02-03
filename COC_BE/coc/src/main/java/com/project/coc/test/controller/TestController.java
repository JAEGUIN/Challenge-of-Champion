package com.project.coc.test.controller;

import com.project.coc.test.model.Test;
import com.project.coc.test.model.TestRequest;
import com.project.coc.test.service.TestService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/test")
@RequiredArgsConstructor
@RestController
public class TestController {

    private final TestService service;

    @GetMapping("/hi")
    public String hi(){
        return "hi";
    }

    @Operation(summary="테스트 목록보기(+검색)", description = "title, cont, userName")
    @GetMapping("/list")
    public List<Test> selectTestList(TestRequest request){
        return service.selectTestList(request);
    }

    @Operation(summary="테스트 상세보기", description = "seq*")
    @GetMapping("/{seq}")
    public Test selectTest(@PathVariable("seq") String seq){
        return service.selectTest(seq);
    }


    @Operation(summary="테스트 등록", description = "title*, cont* userName*")
    @PostMapping("/regi")
    public void regiTest(@RequestBody TestRequest request){
        service.regiTest(request);
    }

}
