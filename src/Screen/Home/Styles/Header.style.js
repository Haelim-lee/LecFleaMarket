import styled from 'styled-components';
import {Up, FedeIn } from './KeyFrames.style';

export const Header = styled.h1`
    font-family: 'Anton', sans-serif; // 구글폰트
    position: relative;
	font-size: 4rem;
	line-height: 1;
`;

export const TitleContainer = styled.div`
    width: 27vw;
    height: 60vh;
    margin: 10% 20% 50% 5%;
    animation: ${Up} 900ms linear forwards;
    transform: translateY(6rem);
`;

export const Container = styled.div`
    display: flex;
	min-height: 100vh;
    animation: ${FedeIn} 2.5s;
`;

export const SubHeader = styled.h2`
    position: relative;
    color: black;
    font-size: 2rem;
`;

export const DateHeader = styled.h3`
    color: white;
    font-size: 1.1rem;
    margin-top: 58%;
    max-width: 100%;
    padding-right: 15px;
    padding-bottom: 10px;
    border-bottom: 2px solid white;
`;
