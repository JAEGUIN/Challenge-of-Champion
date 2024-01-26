import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./scss/style.scss";
import Main from './component/Main';
import RegisterPage from './member/RegisterPage';
import Login from './member/LoginPage';
const App = () => {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="" element={<Main/>}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
