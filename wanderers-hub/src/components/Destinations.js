import React, { useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import '../css/Destinations.css';
import DescriptionSection from './DescriptionSection';
import destinationImg1 from '../assests/images/destination-img.jpg';
import destinationImg2 from '../assests/images/destination-img.jpg';
import destinationImg3 from '../assests/images/destination-img.jpg';
import destinationImg4 from '../assests/images/destination-img.jpg';
import destinationImg5 from '../assests/images/destination-img.jpg';

const imageList = [destinationImg1, destinationImg2, destinationImg3, destinationImg4, destinationImg5];

function Destinations() {
    const [scrollIndex, setScrollIndex] = useState(0);

    const handlePrevClick = () => {
        setScrollIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleNextClick = () => {
        setScrollIndex((prevIndex) => Math.min(prevIndex + 1, imageList.length - 3));
    };

    return (
        <Container id="destinations" className="py-5">
            <div className="scrollable-cards">
                <button className="scroll-arrow left-arrow" onClick={handlePrevClick}>{'<'}</button>
                <Row className="scroll-row" style={{ transform: `translateX(-${scrollIndex * 320}px)` }}>
                    {imageList.map((img, num) => (
                        <Col key={num} className="card-column">
                            <Card className="destination-card">
                                <Card.Img variant="top" src={img} />
                                <Card.Body>
                                    <Card.Title>Destination {num + 1}</Card.Title>
                                    <Card.Text>Description of destination {num + 1}.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <button className="scroll-arrow right-arrow" onClick={handleNextClick}>{'>'}</button>
            </div>
            <DescriptionSection />
        </Container>
    );
}

export default Destinations;
