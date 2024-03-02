package com.project.coc.replyHeart.mapper;

import com.project.coc.replyHeart.model.PostRHeart;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface RHeartMapper {
    void postHeart(PostRHeart request);

    void deleteHeart(PostRHeart request);

    int heartCheck(Long replySeq, Long userInfo);
}
