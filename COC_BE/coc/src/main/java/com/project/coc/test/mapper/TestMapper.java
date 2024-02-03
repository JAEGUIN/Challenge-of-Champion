package com.project.coc.test.mapper;

import com.project.coc.test.model.Test;
import com.project.coc.test.model.TestRequest;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface TestMapper {
    void regiTest(TestRequest request);

    List<Test> selectTestList(TestRequest request);

    Test selectTest(String seq);
}
