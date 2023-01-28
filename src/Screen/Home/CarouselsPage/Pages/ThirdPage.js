import React from 'react'
import { Header, TitleContainer, Container, SubHeader, DateHeader } from '../../Styles/Header.style';
import { Image, ThirdPanel } from '../../Styles/Container.style'


const ThirdPage = () => {
    return (
        <ThirdPanel>
            <Container>
                <Image src="img/book.jpg" />
                <TitleContainer>
                    <SubHeader>^^</SubHeader>
                    <Header>공부중</Header>
                    <DateHeader>2022.01.27~</DateHeader>
                </TitleContainer>
            </Container>
        </ThirdPanel>
    );
}

export default ThirdPage;