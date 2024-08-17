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
        axios.get('http://localhost:8080/tourpackages')
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

    const handleButtonClick = (pkgId) => {
        navigate(`/wanderershub/bookings/${pkgId}`);
    };

    return (
        <section className='destinations-section'>
            
                <h2 className="text-center mb-4">Explore Destinations</h2>
                <Row>
                    {myData.map((post) => {
                        const { pkgId, pName, description } = post;
                        const imageUrl = imageMapping[pkgId] || 'path/to/default-image.jpg';

                        return (
                            <Col md={4} sm={6} xs={12} key={pkgId} className='mb-4'>
                                <Card className='card'>
                                    <Card.Img variant="top" src={imageUrl} alt={pName} />
                                    <Card.Body>
                                        <Card.Title>{pName}</Card.Title>
                                        <Card.Text>{description}</Card.Text>
                                        <Button 
                                            variant="primary"
                                            onClick={() => handleButtonClick(pkgId)}
                                        >
                                            Book Package
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
           
        </section>
    );
}

export default Destinations;
