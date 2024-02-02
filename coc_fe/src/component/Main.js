import React, { useState } from 'react';
import SideBar from "./SideBar";
import Header from './Header';
import { Button } from "reactstrap";
import PopularArena from './PopularArena';
import MainContents from './MainContents';

const Main = () => {

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

            <PopularArena/>
            <MainContents/>
            <Button className="scrollUp">↑</Button>
          </div>
        </div>
      </main>
  );
};

export default Main;