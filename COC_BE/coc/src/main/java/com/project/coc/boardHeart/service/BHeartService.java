package com.project.coc.boardHeart.service;

import com.project.coc.boardHeart.model.PostBHeart;

public interface BHeartService {
    void postHeart(PostBHeart request);

    void deleteHeart(Long seq);
}
