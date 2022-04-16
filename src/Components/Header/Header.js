import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import CustomLink from './CustomLink';
import './Header.css';
import user from '../../images/user.jpg';

const Header = () => {
    return (
        <Navbar bg="light" expand="md">
            <Container>
                <Navbar.Brand className="text-primary  logo" as={Link} to="/" >Gym Zone</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >

                        <Nav.Link className="text-uppercase" as={CustomLink} to='/'>Home</Nav.Link>
                        <Nav.Link className="text-uppercase" href="#action2">Services</Nav.Link>
                        <Nav.Link href="#action2">About</Nav.Link>
                        <Nav.Link className="text-uppercase" as={CustomLink} to='/login'>Log In</Nav.Link>
                    </Nav>
                    <div className="d-flex align-items-center">
                        <img src={user} height='40' width='40' className="rounded-circle" alt="" />
                        <h6 className="text-primary ms-3">Md.Mehedi Hassan</h6>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;