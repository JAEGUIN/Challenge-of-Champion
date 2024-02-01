package com.project.coc.replyHeart.service.Impl;

import com.project.coc.replyHeart.mapper.RHeartMapper;
import com.project.coc.replyHeart.model.PostRHeart;
import com.project.coc.replyHeart.service.RHeartService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Slf4j
@Service
public class RHeartServiceImpl implements RHeartService {

    private final RHeartMapper mapper;

    @Transactional
    @Override
    public void postHeart(PostRHeart request) {
        try {
            mapper.postHeart(request);
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Transactional
    @Override
    public void deleteHeart(Long seq) {
        try {
            mapper.deleteHeart(seq);
        }catch (Exception e){
            e.printStackTrace();
        }
    }
}
