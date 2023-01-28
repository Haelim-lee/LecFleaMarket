import React from 'react'
import { Image, FirstPanel } from '../../Styles/Container.style'
import { Header, TitleContainer, Container, SubHeader, DateHeader } from '../../Styles/Header.style';

const FirstPage = () => {
    return (
        <FirstPanel>
            <Container>
                <Image src="img/pan.jpg" />
                <TitleContainer>
                    <SubHeader>서브입니다</SubHeader>
                    <Header>안녕하세용?</Header>
                    <DateHeader>2022.01.27~</DateHeader>
                </TitleContainer>
            </Container>
        </FirstPanel>
    );
}

export default FirstPage;