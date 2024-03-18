package com.project.coc.board.mapper;

import com.project.coc.board.model.Board;
import com.project.coc.board.model.PostBoardRequest;
import com.project.coc.board.model.SearchBoardRequest;
import com.project.coc.board.model.UpdateBoardRequest;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface BoardMapper {
    List<Board> selectBoardList(SearchBoardRequest request);

    Board selectBoard(Long seq);

    void regiBoard(PostBoardRequest request);

    void updateBoard(UpdateBoardRequest request);

    void deleteBoard(Long seq);

    void updateCount(Long seq);
}
