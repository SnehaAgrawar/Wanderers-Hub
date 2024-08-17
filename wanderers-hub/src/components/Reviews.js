import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import '../css/Reviews.css';

function Reviews() {
    return (
        <section id="reviews" className="py-5">
    
                <h2 className="text-center mb-4">What Our Users Say</h2>
                <Row>
                    <Col md={4} sm={6} className="mb-4">
                        <Card className="review-card h-100">
                            <Card.Body>
                                <img src="../assets/images/avatar1.png" alt="User 1" className="rounded-circle mb-3" />
                                <Card.Title>User 1</Card.Title>
                                <Card.Text>"Great experience!"</Card.Text>
                                <div className="rating">⭐⭐⭐⭐⭐</div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} sm={6} className="mb-4">
                        <Card className="review-card h-100">
                            <Card.Body>
                                <img src="../assets/images/avatar2.png" alt="User 2" className="rounded-circle mb-3" />
                                <Card.Title>User 2</Card.Title>
                                <Card.Text>"Loved it!"</Card.Text>
                                <div className="rating">⭐⭐⭐⭐⭐</div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} sm={6} className="mb-4">
                        <Card className="review-card h-100">
                            <Card.Body>
                                <img src="../assets/images/avatar3.png" alt="User 3" className="rounded-circle mb-3" />
                                <Card.Title>User 3</Card.Title>
                                <Card.Text>"Would recommend!"</Card.Text>
                                <div className="rating">⭐⭐⭐⭐⭐</div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            
        </section>
    );
}

export default Reviews;
