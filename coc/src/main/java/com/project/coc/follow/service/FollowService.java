package com.project.coc.follow.service;

import com.project.coc.follow.model.*;

import java.util.List;

public interface FollowService {
    Follow followCount(Long followSeq);

    List<FollowList> followList(Long followSeq);

    Following followingCount(Long userSeq);

    List<FollowingList> followingList(Long userSeq);

    void postFollow(PostFollowRequest request);

    void deleteFollow(PostFollowRequest request);
}
