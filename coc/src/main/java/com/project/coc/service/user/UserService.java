package com.project.coc.service.user;

import com.project.coc.entity.user.User;

import java.util.List;

public interface UserService {
    List<User> getAllUsers();
    User getUserById(Long seq);
    User getUserByEmail(String email);
    void createUser(User user);
    void updateUser(User user);
    void deleteUser(Long seq);
}
