import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Screen/Home';
import MyPage from './Screen/MyPage';
import Login from './Common/Components/Login/LoginElements';
import Navbar from './Common/Components/NavBar/NavBarElements';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
