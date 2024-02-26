import React, { useState, useEffect } from 'react';
import PopularArena from './PopularArena';
import MainContents from './MainContents';
import axios from 'axios';
import { throttle } from 'lodash';

const Home = () => {
    const [contentData, setContentData] = useState([]);
    const [pageNum, setPageNum] = useState(0);
    const [getData, setGetData] = useState(true);
    const token = localStorage.getItem('token');

    // 처음에 시작
    const fetchData = async () => {
        try {
          const response = await axios.get('/board', {
            headers: {
              Authorization: `Bearer ${token}`
            },
            params: {
              pageNum: pageNum
            }
          });
          if(response.data.length == 0) {
            alert("더 이상 조회할 데이터가 없습니다.");
            setGetData(false);
          } else {
            setContentData(prevData => [...prevData, ...response.data]);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    };

    // 스크롤 이벤트 추가
    const handleScroll = throttle(() => {
        const scrollTop = document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const scrollHeight = document.documentElement.scrollHeight;
        
        // 스크롤이 바닥에 닿았을 때
        if (scrollTop + windowHeight === scrollHeight && getData) {
            console.log("바닥찍음!");
            setPageNum(pageNum + 10);
            fetchData();
        } 
    } , 300);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]) ;

    

    return (
        <div>
            <PopularArena/>
            <div class="mainContents">
                {contentData.map((item) => (
                    <MainContents data={item}/>
                ))}
            </div>
        </div>
    );
};

export default Home;