import React from 'react'
import { Header, TitleContainer, Container, SubHeader, DateHeader } from '../../Styles/Header.style';
import { Image, FourthPanel } from '../../Styles/Container.style'


const FourthPage = () => {
    return (
        <FourthPanel>
            <Container>
                <Image src="img/note.jpg" />
                <TitleContainer>
                    <SubHeader>서브입니다</SubHeader>
                    <Header>안녕하세오오</Header>
                    <DateHeader>2022.01.27~</DateHeader>
                </TitleContainer>
            </Container>
        </FourthPanel>

    );
}

export default FourthPage;