import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../../src/Images/logo.jpg';

const Header = () => {
    return (
        <div>
             <Navbar sticky="top" bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
     Your School
      </Navbar.Brand>

    {/* <Navbar.Brand href="#home">Your School</Navbar.Brand> */}
    <Nav className="me-2" >
      <Nav.Link className='header-options' href="#about">About</Nav.Link>
      <Nav.Link className='header-options' href="#survices">Services</Nav.Link>
      <Nav.Link className='header-options' href="#registration">Registration</Nav.Link>
      <Nav.Link className='header-options' href="#login">LogIn</Nav.Link>
      <Nav.Link className='header-options' href="#logout">LogOut</Nav.Link>
     
      {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;