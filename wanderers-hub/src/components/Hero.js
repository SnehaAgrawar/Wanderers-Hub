import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 
import '../css/Hero.css';
// import heroImage from '../assets/images/desc-img.jpg'; // Ensure the path is correct

function Hero() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/wanderershub/destinations'); 
    };

    return (
        <section id="hero" className="d-flex justify-content-center align-items-center">
            <div className="overlay"></div>
            <Row className="text-container">
                <Col className="text-center">
                    <h1 className="hero-title">Wanderer's Hub</h1>
                    <p className="hero-subtitle">Plan Like a Pro</p>
                    <Button variant="primary" size="lg" onClick={handleClick}>Start Planning</Button>
                </Col>
            </Row>
        </section>
    );
}

export default Hero;
