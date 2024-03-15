import React, { useState, useEffect } from "react";

const UserBook = (props) => {
    const [nickName,setNickName] = useState('대한민국');
    const [updatedAt,SetUpdatedAt] = useState('2024/01/01');
    const [content, setContent] = useState('응원합니다!!!!!');
    const [heartCnt, setHeartCnt] = useState(0);

    // 시작 시 호출
    useEffect(() => {
        setNickName(props.data.nickname);
        setContent(props.data.content);
        SetUpdatedAt(formatDate(props.data.updatedAt));
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
        <div className="guestBook">
            <div className="d-flex">
                <img src="/img/sample.jpg" className="contentProfileImg"/>
                <div>
                    <div className="profileDesc d-flex">
                        <div className="profileName"> {nickName} </div>
                        <div className="contentDate right-align-container"> {updatedAt} </div>
                    </div>
                    <div> {content} </div>
                    <div className="d-flex">
                        <div>❤</div>
                        <div className="heartCnt">{heartCnt}</div>
                    </div>
                </div>
            </div>
            <div className="line"></div>
        </div>
    );
};

export default UserBook;