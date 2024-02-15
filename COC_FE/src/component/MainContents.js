import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MainContents = (props) => {

    const navigate = useNavigate();

    const goDetailContent = () => {
        // 특정 div를 클릭하면.....
        navigate('/detailContent');
    };

    const [content, setContent] = useState("");
    const [nickName, setNickName] = useState("");

    useEffect(() => {
        console.log(props);
        setContent(props.data.content);
        setNickName(props.data.nickname);
    }, []);

    return (
        <div className="mainContent">
            {/* 프로필 부분 */}
            <div className="d-flex">
                <img src="/img/sample.jpg" className="contentProfileImg"/>
                <div className="profileDesc d-flex">
                    <div className="profileName">{nickName}</div>
                    <div className="contentDate right-align-container"> 2024/01/01 </div>
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