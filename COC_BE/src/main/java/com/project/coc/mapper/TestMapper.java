package com.project.coc.mapper;

import com.project.coc.model.Test;
import com.project.coc.model.TestRequest;
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
