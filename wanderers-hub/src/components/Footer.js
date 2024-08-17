import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../css/Footer.css';

function Footer() {
    return (
        <footer className="footer bg-dark text-white pt-4">
            <Row className="justify-content-center text-center">
                <Col md={12}>
                    <h5>Wanderer's Hub</h5>
                    <p>Your ultimate travel companion.</p>
                    <p>&copy; 2024 Wanderer's Hub. All Rights Reserved.</p>
                </Col>
            </Row>
        </footer>
    );
}

export default Footer;
