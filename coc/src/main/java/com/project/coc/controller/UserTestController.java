package com.project.coc.controller;

import com.project.coc.entity.user.User;
import com.project.coc.service.user.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@Slf4j
@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserTestController {


    private final UserService userService;

    @GetMapping
    public List<User> selectAllUsers() {
        return userService.selectAllUsers();
    }

    @GetMapping("/{seq}")
    public User selectUserById(@PathVariable Long seq) {
        return userService.selectUserById(seq);
    }

    @GetMapping
    public User selectUserByEmail(@PathVariable String email){
        return userService.selectUserByEmail(email);
    }

    @PostMapping
    public void regiUser(@RequestBody User user) {
        userService.regiUser(user);
    }

    @PutMapping("/{seq}")
    public void updateUser(@PathVariable Long seq, @RequestBody User user) {
        userService.updateUser(seq,user);
    }

    @DeleteMapping("/{seq}")
    public void deleteUser(@PathVariable Long seq) {
        userService.deleteUser(seq);
    }
}
