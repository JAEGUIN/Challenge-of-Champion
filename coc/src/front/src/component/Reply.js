import React from "react";

const Reply = () => {

    return (
        <div className="reply">
            <div className="line"></div>
            <div className="d-flex">
                <img src="/img/sample.jpg" className="contentProfileImg"/>
                <div>
                    <div className="profileDesc d-flex">
                        <div className="profileName">대한민국</div>
                        <div className="contentDate right-align-container"> 2024/01/01 </div>
                    </div>
                    <div className="replyContent">테스트</div>
                    <div className="replyLike"> 좋아요</div>
                </div>
            </div>
        </div>
    );
};

export default Reply;