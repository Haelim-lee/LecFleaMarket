import React, { useCallback, useState } from "react";
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 350px 1fr;
    margin-top: 200px;
`;

const FacebookJoinButton = styled.button`
    grid-column: 2;
    text-align: center;
    margin-bottom: 20px;
    height : 60px;
    background : #3b5998;
    color : white;
`;

const KakaoJoinButton = styled.button`
    grid-column: 2;
    text-align: center;
    margin-bottom: 20px;
    height : 60px;
    background : #F7E600;
`;

const JoinButton = styled.button`
    grid-column: 2;
    text-align: center;
    margin-bottom: 20px;
    height : 60px;
`;



function JoinEnterance(){

    const navigate = useNavigate();

    const OpenFacebookJoinPage = () =>{        
        navigate("/JoinUsingFacebook");
    }

    const OpenKakaoJoinPage = () =>{        
        navigate("/JoinUsingKakao");
    }

    const OpenJoinPage = () =>{        
        navigate("/Join");
    }

    return (
        <Grid>
            <FacebookJoinButton type='button' onClick={OpenFacebookJoinPage}>
                Facebook 계정으로 가입하기
            </FacebookJoinButton>
            <KakaoJoinButton type='button' onClick={OpenKakaoJoinPage}>
                Kakao 계정으로 가입하기
            </KakaoJoinButton>
            <JoinButton type='button' onClick={OpenJoinPage}>
                이메일로 가입하기
            </JoinButton>

        </Grid>
    );
}

export default JoinEnterance;