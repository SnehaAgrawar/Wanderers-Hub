import React from 'react';
import { Button } from 'react-bootstrap';
import '../css/Hero.css';

function Hero() {
    return (
        <section id="hero" className="d-flex justify-content-center align-items-center">
            <div className="hero-content text-center">
                <h1 className="hero-title">Wanderer's Hub</h1>
                <p className="hero-subtitle">Plan Like a Pro</p>
                <Button variant="primary" size="lg">Start Planning</Button>
            </div>
        </section>
    );
}

export default Hero;
