import './App.css';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Screen/Home/Home';
import MyPage from './Screen/MyPage';
import FAQ from './Common/Components/Board/FAQ';
import Login from './Common/Components/Login/LoginElements';
import Logout from './Common/Components/Login/Logout.js';
import Navbar from './Common/Components/NavBar/NavBarElements';
import JoinEnterance from './Common/Components/Join/JoinEnterance';
import Join from './Common/Components/Join/Join';
import JoinUsingFacebook from './Common/Components/Join/JoinUsingFacebook';
import JoinUsingKakao from './Common/Components/Join/JoinUsingKakao';

function App() {

  const [isLogined, setIsLogined] = useState(false);

  const loginCallback = () =>{
    setIsLogined(true);
    console.log("login");
  }

  const logoutCallback = () =>{
    setIsLogined(false);
    console.log("logout");
  }
  
  useEffect(() => {
    console.log("---------------------------")
    console.log("app.js rendering");
    console.log("User")
    console.log(window.sessionStorage.getItem("user"));
    console.log("IsLogined");
    console.log(isLogined)
    console.log("---------------------------")
  });

  return (
    <Router>
      <Navbar isLogined={isLogined}/>
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/Login" element={<Login callback={loginCallback}/>}/>
        <Route path="/Logout"  element={<Logout callback={logoutCallback}/>}/>
        <Route path="/JoinEnterance" element={<JoinEnterance/>}/>

        <Route path="/JoinUsingFacebook" element={<JoinUsingFacebook/>}/>
        <Route path="/JoinUsingKakao" element={<JoinUsingKakao/>}/>
        <Route path="/Join" element={<Join/>}/>
      </Routes>
    </Router>
  );
}

export default App;
