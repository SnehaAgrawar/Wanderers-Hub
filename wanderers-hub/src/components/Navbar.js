import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import '../css/Navbar.css';

function NavigationBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <div className="container">
                <Navbar.Brand href="#">
                    <img src="images/logo.png" alt="Logo" className="logo" />
                    Wanderer's Hub
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/wanderershub/home">Home</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                        <Nav.Link href="#">Search</Nav.Link>
                        <Button variant="primary" className="ml-2">Login</Button>
                        <Button variant="secondary" className="ml-2">Signup</Button>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}

export default NavigationBar;
