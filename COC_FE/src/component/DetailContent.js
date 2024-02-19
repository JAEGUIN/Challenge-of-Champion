import React, { useState, useEffect } from "react";
import Reply from "./Reply";
import RegisterReply from "./RegisterReply";
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const DetailContent = () => {
    const [contentData, setContentData] = useState('');
    const [replyData, setReplyData] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

    const goProfil = () => {
        navigate('/userDetail');
    };

    // 처음에 시작
    const fetchData = async () => {
        try {
          const response = await axios.get('/reply', {
            params: {
                boardSeq: location.state.boardData.data.seq
            }
          });
          setReplyData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        setContentData(location.state.boardData.data.content);
        fetchData();
    }, []);

    return (
        <div className="detailContent">
            <div className="d-flex">
                <img src="/img/sample.jpg" className="contentProfileImg" onClick={goProfil}/>
                <div className="profileDesc d-flex">
                    <div className="profileName" onClick={goProfil}>대한민국</div>
                    <div className="contentDate right-align-container"> 2024/01/01 </div>
                </div>
            </div>
            <div>
                <div> {contentData} </div>
                <img src="/img/sampleContent.jpg" className="contentImg"/>
            </div>

            <div className="d-flex detailCnt">
                <div class="float-start detailLike">
                    좋아요
                </div >
                <div class="float-none detailComment">
                    댓글
                </div>
                <div class="float-end detailView">
                    조회 수
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