import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Reply = (props) => {
    const [nickName, setNickName] = useState('');
    const [replyContent, setReplyContent] = useState('');
    const [replyDate, setReplyDate] = useState('');
    const [heartCnt, setHeartCnt] = useState(0);
    const [heart, setHeart] = useState(false);

    // jwt
    const token = localStorage.getItem('token');

    // heart누름
    const clickHeart = async () => {
        // 이미 좋아요가 눌려졌을 시
        if(heart) {
            try {
                const response = await axios.delete('/replyHeart/delete', {
                    data: {
                        replySeq: props.data.seq,
                        userSeq: localStorage.getItem('seq')
                    },
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setHeartCnt(heartCnt-1);
            } catch (error) {
            console.error('Error fetching data:', error);
            }
        }
        else { // 좋아요가 안 눌려졌을 시
            try {
                const response = await axios.post('/replyHeart/post', {
                    replySeq: props.data.seq,
                    userSeq: localStorage.getItem('seq')
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setHeartCnt(heartCnt+1);
                } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        setHeart(!heart);
    };

    // 시작 시 호출
    useEffect(() => {
        setNickName(props.data.nickname);
        setReplyContent(props.data.content);
        setReplyDate(formatDate(props.data.updatedAt));
        setHeartCnt(props.data.heart);
        setHeart(props.data.heartCheck);
    }, []);

    // 날짜를 2024-01-01 형식으로
    function formatDate(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
      
        return `${year}-${month}-${day}`;
    }

    return (
        <div className="reply">
            <div className="line"></div>
            <div className="d-flex">
                <img src="/img/sample.jpg" className="contentProfileImg"/>
                <div>
                    <div className="profileDesc d-flex">
                        <div className="profileName">{nickName}</div>
                        <div className="contentDate right-align-container"> {replyDate} </div>
                    </div>
                    <div className="replyContent">{replyContent}</div>
                    <div className="replyLike" onClick={clickHeart}>
                        {heart && ("❤ ")}
                        {!heart && ("🤍 ")}
                        {heartCnt}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reply;