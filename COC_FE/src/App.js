import React, { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./scss/style.scss";
import Main from './component/Main';
import RegisterPage from './member/RegisterPage';
import Login from './member/LoginPage';
import DetailContent from './component/DetailContent';
import Home from './component/Home';
import RegisterBoard from './component/RegisterBoard';
import UserDetail from './component/UserDetail';

const App = () => {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route element={<Main />} >
            <Route path="/home" element={<Home />} />
            <Route path="/detailContent" element={<DetailContent />} />
            <Route path="/registerBoard" element={<RegisterBoard />} />
            <Route path="/userDetail" element={<UserDetail />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
