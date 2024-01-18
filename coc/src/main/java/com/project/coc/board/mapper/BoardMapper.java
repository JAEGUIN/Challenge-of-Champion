package com.project.coc.board.mapper;

import com.project.coc.board.model.Board;
import com.project.coc.board.model.BoardRequest;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface BoardMapper {
    List<Board> selectBoardList(BoardRequest request);

    Board selectBoard(String seq);

    void regiBoard(BoardRequest request);

    void updateBoard(String seq);

    void deleteBoard(String seq);
}
