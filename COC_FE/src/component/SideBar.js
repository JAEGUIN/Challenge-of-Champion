import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import axios from 'axios';

{/* 사이드바 */}
const SideBar = (props) => {
    const [nickName,setNickName] = useState('');
    const [following, setFollowing] = useState(0);
    const [follower, setFollower] = useState(0);

    // jwt
    const token = localStorage.getItem('token');
    const seq = localStorage.getItem('seq');

    const showMobilemenu = () => {
        document.getElementById("sidebarArea").classList.toggle("showSidebar");
    };

    /* 현재 페이지 정보 */
    let location = useLocation();

    // 페이지이동
    const navigate = useNavigate();

    // 로그인한 계정 정보 조회
    const getUserInfo = async () => {
      try { 
        const response = await axios.get('/member/' + seq, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setNickName(response.data['nickName']);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // 나를 팔로우 하는 인원 수 
    const getFollower = async() => {
      try { 
        const response = await axios.get('/follow/' + seq, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setFollower(response.data.followCount);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    
    // 내가 팔로잉 하는 인원 수
    const getFollowing = async() => {
      try { 
        const response = await axios.get('/follow/ing/' + seq, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setFollowing(response.data.followingCount);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    // 내 프로필 상세
    const goProfil = () => {
      navigate('/userDetail', {state:{userSeq : localStorage.getItem('seq')} });
    };

    // 로그아웃
    const logOut = () => {

      if(!window.confirm("로그아웃하시겠습니까?")) return;

      localStorage.removeItem('token');
      props.setLogOut(true);
    };

    // 시작 시 호출
    useEffect(() => {
      getUserInfo();
      getFollower();
      getFollowing();
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
                <img src="/img/sample.jpg" className="profileImg" onClick={goProfil}/>
                <div className="profileDesc">
                    <div className="profileName">{nickName}</div>
                    <div className="d-flex">
                        <div className="followCount">팔로워 <br/> {follower}</div>
                        <div className="followCount">팔로잉 <br/> {following}</div>
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
              onClick={logOut}
            > 로그아웃</Link>
        </div>
    );
};

export default SideBar;