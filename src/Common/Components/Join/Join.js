import React, { useCallback, useState } from "react";
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Datas from  "../Login/Datas";

const Join = styled.div`
    margin-top: 200px;
    display: grid;
    grid-template-columns: 1fr 400px 1fr;
`;

const InputGroup = styled.div`
    grid-column: 2;
    display: grid;
    grid-template-columns: 1.5fr 5fr;
    grid-template-rows: 2fr 1fr;
`;

const Label = styled.label`
    grid-column: 1;
    grid-row: 1;
`;

const Input = styled.input`
    grid-column: 2;
    grid-row: 1;
`;

const ErrorDescription = styled.label`
    grid-column: 2;
    grid-row: 2;
    color: red;
`;

const CorrectDescription = styled.label`
    grid-column: 2;
    grid-row: 2;
    color: green;
`;

const SubmitButton = styled.button`
    margin-top: 50px;
    grid-column: 2;
`;

const Margin = styled.div`
    width : 50px;
`

function JoinElements(){
    const [mail, setMail] = useState("");
    const [pw, setPW] = useState("");
    const [name, setName] = useState("");
    const [birth, setBirth] = useState();

    return(
        <Join>
            <CreateInputBox header='E-mail' type='text' name='input_mail' 
                checkValidation={CheckMailValidation}
                getDescription={GetMailDescription}
                inputChanges={setMail}/>
            <CreateInputBox header='Password' type='password' name='input_pw' 
                checkValidation={CheckPasswordValidation}
                getDescription={GetPasswordDescription}
                inputChanges={setPW}/>
            <CreateInputBox header='Password(R)' type='password' name='input_pw_r' 
                checkValidation={(p) => p == pw}
                getDescription={(value) => value == pw ? "두 패스워드가 일치합니다." : "두 패스워드가 일치하지 않습니다."}
                inputChanges={() => {}}/>
                
            <CreateInputBox header='Name' type='text' name='input_name' 
                checkValidation={() => true}
                getDescription={(value) => ""}
                inputChanges={setName}/>
            <CreateInputBox header='Birth' type='date' name='input_birth' 
                checkValidation={() => true}
                getDescription={(value) => ""}
                inputChanges={setBirth}/>

            <SubmitButton onClick={() => {
                    // TODO : DataBase에 등록
                    let info = {
                        email : mail,
                        pw : pw,
                        name : name,
                        birth : birth,
                    }

                    console.log(info);
                    }}>
                Submit
            </SubmitButton>
        </Join>
    )
}

function IsEmail(email) {
    const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    return emailRegex.test(email);
  };

function GetMailDescription( mail ){

    if(!IsEmail(mail))
       return "올바른 형식의 이메일 주소를 입력하세요.";

    return CheckMailValidation(mail) 
        ? "사용 가능한 이메일입니다." 
        : "이미 사용중인 이메일입니다.";
}

function CheckMailValidation( mail ){
    return IsEmail(mail) && Datas.find(d=> d.email == mail) == null;
}

function GetPasswordDescription( pw ){
    return CheckPasswordValidation(pw) 
    ? "사용 가능한 패스워드입니다."
     : "사용 불가능한 패스워드입니다."
}

function CheckPasswordValidation( pw ){
    // 길이 검사
    if(pw.length < 8)
        return false;

    // 특수문자 포함여부 검사
    if(pw.search(/\W|\s/g) <= -1)
        return false;

    return true;
}

function CreateInputBox( {header, name, type, checkValidation, getDescription, inputChanges} ){
    const [input, setInput] = useState("");
    const [inputDesc, setInputDesc] = useState("");
    const [isValid, setValid] = useState(false);

    const handle = (e) => {
        console.log("dasds");

        var value = e.target.value;
        var isValid = checkValidation(value);
        var desc = getDescription(value);

        setInput(value)
        setInputDesc(desc);
        setValid(isValid);

        inputChanges(value);
    }

    return (
        <InputGroup>
            <Label htmlFor={name}>{header}</Label>
            <Input type={type} name={name} value={input} onChange={handle} />
            {
                isValid
                    ?<CorrectDescription>{inputDesc}</CorrectDescription>
                    :<ErrorDescription>{inputDesc}</ErrorDescription>
            }
        </InputGroup>
    )
}

export default JoinElements;