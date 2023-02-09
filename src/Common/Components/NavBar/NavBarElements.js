import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import React, { useEffect, useState } from "react";

const NavBarElements = (props) => {

  useEffect(() => {
    console.log("---------------------------")
    console.log("NavBarElements.js rendering")
    console.log("User")
    console.log(window.sessionStorage.getItem("user"));
    console.log("IsLogined");
    console.log(props.isLogined)
    console.log("---------------------------")
  });

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">LecFleaMarket</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/marketIntroduction">마켓소개</Nav.Link>
            <NavDropdown title="지원" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/NewsBoard">공지사항</NavDropdown.Item>
              <NavDropdown.Item href="/FAQ">FAQ</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="학습케어" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/Care">가벼운 실력평가</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Application">수강신청</Nav.Link>
            <NavDropdown title="강의정보?" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/Introduction">과목소개</NavDropdown.Item>
              <NavDropdown.Item href="/Instructors">과목별 강사진 보기</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Breakdown">수강내역</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Community">커뮤니티</Nav.Link>
          </Nav>
          <Nav>
            {
              props.isLogined
              ? <Nav.Link href="/Logout">로그아웃</Nav.Link>
              : <Nav.Link href="/Login">로그인</Nav.Link>
            }
            <Nav.Link eventKey={2} href="/JoinEnterance">회원가입</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default NavBarElements;