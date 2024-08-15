import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Navbar, Nav, Card } from 'react-bootstrap';
import NavigationBar from './Navbar';
import axios from 'axios';
import '../css/DestinationPackages.css'; // Import the CSS file
import travelbgimg from '../assests/images/travel-bg-image.jpg';

function DestinationPackages() {
    const [packages, setPackages] = useState([]); // State to store destination packages
    const [loading, setLoading] = useState(true); // State to manage loading state

    useEffect(() => {
        // Fetch destination packages from the backend
        axios.get('/wanderershub/packages') // Replace with your actual API endpoint
            .then(response => {
                setPackages(response.data); // Set the fetched data to state
                setLoading(false); // Set loading to false after data is fetched
            })
            .catch(error => {
                console.error('There was an error fetching the destination packages!', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>; // Render loading state
    }
    return (
        <>
            {/* Navigation Bar */}
            {/* <Navbar bg="light" expand="lg" className="mb-4">
                <Container>
                    <Navbar.Brand href="#home">WanderersHub</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Packages</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <Nav.Link href="#profile">
                                <i className="bi bi-person-circle"></i>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
            <NavigationBar />
             {/* Destination Packages */}
             <div className="bg-image">
                <Container className="overlay">
                    <Row className="mb-4">
                        {packages.map((pkg, index) => (
                            <Col sm={6} md={3} key={index}>
                                <Card className="mb-4 destination-card">
                                    <Card.Img variant="top" src={pkg.image} className="card-img" />
                                    <Card.Body>
                                        <Card.Title>{pkg.name}</Card.Title>
                                        <Button variant="primary">See Details</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                    <Button variant="secondary" className="load-more-btn mb-4">Load More</Button>
                </Container>
            </div>

            {/* Footer */}
            <footer className="bg-light text-center py-3 mt-4">
                <Container>
                    <span className="text-muted">&copy; 2024 WanderersHub. All rights reserved.</span>
                </Container>
            </footer>
        </>
    );
}

export default DestinationPackages;
