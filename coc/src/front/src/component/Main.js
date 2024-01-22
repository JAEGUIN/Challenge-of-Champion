import React, { useState } from 'react';
import SideBar from "./SideBar";
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { Container } from "reactstrap";
import PopularArena from './PopularArena';

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

          </div>
        </div>
      </main>
  );
}

export default Main;