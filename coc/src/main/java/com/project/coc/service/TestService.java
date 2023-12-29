package com.project.coc.service;

import com.project.coc.model.Test;
import com.project.coc.model.TestRequest;

import java.util.List;

public interface TestService {
    void regiTest(TestRequest request);

    List<Test> selectTestList(TestRequest request);

    Test selectTest(String seq);
}
