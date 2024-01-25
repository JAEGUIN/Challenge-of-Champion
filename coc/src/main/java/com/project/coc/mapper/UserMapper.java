package com.project.coc.mapper;

import com.project.coc.entity.user.User;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
@Mapper
public interface UserMapper {
    List<User> selectAllUsers();
    User selectUserById(Long seq);
    User selectUserByEmail(String email);
    void regiUser(User user);
    void updateUser(Long seq, User user);
    void deleteUser(Long seq);


}