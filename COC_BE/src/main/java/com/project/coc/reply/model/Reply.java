package com.project.coc.reply.model;

import com.project.coc.common.model.CommonModel;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
@Getter
public class Reply extends CommonModel {

    /**
     * 답변 글
     */
    @Schema(defaultValue = "답변 달았습니다.")
    private String content;

    /**
     * 작성자Seq
     */
    @Schema(defaultValue = "게시글Seq")
    private String boardSeq;

    /**
     * 작성자Seq
     */
    @Schema(defaultValue = "작성자 닉네임")
    private String nickname;

    /**
     * 작성자 번호
     */
    @Schema(defaultValue = "작성자 번호")
    private int userSeq;

    /**
     * 본인 하트 체크
     */
    @Setter
    @Schema(defaultValue = "본인 하트 체크")
    private boolean heartCheck;

    /**
     * 답변 하트
     */
    @Schema(defaultValue = "하트 수")
    private int heart;

    /**
     * 삭제 여부
     */
    @Schema(defaultValue = "삭제여부")
    private String delYn;
}
