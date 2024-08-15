import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../css/Hero.css';

function Hero() {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleClick = () => {
        navigate('/wanderershub/packages'); // Redirect to DestinationPackages page
    };

    return (
        <section id="hero" className="d-flex justify-content-center align-items-center">
            <div className="hero-content text-center">
                <h1 className="hero-title">Wanderer's Hub</h1>
                <p className="hero-subtitle">Plan Like a Pro</p>
                <Button variant="primary" size="lg" onClick={handleClick}>Start Planning</Button>
            </div>
        </section>
    );
}

export default Hero;
