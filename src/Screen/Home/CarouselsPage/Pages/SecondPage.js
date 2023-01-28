import React from 'react'
import { Header, TitleContainer, Container, SubHeader, DateHeader } from '../../Styles/Header.style';
import { Image, SecondPanel } from '../../Styles/Container.style'


const SecondPage = () => {
    return (
        <SecondPanel>
            <Container>
                <Image src="img/study.jpg" />
                <TitleContainer>
                    <SubHeader>서브으으응</SubHeader>
                    <Header>와아아아앙</Header>
                    <DateHeader>2022.01.27~</DateHeader>
                </TitleContainer>
            </Container>
        </SecondPanel>
    );
}

export default SecondPage;