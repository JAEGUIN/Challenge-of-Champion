package com.project.coc.board.service;

import com.project.coc.board.model.Board;
import com.project.coc.board.model.PostBoardRequest;
import com.project.coc.board.model.SearchBoardRequest;
import com.project.coc.board.model.UpdateBoardRequest;

import java.util.List;

public interface BoardService {
    List<Board> selectBoardList(SearchBoardRequest request);

    Board selectBoard(Long seq);

    int regiBoard(PostBoardRequest request);

    void updateBoard(Long seq, UpdateBoardRequest request);

    void deleteBoard(Long seq);
}
