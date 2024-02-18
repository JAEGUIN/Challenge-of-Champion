import React, { useState } from "react";
import { Button } from "reactstrap";
import GuestBook from "./GuestBook";

const UserDetail = () => {

    return (

        <div className="userDetail">
            <div className="userProfil">
                <div className="d-flex">
                    <img src="/img/sample.jpg" className="contentProfileImg"/>
                    <div className="profileDesc">
                        <div className="d-flex">
                            <div className="profileName">대한민국</div>
                            <Button className="followBtn">팔로우</Button>
                        </div>
                        <div className="d-flex">
                            <div className="followCount">팔로워 <br/> 5000</div>
                            <div className="followCount">팔로잉 <br/> 5000</div>
                        </div>
                    </div>
                </div>
                <div className="profilDesc">동해물과 백두산이 마르고 닳도록 하느님이 보우하사~</div>
                <Button>구독</Button>
            </div>
            
            <div className="profilMenu d-flex">
                <div className="profileMenuList">게시글</div>
                <div className="profileMenuList">더미1</div>
                <div className="profileMenuList">더미2</div>
                <div className="profileMenuList">더미3</div>
                <div className="profileMenuList">방명록</div>
            </div>
            <div className="line"></div>
            <GuestBook/>
            <GuestBook/>
        </div>
    );
};

export default UserDetail;