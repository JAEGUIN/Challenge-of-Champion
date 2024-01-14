package com.project.coc.controller;

import com.project.coc.entity.user.User;
import com.project.coc.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/users")
public class UserTestController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{seq}")
    public User getUserById(@PathVariable Long seq) {
        return userService.getUserById(seq);
    }

    @PostMapping
    public void createUser(@RequestBody User user) {
        userService.createUser(user);
    }

    @PutMapping("/{seq}")
    public void updateUser(@PathVariable Long seq, @RequestBody User user) {
        // Set user seq based on path variable and update the user
        user.setSeq(seq);
        userService.updateUser(user);
    }

    @DeleteMapping("/{seq}")
    public void deleteUser(@PathVariable Long seq) {
        userService.deleteUser(seq);
    }
}
