import React from 'react';
import SideBar from "./SideBar";
import Header from './Header';
import { Button } from "reactstrap";
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';

const Main = () => {

  const scrollToTop = () => {
    // window.scrollTo 메서드를 사용하여 스크롤을 최상단으로 이동
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // 부드러운 애니메이션 효과를 위해 'smooth' 옵션 사용 (선택 사항)
    });
  };

  return (
    <main>
      <div className="pageWrapper d-lg-flex">
        {/********Sidebar**********/}
        <aside className="sidebarArea shadow" id="sidebarArea">
          <SideBar/>
        </aside>
        {/********Content Area**********/}
        <div className="contentArea">
          {/********header**********/}
          <Header />
          {/********Middle Content**********/}
          <Outlet />
          <Button className="scrollUp" onClick={scrollToTop}>↑</Button>
        </div>
      </div>
    </main>
  );
};

export default Main;
