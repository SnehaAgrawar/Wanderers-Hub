import React from 'react';
import { Container } from 'react-bootstrap';
import '../css/Footer.css';

function Footer() {
    return (
        <footer className="bg-dark text-white py-4">
            <Container className="text-center">
                <p>&copy; 2024 Wanderer's Hub. All rights reserved.</p>
                <div className="social-icons">
                    {/* Add social media icons if needed */}
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
