import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Screen/Home';
import MyPage from './Screen/MyPage';
// import Board from './Common/Component/Board/index.js';

function App(){
  return (
    <div className="App">
      <div id="Contents" className="MasterPanel">
        <Routes>
          <Route path="/" exact element={<Home/>} key="Home"/>
          <Route path="/MyPage" exact element={<MyPage/>} key="Mypage"/>
          {/* <Route path="/QaBoard/:NUM" render={(props) => (<Board {...props} Type={'QaBoard'}/>)} key="QaBoard"/> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
