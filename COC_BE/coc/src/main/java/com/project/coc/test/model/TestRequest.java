package com.project.coc.test.model;

import com.project.coc.common.model.CommonModel;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TestRequest extends CommonModel {

    /**
     * 테스트 제목
     */
    private String title;

    /**
     * 테스트 내용
     */
    private String cont;

    /**
     * 테스트 작성자이름
     */
    private String userName;

    /**
     * 삭제 여부
     */
    private String delYn;
}
