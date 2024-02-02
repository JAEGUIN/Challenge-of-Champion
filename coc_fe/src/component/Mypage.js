import React from 'react';
import SideBar from "./SideBar";
import Header from './Header';
import { Button } from "reactstrap";
import MypageContents from './MypageContents';

const MyPage = () => {

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
            <MypageContents/>
            <Button className="scrollUp">↑</Button>
          </div>
        </div>
      </main>
  );
};

export default MyPage;