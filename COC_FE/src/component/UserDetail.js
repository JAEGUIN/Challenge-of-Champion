import React, { useState, useEffect } from 'react';
import { Button } from "reactstrap";
import GuestBook from "./GuestBook";
import axios from 'axios';

const UserDetail = (props) => {
    const [nickName, setNickName] = useState('');
    const [profileCont, SetProfilCont] = useState('');
    // jwt
    const token = localStorage.getItem('token');
    //const seq = props.seq;
    const seq = 10;

     // 처음에 시작
     const fetchData = async () => {
        try { // 로그인한 계정 정보 조회
          const response = await axios.get('/member/' + seq, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setNickName(response.data['nickName']);
          SetProfilCont(response.data['profileCont']);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    // 시작 시 실행되는 함수
    useEffect(() => {
        fetchData();
    },[]);
    return (

        <div className="userDetail">
            <div className="userProfil">
                <div className="d-flex">
                    <img src="/img/sample.jpg" className="contentProfileImg"/>
                    <div className="profileDesc">
                        <div className="d-flex">
                            <div className="profileName">{nickName}</div>
                            <Button className="followBtn">팔로우</Button>
                        </div>
                        <div className="d-flex">
                            <div className="followCount">팔로워 <br/> 5000</div>
                            <div className="followCount">팔로잉 <br/> 5000</div>
                        </div>
                    </div>
                </div>
                <div className="profilDesc">{profileCont}</div>
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