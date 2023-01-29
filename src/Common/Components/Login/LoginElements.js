import React, { useCallback, useState } from "react";
import styled, { css } from 'styled-components';
import Datas from './Datas.js';
import Modal from '../Modal/Modal.js';
import { CloseButton } from "react-bootstrap";

const Login = styled.div`
    margin-left : 10%;
    margin-right : 10%;
`;

const CloseButtonGrid = styled.div`
    text-align: right;
`;

const TitleGrid = styled.div`
    text-align: center;
`;

const InputGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-gap: 15px;
    margin-top: 40px;
    margin-bottom: 20px;
`;

const DescGrid = styled.div`

    height : 40px;
    color: red;
`;

const ButtonGrid = styled.div`
    display: grid;
    grid-gap: 15px;
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
`;

function LoginElements() {
    const [desc, setDesc] = useState("");
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

        var target = Datas.find(d => d.id == inputId && d.pw == inputPw);
        if (target == null) {
            console.log("Login Fail");
            setDesc("Please check ID or Password.");
        }
        else {
            console.log("Login Success");
        }
    }

    const onCloseLogin = () => {
        setModalVisible(false);
    }

    return (
        <Modal visible={modalVisible}>
            <CloseButtonGrid>
                <CloseButton onClick={onCloseLogin} />
            </CloseButtonGrid>
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
                <DescGrid>{desc}</DescGrid>
                <ButtonGrid>
                    <LoginButton type='button' onClick={onClickLogin}>Login</LoginButton>
                </ButtonGrid>
            </Login>
        </Modal>
    )
};

export default LoginElements;