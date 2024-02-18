import React, { useState } from "react";

const GuestBook = () => {

    return (
        <div className="guestBook">
            <div className="d-flex">
                <img src="/img/sample.jpg" className="contentProfileImg"/>
                <div>
                    <div className="profileDesc d-flex">
                        <div className="profileName">대한민국</div>
                        <div className="contentDate right-align-container"> 2024/01/01 </div>
                    </div>
                    <div> 응원합니다!! </div>
                    <div className="d-flex">
                        <div>❤</div>
                        <div class="heartCnt">12</div>
                    </div>
                </div>
            </div>
            <div className="line"></div>
        </div>
    );
};

export default GuestBook;