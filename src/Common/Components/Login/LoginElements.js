import React, { useCallback, useState } from "react";
import styled, { css } from 'styled-components';
import Datas from './Datas.js';
import { useNavigate } from 'react-router-dom';

const Login = styled.div`
    display: grid;
    grid-template-columns: 1fr 400px 1fr;
    margin-top: 200px;
`;

const TitleGrid = styled.div`
    grid-column: 2;
    text-align: center;
`;

const InputGrid = styled.div`
    grid-column: 2;
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-gap: 15px;
    margin-top: 40px;
    margin-bottom: 20px;
`;

const DescGrid = styled.div`
    grid-column: 2;
    height : 40px;
    color: red;
`;

const ButtonGrid = styled.div`
    grid-column: 2;
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

function LoginElements({callback}) {
    const [desc, setDesc] = useState("");
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");
    const navigate = useNavigate();

    const handleInputId = (e) => {
        setInputId(e.target.value)
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    const onClickLogin = () => {

        var target = Datas.find(d => d.id == inputId && d.pw == inputPw);
        if (target == null) {
            // Fail Message
            setDesc("Please check ID or Password.");
        }
        else {
            // If Success, message is empty.
            setDesc("");
            window.sessionStorage.setItem("user", target);
            callback();
            navigate("/")
        }
    }
   
    return (
        <>
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
        </>
    )
};

export default LoginElements;