import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import NavigationBar from './Navbar';
import axios from 'axios';
import '../css/DestinationPackages.css'; // Import the CSS file

function DestinationPackages() {
    const [packages, setPackages] = useState([]); // State to store destination packages
    const [loading, setLoading] = useState(true); // State to manage loading state
    const [error, setError] = useState(''); // State to manage error

    useEffect(() => {
        // Fetch destination packages from the backend
        axios.get('http://localhost:8080/destination/') // Replace with your actual API endpoint
            .then(response => {
                setPackages(response.data); // Set the fetched data to state
                setLoading(false); // Set loading to false after data is fetched
            })
            .catch(error => {
                console.error('There was an error fetching the destination packages!', error);
                setError('Failed to load packages.'); // Set error message
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>; // Render loading state
    }

    if (error) {
        return <p className="text-danger">{error}</p>; // Render error message
    }

    return (
        <>
            {/* Navigation Bar */}
            <NavigationBar />
            
            {/* Destination Packages */}
            <div className="bg-image">
                <Container className="overlay">
                    <Row className="mb-4">
                        {packages.length > 0 ? (
                            packages.map((pkg, index) => (
                                <Col xs={12} sm={6} md={4} lg={3} key={index}>
                                    <Card className="mb-4 destination-card">
                                        <Card.Img variant="top" src={pkg.image} className="card-img" />
                                        <Card.Body>
                                            <Card.Title>{pkg.name}</Card.Title>
                                            <Button variant="primary">See Details</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        ) : (
                            <Col>
                                <p>No packages available.</p>
                            </Col>
                        )}
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
