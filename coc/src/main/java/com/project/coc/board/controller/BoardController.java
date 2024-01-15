package com.project.coc.board.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/board")
@RestController
public class BoardController {

    @GetMapping("/hi")
    public String hi(){return "hi board";}
}
