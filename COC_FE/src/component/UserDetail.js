import React, { useState, useEffect } from 'react';
import { Button } from "reactstrap";
import { BrowserRouter as Router, Route, Routes, Outlet, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import FollowList from './FollowList';

const UserDetail = (props) => {
    const [nickName, setNickName] = useState('');
    const [profileCont, SetProfilCont] = useState('');
    const [following, setFollowing] = useState(0);
    const [follower, setFollower] = useState(0);
    const [showModal, setShowModal] = useState(false); // 모달의 열림/닫힘 상태를 관리하는 state
    const [modalData,setModalData] = useState([]);
    const [followState, setFollowState] = useState(false);

    const location = useLocation();
    // jwt
    const token = localStorage.getItem('token');
    const seq = location.state.userSeq;
    
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

    // 팔로우 시도
    const tryFollow = async() => {
      if(followState) {
        // 팔로우 취소
        try { 
          const response = await axios.delete('/follow/delete', {
            data: {
              followSeq: seq
            },
            headers: {
              Authorization: `Bearer ${token}`
            }
            });
          alert("팔로우 취소!");
          setFollower(follower -1);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      else {
        // 팔로우 시도
        try { 
          const response = await axios.post('/follow/post', {
            followSeq: seq
          },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          alert("팔로우 성공!");
          setFollower(follower +1);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      setFollowState(!followState);
    }

    // 모달데이터 가져오기(following, follower)
    const getModalData = async (follow) => {
      setModalData([]);

      var ajaxUrl = '';
      if(follow) ajaxUrl = '/follow/' + seq + '/list';
      else ajaxUrl = '/follow/ing/' + seq + '/list';
      
      try {
        const response = await axios.get(ajaxUrl, {
            headers: {
              Authorization: `Bearer ${token}`
          }
        });
        setModalData(response.data);
        response.data.forEach(item => {
          if(item.email == localStorage.getItem('email')) setFollowState(true);
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // 시작 시 실행되는 함수
    useEffect(() => {
        fetchData();
        getFollower();
        getFollowing();
        getModalData(true);
    },[]);

    // 모달을 열기 위한 함수
    const openModal = (follow) => {
      
      getModalData(follow);
      setShowModal(true);
    };

    return (

        <div className="userDetail">
            <div className="userProfil">
                <div className="d-flex">
                    <img src="/img/sample.jpg" className="contentProfileImg"/>
                    <div className="profileDesc">
                        <div className="d-flex">
                            <div className="profileName">{nickName}</div>
                            {/* 현재 로그인 계정과 같으면 팔로우 버튼 숨김*/}
                            {seq != localStorage.getItem('seq') && (
                              <Button className="followBtn" onClick={tryFollow}>
                                {followState == true && '팔로우 취소'}
                                {followState == false && '팔로우'}
                              </Button>
                            )}
                        </div>
                        <div className="d-flex">
                            <div className="followCount" onClick={() => openModal(true)}>팔로워 <br/> {follower}</div>
                            <div className="followCount" onClick={() => openModal(false)}>팔로잉 <br/> {following}</div>
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
            <Outlet context={{
              nick:nickName
            }}/>
            <FollowList showModal={showModal} setShowModal={setShowModal} modalData={modalData}/>
        </div>
    );
};

export default UserDetail;