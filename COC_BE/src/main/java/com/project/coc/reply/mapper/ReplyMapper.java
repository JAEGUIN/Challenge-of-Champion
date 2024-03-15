package com.project.coc.reply.mapper;

import com.project.coc.reply.model.Reply;
import com.project.coc.reply.model.PostReplyRequest;
import com.project.coc.reply.model.SearchReplyRequest;
import com.project.coc.reply.model.UpdateReplyRequest;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface ReplyMapper {

    List<Reply> selectReplyList(SearchReplyRequest request);
    Reply selectReply(Long seq);

    void regiReply(PostReplyRequest request);

    void updateReply(UpdateReplyRequest request);

    void deleteReply(Long seq);
}
