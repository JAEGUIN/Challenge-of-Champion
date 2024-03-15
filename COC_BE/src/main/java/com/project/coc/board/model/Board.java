package com.project.coc.board.model;

import com.project.coc.common.model.CommonModel;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
@Getter
public class Board extends CommonModel {

    /**
     * 게시판 글
     */
    @Schema(defaultValue = "안녕하세요 좋은 아침 입니다.")
    private String content;

    /**
     * 게시판 카테고리
     */
    @Schema(defaultValue = "게시판 카테고리(b1)")
    private String category;

    /**
     * 게시판 카운트
     */
    @Schema(defaultValue = "기본이 0, 자동으로 +1")
    private int count;

    /**
     * 게시판 작성자명
     */
    @Schema(defaultValue = "작성자 닉네임")
    private String nickname;

    /**
     * 작성자 번호
     */
    @Schema(defaultValue = "작성자 번호")
    private int userSeq;

    /**
     * 삭제 여부
     */
    @Schema(defaultValue = "삭제여부")
    private String delYn;

    /**
     * 본인 하트 체크
     */
    @Setter
    @Schema(defaultValue = "본인 하트 체크")
    private boolean heartCheck;

    /**
     * 게시판 하트 수
     */
    @Schema(defaultValue = "게시판 하트 수")
    private int heart;

    /**
     * 게시판 답글 수
     */
    @Schema(defaultValue = "게시판 답글 수")
    private int replycount;
}
