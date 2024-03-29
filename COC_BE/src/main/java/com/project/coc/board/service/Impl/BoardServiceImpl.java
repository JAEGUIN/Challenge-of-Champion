package com.project.coc.board.service.Impl;

import com.project.coc.board.mapper.BoardMapper;
import com.project.coc.board.model.Board;
import com.project.coc.board.model.PostBoardRequest;
import com.project.coc.board.model.SearchBoardRequest;
import com.project.coc.board.model.UpdateBoardRequest;
import com.project.coc.board.service.BoardService;
import com.project.coc.boardHeart.mapper.BHeartMapper;
import com.project.coc.jwt.CustomUserDetails;
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
public class BoardServiceImpl implements BoardService {

    private final BoardMapper mapper;

    private final BHeartMapper heartMapper;

    //jwt에 담긴 userSeq
    private long getUserSeqFromAuthentication() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return ((CustomUserDetails)authentication.getPrincipal()).getSeq();
    }

    @Transactional(readOnly = true)
    @Override
    public List<Board> selectBoardList(SearchBoardRequest request) {
        try {
            long userInfo = getUserSeqFromAuthentication();

            List<Board> result = new ArrayList<>();
            result = mapper.selectBoardList(request);
            for(int i=0; i<result.size(); i++){

                Long boardSeq = result.get(i).getSeq();
                if(heartMapper.heartCheck(boardSeq, userInfo)>0){
                    result.get(i).setHeartCheck(true);
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
    public Board selectBoard(Long seq) {
        try {
            long userInfo = getUserSeqFromAuthentication();

            Board detail = new Board();
            detail = mapper.selectBoard(seq);
            Long boardSeq = detail.getSeq();
            if(heartMapper.heartCheck(boardSeq, userInfo)>0){
                detail.setHeartCheck(true);
            }
            mapper.updateCount(seq);
            return detail;
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Transactional
    @Override
    public void regiBoard(PostBoardRequest request) {
        try {
            mapper.regiBoard(request);
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Transactional
    @Override
    public void updateBoard(Long seq, UpdateBoardRequest request) {
        try {
            Board checkBoard = mapper.selectBoard(seq);
            if(checkBoard == null){
                System.out.println("존재하지 않는 게시물 입니다.");
            }
            request.setSeq(seq);
            mapper.updateBoard(request);
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Transactional
    @Override
    public void deleteBoard(Long seq) {
        try{
            mapper.deleteBoard(seq);
        }catch (Exception e){
            e.printStackTrace();
        }
    }
}