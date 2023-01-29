import React, { useCallback, useState } from "react";
import { Button } from 'react-bootstrap';
import Carousels from './CarouselsPage/Carousels';
import Modal from "../../Common/Components/Modal/Modal";
import LoginElements from '../../Common/Components/Login/LoginElements';

const Home = () => {

  // login modal visible
  const [loginVisible, setLoginVisible] = useState(false);

  // run login component
  const loginStart = (e) => {
    setLoginVisible(true)
  }

  // end login component
  const loginClose = () => {
    setLoginVisible(false);
  }

  // receive login result
  const loginCallBack = (i) =>{

    if(i != null){

      /*
      There is login result information. (i)

      ex)

      {
        id : gildong,
        pw : hong1234,
      }
      
      */
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
