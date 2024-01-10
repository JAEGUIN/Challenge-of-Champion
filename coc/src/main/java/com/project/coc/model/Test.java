package com.project.coc.model;

import common.model.CommonModel;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.ToString;

@ToString
@Getter
public class Test extends CommonModel {


    /**
     * 테스트 제목
     */
    @Schema(defaultValue = "제목")
    private String title;

    /**
     * 테스트 내용
     */
    @Schema(defaultValue = "내용")
    private String cont;

    /**
     * 테스트 작성자이름
     */
    @Schema(defaultValue = "사용자이름")
    private String userName;
}
