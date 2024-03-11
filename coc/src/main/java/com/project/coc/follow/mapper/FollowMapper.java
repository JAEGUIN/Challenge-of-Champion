package com.project.coc.follow.mapper;

import com.project.coc.follow.model.*;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface FollowMapper {
    Follow followCount(long followSeq);

    List<FollowList> followList(long followSeq);

    Following followingCount(long userSeq);

    List<FollowingList> followingList(long userSeq);

    int followCheck(long userSeq, long followSeq);

    void postFollow(long userSeq, long followSeq);

    void deleteFollow(long userSeq, long followSeq);
}
