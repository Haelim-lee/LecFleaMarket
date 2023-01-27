import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const NavBarElements = () => {
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
              <NavDropdown.Item href="/Care/*">1:1 학습멘토링</NavDropdown.Item>
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
            <Nav.Link href="/Login">로그인</Nav.Link>
            <Nav.Link eventKey={2} href="/Join">회원가입</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default NavBarElements;