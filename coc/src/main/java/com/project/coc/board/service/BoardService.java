package com.project.coc.board.service;

import com.project.coc.board.model.Board;
import com.project.coc.board.model.BoardRequest;
import com.project.coc.board.model.UpdateBoardRequest;

import java.util.List;

public interface BoardService {
    List<Board> selectBoardList(BoardRequest request);

    Board selectBoard(String seq);

    void regiBoard(BoardRequest request);

    void updateBoard(String seq, UpdateBoardRequest request);

    void deleteBoard(String seq);
}
