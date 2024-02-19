import React, { useState, useEffect } from 'react';

const Reply = (props) => {
    const [nickName, setNickName] = useState('');
    const [replyContent, setReplyContent] = useState('');
    const [replyDate, setReplyDate] = useState('');
    const [heartCnt, setHeartCnt] = useState(0);

    useEffect(() => {
        setNickName(props.data.nickname);
        setReplyContent(props.data.content);
        setReplyDate(formatDate(props.data.updatedAt));
        setHeartCnt(props.data.heart);
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
                    <div className="replyLike"> ❤ {heartCnt}</div>
                </div>
            </div>
        </div>
    );
};

export default Reply;