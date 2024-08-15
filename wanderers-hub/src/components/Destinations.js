import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../css/Destinations.css';

import img1 from '../assests/images/img1.jpg';
import img2 from '../assests/images/img2.jpg';
import img3 from '../assests/images/img33.jpg';
import img4 from '../assests/images/img4.jpg';
import img5 from '../assests/images/img5.jpg';
import img6 from '../assests/images/img6.jpg';
import img7 from '../assests/images/img7.jpg';
import img8 from '../assests/images/img8.jpg';
import img9 from '../assests/images/img9.jpg';
import img10 from '../assests/images/img10.jpg';

function Destinations() {
    const [myData, setMyData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/api/destinations')
            .then((res) => setMyData(res.data))
            .catch((err) => console.error(err));
    }, []);

    const imageMapping = {
        1: img1,
        2: img2,
        3: img3,
        4: img4, 
        5: img5,
        6: img6,
        7: img7,
        8: img8,
        9: img9,
        10: img10,

    };

    const handleButtonClick = (destId) => {
        navigate(`/package-detail/${destId}`);
    };

    return (
        <div className='w-screen'>
        <Container className='grid'>
            <Row>
                {myData.map((post) => {
                    const { destId, destName, state } = post;
                    const imageUrl = imageMapping[destId] || 'path/to/default-image.jpg';

                    return (
                        <Col md={4} sm={6} xs={12} key={destId} className='mb-4'>
                            <Card className='card'>
                                <Card.Img variant="top" src={imageUrl} alt={destName} />
                                <Card.Body>
                                    <Card.Title>{destName}</Card.Title>
                                    <Card.Text>{state}</Card.Text>
                                    <Button 
                                        variant="primary"
                                        onClick={() => handleButtonClick(destId)}
                                    >
                                        View Details
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </Container>
        </div>
    );
}

export default Destinations;
