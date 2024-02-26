package com.project.coc.boardHeart.mapper;

import com.project.coc.boardHeart.model.PostBHeart;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface BHeartMapper {
    void postHeart(PostBHeart request);

    void deleteHeart(Long seq);

    int heartCheck(Long boardSeq, int userInfo);
}
