import React from "react";
import { Button } from "reactstrap";
import Tab from "./Tab";

const MypageContents = () => {

    return (
        <div className="mainContent">
            {/* 프로필 부분 */}
            <div className="mypageDiv">
                <div style={{textAlign:"center"}}>
                    <img src="/img/sample.jpg" className="contentProfileImg"/>
                </div>
                <div >
                    <ul>
                        <li>대한민국</li>
                        <li><Button  >팔로우</Button></li>
                    </ul>
                    <ul>
                        <li>팔로잉 : 404</li>
                        <li>팔로우 : 100</li>
                    </ul>
                </div>
            </div>
            <div>
                자기소개
            </div>
            <Button style={{width:"100%"}}>구독</Button>
            <Tab/>
        </div>
    );
};

export default MypageContents;