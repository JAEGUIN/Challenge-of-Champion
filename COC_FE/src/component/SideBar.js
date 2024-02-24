import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { Button } from "reactstrap";
import axios from 'axios';

{/* 사이드바 */}
const SideBar = () => {
    const [nickName,setNickName] = useState('임시닉네임');
    // jwt
    const token = localStorage.getItem('token');
    const seq = localStorage.getItem('seq');

    const showMobilemenu = () => {
        document.getElementById("sidebarArea").classList.toggle("showSidebar");
    };

     {/* 현재 페이지 정보 */}
    let location = useLocation();

     // 처음에 시작
    const fetchData = async () => {
        axios.get('member', {
          seq: seq
      },
      {
          headers: {
              Authorization: `Bearer ${token}`
          }
      })
      .then(response => {
          // 요청이 성공한 경우의 처리
          console.log(response.data);
      })
      .catch(error => {
          // 요청이 실패한 경우의 처리
          alert('에러 발생:', error);
      });
    };

    // 시작 시 호출
    useEffect(() => {
      //fetchData();
    },[]);

    return (
        <div className="p-3 sidebar-container">
            {/* 닫기 버튼*/}
            <div className="closeBtn">
                <Button
                    close
                    size="sm"
                    onClick={() => showMobilemenu()}
                ></Button>
            </div>

            {/* 프로필 부분 */}
            <div className="d-flex align-items-center">
                <img src="/img/sample.jpg" className="profileImg"/>
                <div className="profileDesc">
                    <div className="profileName">{nickName}</div>
                    <div className="d-flex">
                        <div className="followCount">팔로워 <br/> 5000</div>
                        <div className="followCount">팔로잉 <br/> 5000</div>
                    </div>
                </div>
            </div>

            {/* 링크 부분 */}
            <div className="mt-2">
                <Link
                  className="sideLink text-secondary"
                >게시판</Link>
                <Link
                  className="sideLink text-secondary"
                >결투장</Link>
                <Link
                  className="sideLink text-secondary"
                >랭크</Link>
                <Link
                  className="sideLink text-secondary"
                >게임</Link>
                <Link
                  className="sideLink text-secondary"
                >상점관리</Link>
                <Link
                  className="sideLink text-secondary"
                >코인충전</Link>
                <Link
                  className="sideLink text-secondary"
                >설정</Link>
            </div>

            <Link
              className="bottom-button"
            > 로그아웃</Link>
        </div>
    );
};

export default SideBar;