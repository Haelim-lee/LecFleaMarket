import React, { useCallback, useState } from "react";
import { Button } from 'react-bootstrap';
import Carousels from './CarouselsPage/Carousels';
import Modal from "../../Common/Components/Modal/Modal";
import LoginElements from '../../Common/Components/Login/LoginElements';

const Home = () => {

  const [loginVisible, setLoginVisible] = useState(false);

  const loginStart = (e) => {
    setLoginVisible(true)
  }

  const loginClose = () => {
    setLoginVisible(false);
  }

  const loginCallBack = (i) =>{

    if(i != null){
      console.log(i);
    }
  }

  return (
    <>
      <Button onClick={loginStart}>Login</Button>
      <Modal visible={loginVisible}>
        <LoginElements callback={loginCallBack} close={loginClose}/>
      </Modal>
      <Carousels />
    </>
  )
};

export default Home;
