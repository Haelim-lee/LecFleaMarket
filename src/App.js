import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Screen/Home/Home';
import MyPage from './Screen/MyPage';
import QaBoard from './Common/Components/Board/QaBoard';
import Login from './Common/Components/Login/LoginElements';
import Navbar from './Common/Components/NavBar/NavBarElements';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/FAQ" element={<QaBoard />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
