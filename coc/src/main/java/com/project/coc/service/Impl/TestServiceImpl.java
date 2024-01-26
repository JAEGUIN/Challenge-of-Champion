package com.project.coc.service.Impl;

import com.project.coc.mapper.TestMapper;
import com.project.coc.model.Test;
import com.project.coc.model.TestRequest;
import com.project.coc.service.TestService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Slf4j
@Service
public class TestServiceImpl implements TestService {

    private final TestMapper mapper;

    @Transactional
    @Override
    public void regiTest(TestRequest request) {
        try{
            mapper.regiTest(request);
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Transactional(readOnly = true)
    @Override
    public List<Test> selectTestList(TestRequest request) {
        try{
            List<Test> result = new ArrayList<>();
            result = mapper.selectTestList(request);
            System.out.println("run testList");
            return result;
        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    @Transactional(readOnly = true)
    @Override
    public Test selectTest(String seq) {
        try {
            Test detail = new Test();
            detail = mapper.selectTest(seq);
            return detail;
        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }
}
