package com.project.coc.service.user;

import com.project.coc.entity.user.User;
import com.project.coc.mapper.UserMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{

    private final UserMapper userMapper;

    @Transactional(readOnly = true)
    @Override
    public List<User> selectAllUsers() {
        try {
            return userMapper.selectAllUsers();
        } catch (Exception e) {
            e.printStackTrace();
            return Collections.emptyList();
        }
    }

    @Transactional(readOnly = true)
    @Override
    public User selectUserById(Long seq) {
        try {
            return userMapper.selectUserById(seq);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Transactional(readOnly = true)
    @Override
    public User selectUserByEmail(String email) {
        try {
            return userMapper.selectUserByEmail(email);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
    @Transactional
    @Override
    public void regiUser(User user) {
        try {
            userMapper.regiUser(user);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Transactional
    @Override
    public void updateUser(Long seq,User user) {
        try {
            userMapper.updateUser(seq, user);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Transactional
    @Override
    public void deleteUser(Long seq) {
        userMapper.deleteUser(seq);
    }
}
