import React, { useState } from 'react';
import SideBar from "./SideBar";
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { Container } from "reactstrap";

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
            <Container className="p-4 wrapper" fluid>
                <Outlet />
            </Container>
          </div>
        </div>
      </main>
  );
}

export default Main;