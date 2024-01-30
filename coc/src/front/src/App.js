import React, { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./scss/style.scss";
import Main from './component/Main';

import DetailContent from './component/DetailContent';
import Home from './component/Home';
const App = () => {

  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Main />} >
            <Route path="/" element={<Home />} />
            <Route path="/detailContent" element={<DetailContent />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
