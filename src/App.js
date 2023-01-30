import './App.css';
import React, { useCallback, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Screen/Home/Home';
import MyPage from './Screen/MyPage';
import FAQ from './Common/Components/Board/FAQ';
import Login from './Common/Components/Login/LoginElements';
import Navbar from './Common/Components/NavBar/NavBarElements';

function App() {

  // receive login result
  const loginCallBack = (i) =>{
    console.log(i);
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/MyPage" element={<MyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
