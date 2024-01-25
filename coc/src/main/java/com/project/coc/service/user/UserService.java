package com.project.coc.service.user;

import com.project.coc.entity.user.User;

import java.util.List;

public interface UserService {
    List<User> selectAllUsers();
    User selectUserById(Long seq);
    User selectUserByEmail(String email);
    void regiUser(User user);
    void updateUser(Long seq,User user);
    void deleteUser(Long seq);
}
