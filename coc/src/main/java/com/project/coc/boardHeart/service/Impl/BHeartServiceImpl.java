package com.project.coc.boardHeart.service.Impl;

import com.project.coc.boardHeart.mapper.BHeartMapper;
import com.project.coc.boardHeart.model.PostBHeart;
import com.project.coc.boardHeart.service.BHeartService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Slf4j
@Service
public class BHeartServiceImpl implements BHeartService {

    private final BHeartMapper mapper;

    @Transactional
    @Override
    public void postHeart(PostBHeart request) {
        try {
            mapper.postHeart(request);
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Transactional
    @Override
    public void deleteHeart(Long seq) {
        try{
            mapper.deleteHeart(seq);
        }catch (Exception e){
            e.printStackTrace();
        }
    }
}
