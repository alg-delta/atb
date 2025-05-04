import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <Navbar bg="info" data-bs-theme="">
        <Container>
          <Navbar.Brand href="#home">
          <img
              alt=""
              src="Логотип_АТБ.svg.png" 
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Магаз</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Головна</Nav.Link>
            <Nav.Link href="#features">Корзина</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
      
  )
}

