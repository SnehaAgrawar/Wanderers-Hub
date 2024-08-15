import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import '../css/Reviews.css';

function Reviews() {
    return (
        <section id="reviews" className="bg-light py-5">
            <Container>
                <h2 className="text-center mb-4">What Our Users Say</h2>
                <Row>
                    <Col md={4}>
                        <Card className="review-card">
                            <Card.Body>
                                <img src="images/avatar1.png" alt="Avatar 1" className="rounded-circle mb-3" />
                                <Card.Title>User 1</Card.Title>
                                <Card.Text>"Great experience!"</Card.Text>
                                <div className="rating">⭐⭐⭐⭐⭐</div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="review-card">
                            <Card.Body>
                                <img src="images/avatar1.png" alt="Avatar 2" className="rounded-circle mb-3" />
                                <Card.Title>User 2</Card.Title>
                                <Card.Text>"Loved it!"</Card.Text>
                                <div className="rating">⭐⭐⭐⭐⭐</div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="review-card">
                            <Card.Body>
                                <img src="images/avatar1.png" alt="Avatar 3" className="rounded-circle mb-3" />
                                <Card.Title>User 3</Card.Title>
                                <Card.Text>"Would recommend!"</Card.Text>
                                <div className="rating">⭐⭐⭐⭐⭐</div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Reviews;
