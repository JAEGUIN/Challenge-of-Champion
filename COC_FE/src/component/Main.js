import React, { useState, useEffect } from 'react';
import SideBar from "./SideBar";
import Header from './Header';
import { Button } from "reactstrap";
import { BrowserRouter as Router, Route, Routes, Outlet, useNavigate } from 'react-router-dom';

const Main = () => {

  const [logOut, setLogOut] = useState(false);
  // jwt
  const token = localStorage.getItem('token');
  const seq = localStorage.getItem('seq');

  const scrollToTop = () => {
    // window.scrollTo 메서드를 사용하여 스크롤을 최상단으로 이동
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // 부드러운 애니메이션 효과를 위해 'smooth' 옵션 사용 (선택 사항)
    });
  };

  const navigate = useNavigate();

  const goDetailContent = () => {
      // 특정 div를 클릭하면.....
      navigate('/registerBoard');
  };  

  useEffect(() => {
    if(logOut) {
      navigate('');
    }
  },[logOut]);
  
  return (
    <main>
      {token == null && (
        <div>로그인을 해주십시오!</div>
      )}
      {token != null && (
        <div className="pageWrapper d-lg-flex">
        {/********Sidebar**********/}
        <aside className="sidebarArea shadow" id="sidebarArea">
          <SideBar logOut={logOut} setLogOut={setLogOut}/>
        </aside>
        {/********Content Area**********/}
        <div className="contentArea">
          {/********header**********/}
          <Header />
          {/********Middle Content**********/}
          <Outlet />
          <Button className="scrollUp" onClick={scrollToTop}>↑</Button>
          <Button className="registBoard btn-light" onClick={goDetailContent}>+</Button>
        </div>
      </div>
      )}
    </main>
  );
};

export default Main;
