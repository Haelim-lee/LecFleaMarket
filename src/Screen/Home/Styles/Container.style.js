import styled from 'styled-components'
import {Up, Draw} from './KeyFrames.style'

export const Image = styled.img`
        height: 60vh;
        width: 27vw;
        background-size: contain;
        border-radius: 7%;
        margin-top: 5%;
        margin-left: 20%;
        position: relative;
        transform: translateY(6rem);
        animation: ${Up} 800ms linear forwards;
        float: left;

        &::before,
	&::after {
		position: absolute;
	}
`;

export const SubPanel = styled.div`
        width: 100vw;
        height: 80vh;
`;

export const FirstPanel = styled(SubPanel)`
border-bottom: solid 20vh #FF9933;
`;

export const SecondPanel = styled(SubPanel)`
border-bottom: solid 20vh #3399FF;
`;

export const FourthPanel = styled(SubPanel)`
border-bottom: solid 20vh #66CC00;
`;

export const ThirdPanel = styled(SubPanel)`
border-bottom: solid 20vh #663399;
`;




