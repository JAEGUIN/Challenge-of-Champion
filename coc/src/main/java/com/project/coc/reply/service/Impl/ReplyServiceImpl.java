package com.project.coc.reply.service.Impl;

import com.project.coc.jwt.CustomUserDetails;
import com.project.coc.reply.mapper.ReplyMapper;
import com.project.coc.reply.model.Reply;
import com.project.coc.reply.model.PostReplyRequest;
import com.project.coc.reply.model.SearchReplyRequest;
import com.project.coc.reply.model.UpdateReplyRequest;
import com.project.coc.reply.service.ReplyService;
import com.project.coc.replyHeart.mapper.RHeartMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Slf4j
@Service
public class ReplyServiceImpl implements ReplyService {

    private final ReplyMapper mapper;

    private final RHeartMapper heartMapper;

    //jwt에 담긴 userSeq
    private long getUserSeqFromAuthentication() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return ((CustomUserDetails)authentication.getPrincipal()).getSeq();
    }

    @Transactional(readOnly = true)
    @Override
    public List<Reply> selectReplyList(SearchReplyRequest request) {
        try {
            long userInfo = getUserSeqFromAuthentication();

            List<Reply> result = new ArrayList<>();
            result = mapper.selectReplyList(request);
            for(int i=0; i<result.size(); i++){
                if(userInfo == result.get(i).getUserSeq()){
                    Long replySeq = result.get(i).getSeq();
                    if(heartMapper.heartCheck(replySeq, userInfo)>0){
                        result.get(i).setHeartCheck(true);
                    }
                }
            }
            return result;
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Transactional(readOnly = true)
    @Override
    public Reply selectReply(Long seq) {
        try{
            return mapper.selectReply(seq);
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Transactional
    @Override
    public void regiReply(PostReplyRequest request) {
        try {
            mapper.regiReply(request);
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Transactional
    @Override
    public void updateReply(Long seq, UpdateReplyRequest request) {
        try {
            request.setSeq(seq);
            mapper.updateReply(request);
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Transactional
    @Override
    public void deleteReply(Long seq) {
        try {
            mapper.deleteReply(seq);
        }catch (Exception e){
            e.printStackTrace();
        }
    }
}
