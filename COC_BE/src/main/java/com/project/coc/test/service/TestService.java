package com.project.coc.test.service;

import com.project.coc.test.model.Test;
import com.project.coc.test.model.TestRequest;

import java.util.List;

public interface TestService {
    void regiTest(TestRequest request);

    List<Test> selectTestList(TestRequest request);

    Test selectTest(String seq);
}
