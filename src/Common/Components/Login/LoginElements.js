import React, { useCallback, useState } from "react";
import styled, { css } from 'styled-components';
import Datas from './Datas.js';
import Modal from '../Modal/Modal.js';

const Login = styled.div`
    margin-left : 10%;
    margin-right : 10%;
`;

const TitleGrid = styled.div`
    text-align: center;
    margin-top: 5%;
`;

const InputGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-gap: 15px;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const ButtonGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
    margin-top: 5%;
    margin-bottom: 5%;
`;

const Title = styled.h2`
`;

const Label = styled.label`
    grid-column: 1;
`;
const Input = styled.input`
    grid-column: 2;
`;
const LoginButton = styled.button`
    grid-column: 1;
`;
const CancelButton = styled.button`
    grid-column: 2;
`;


function LoginElements() 
{
    const [modalVisible, setModalVisible] = useState(true);
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");

    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
 
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    const onClickLogin = () => {

        var target = Datas.find(d=> d.id == inputId && d.pw == inputPw);
        if(target == null){
            console.log("Login Fail");
        }
        else{
            console.log("Login Success");
        }
    }

    const onCloseLogin = () =>{
        setModalVisible(false);
    }

    return (
        <Modal visible={modalVisible}>
            <Login>
                <TitleGrid>
                    <Title>Login</Title>
                </TitleGrid>
                <InputGrid>
                    <Label htmlFor='input_id'>ID</Label>
                    <Input type='text' name='input_id' value={inputId} onChange={handleInputId} />
                    <Label htmlFor='input_pw'>PW</Label>
                    <Input type='password' name='input_pw' value={inputPw} onChange={handleInputPw} />
                </InputGrid>
                <ButtonGrid>
                    <LoginButton type='button' onClick={onClickLogin}>Login</LoginButton>
                    <CancelButton type='button' onClick={onCloseLogin}>Cancel</CancelButton>
                </ButtonGrid>
            </Login>
        </Modal>
    )
};

export default LoginElements;