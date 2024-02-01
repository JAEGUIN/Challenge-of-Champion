package com.project.coc.replyHeart.service;

import com.project.coc.replyHeart.model.PostRHeart;

public interface RHeartService {
    void postHeart(PostRHeart request);

    void deleteHeart(Long seq);
}
