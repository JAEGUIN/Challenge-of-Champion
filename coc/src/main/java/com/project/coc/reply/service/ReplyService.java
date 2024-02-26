package com.project.coc.reply.service;

import com.project.coc.reply.model.Reply;
import com.project.coc.reply.model.PostReplyRequest;
import com.project.coc.reply.model.SearchReplyRequest;
import com.project.coc.reply.model.UpdateReplyRequest;

import java.util.List;

public interface ReplyService {

    List<Reply> selectReplyList(SearchReplyRequest request, int userInfo);
    Reply selectReply(Long seq);

    void regiReply(PostReplyRequest request);

    void updateReply(Long seq, UpdateReplyRequest request);

    void deleteReply(Long seq);
}
