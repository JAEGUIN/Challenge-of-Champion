import React, { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./scss/style.scss";
import Main from './component/Main';
const App = () => {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="" element={<Main/>}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
