import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MainContents = (props) => {
    const [content, setContent] = useState('');
    const [nickName, setNickName] = useState('');
    const [contentDate, setContentDate] = useState('');
    const [heartCnt, setHeartCnt] = useState(0);
    const [replyCnt, setReplyCnt] = useState(0);

    const navigate = useNavigate();

    // 게시판 상세로 이동한다
    const goDetailContent = () => {
        // 특정 div를 클릭하면.....
        navigate('/detailContent', {state:{boardData : props} });
    };

    // 상세 프로필로 이동한다
    const goProfil = () => {
        navigate('/userDetail');
    };

    // 시작 시 호출
    useEffect(() => {
        setContentDate(formatDate(props.data.updatedAt));
        setContent(props.data.content);
        setNickName(props.data.nickname);
        setHeartCnt(props.data.heart);
        setReplyCnt(props.data.replycount);
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
        <div className="mainContent">
            {/* 프로필 부분 */}
            <div className="d-flex">
                <img onClick={goProfil} src="/img/sample.jpg" className="contentProfileImg"/>
                <div>
                    <div className="profileDesc d-flex">
                        <div className="profileName" onClick={goProfil}>{nickName}</div>
                        <div className="contentDate right-align-container"> {contentDate} </div>
                    </div>
                    <div className="d-flex">
                        <div className="heartCnt">❤ {heartCnt}</div>
                        <div className="replyCnt">💬 {replyCnt}</div>
                    </div>
                </div>
            </div>
            <div onClick={goDetailContent}>
                <div><br/>{content}</div>
                <img src="/img/sampleContent.jpg" className="contentImg"/>
            </div>
        </div>
    );
};

export default MainContents;