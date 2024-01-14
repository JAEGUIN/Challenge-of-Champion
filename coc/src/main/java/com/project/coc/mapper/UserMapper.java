package com.project.coc.mapper;

import com.project.coc.entity.user.User;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
@Mapper
public interface UserMapper {
    List<User> getAllUsers();
    User getUserById(Long seq);
    void createUser(User user);
    void updateUser(User user);
    void deleteUser(Long seq);

    User getUserByEmail(String email);
}