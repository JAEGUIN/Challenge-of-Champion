import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./scss/style.scss";
import Main from './component/Main';
import RegisterPage from './member/RegisterPage';
import Login from './member/LoginPage';
import MyPage from './component/Mypage';  

const App = () => {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="" element={<Main/>}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/Mypage" element={<MyPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
