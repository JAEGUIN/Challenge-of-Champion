package com.project.coc.follow.service.Impl;

import com.project.coc.follow.mapper.FollowMapper;
import com.project.coc.follow.model.*;
import com.project.coc.follow.service.FollowService;
import com.project.coc.jwt.CustomUserDetails;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Slf4j
@Service
public class FollowServiceImpl implements FollowService {

    private final FollowMapper mapper;

    //jwt에 담긴 userSeq
    private long getUserSeqFromAuthentication() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return ((CustomUserDetails)authentication.getPrincipal()).getSeq();
    }

    @Transactional(readOnly = true)
    @Override
    public Follow followCount(Long followSeq) {
        try{
            return mapper.followCount(followSeq);
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public List<FollowList> followList(Long followSeq) {
        try{
            return mapper.followList(followSeq);
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Transactional(readOnly = true)
    @Override
    public Following followingCount(Long userSeq) {
        try{
            return mapper.followingCount(userSeq);
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Transactional(readOnly = true)
    @Override
    public List<FollowingList> followingList(Long userSeq) {
        try{
            return mapper.followingList(userSeq);
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Transactional
    @Override
    public void postFollow(PostFollowRequest request) {
        try {
            long userSeq = getUserSeqFromAuthentication();
            long followSeq = request.getFollowSeq();

            if(userSeq == followSeq){
                throw new Exception("자기자신은 팔로우할 수 없습니다.");
            }else if(mapper.followCheck(userSeq, followSeq)>0){
                throw new Exception("이미 팔로우 되어 팔로우할 수 없습니다.");
            }

            mapper.postFollow(userSeq, followSeq);
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Transactional
    @Override
    public void deleteFollow(PostFollowRequest request) {
        try{
            long userSeq = getUserSeqFromAuthentication();
            long followSeq = request.getFollowSeq();

            mapper.deleteFollow(userSeq, followSeq);
        }catch (Exception e){
            e.printStackTrace();
        }
    }
}
