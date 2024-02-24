import React, { useState, useEffect } from "react";
import Reply from "./Reply";
import RegisterReply from "./RegisterReply";
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const DetailContent = () => {
    const [contentView, setContentView] = useState(0); // 조회 수
    const [heartCnt, setHeartCnt] = useState(0); // 좋아요 수
    const [contentData, setContentData] = useState(''); // 컨텐츠 내용
    const [replyData, setReplyData] = useState([]); // 답글
    const [updatedAt, SetUpdatedAt] = useState(''); // 업데이트 날짜
    const [nickName, setNickName] = useState(''); // 닉네임
    const location = useLocation();
    const navigate = useNavigate();

    // jwt
    const token = localStorage.getItem('token');

    const goProfil = () => {
        navigate('/userDetail');
    };

    // 처음에 시작
    const fetchData = async () => {
        try {
          const response = await axios.get('/reply', {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                boardSeq: location.state.boardData.data.seq
            }
          });
          setReplyData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // 날짜를 2024-01-01 형식으로
    function formatDate(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
      
        return `${year}-${month}-${day}`;
    }


    useEffect(() => {
        setNickName(location.state.boardData.data.nickname);
        SetUpdatedAt(formatDate(location.state.boardData.data.updatedAt));
        setContentData(location.state.boardData.data.content);
        setContentView(location.state.boardData.data.count);
        setHeartCnt(location.state.boardData.data.heart);
        fetchData();
    }, []);

    return (
        <div className="detailContent">
            <div className="d-flex">
                <img src="/img/sample.jpg" className="contentProfileImg" onClick={goProfil}/>
                <div className="profileDesc d-flex">
                    <div className="profileName" onClick={goProfil}>{nickName}</div>
                    <div className="contentDate right-align-container"> {updatedAt} </div>
                </div>
            </div>
            <div>
                <div> {contentData} </div>
                <img src="/img/sampleContent.jpg" className="contentImg"/>
            </div>

            <div className="d-flex detailCnt">
                <div class="float-start detailLike">
                    ❤ {heartCnt}
                </div >
                <div class="float-none detailComment">
                    댓글 : {replyData.length}
                </div>
                <div class="float-end detailView">
                    조회 수 : {contentView}
                </div>
            </div>

            <div>
                {replyData.length === 0 ? (
                    <p> 답글이 없습니다. </p>
                ): (
                    replyData.map((item) => (
                        <Reply data={item}/>
                    ))
                )}
            </div>
            <RegisterReply boardSeq={location.state.boardData.data.seq}/>
        </div>
    );
};

export default DetailContent;