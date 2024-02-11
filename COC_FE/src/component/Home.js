import React, { useState, useEffect } from 'react';
import PopularArena from './PopularArena';
import MainContents from './MainContents';
import axios from 'axios';

const Home = () => {
    const [contentData, setContentData] = useState([]);

    // 처음에 시작
    useEffect(() => {
        axios.get('/board')
            .then(response => {
                console.log(response);
                setContentData(response.data);
            });
    }, []);

    // data받고 난 후
    useEffect(() => {
        console.log(contentData);
        for(const content of contentData) {
            console.log(content["content"]);
        }

    }, [contentData]);

    return (
        <div>
            <PopularArena/>
            <MainContents/>
        </div>
    );
};

export default Home;