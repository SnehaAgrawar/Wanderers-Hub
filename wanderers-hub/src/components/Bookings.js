import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavigationBar from './Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';

const Booking = () => {
    const { pkgId } = useParams(); // Get pkgId from URL parameters
    const [user, setUser] = useState(null); // State to store user details
    const [bookingDate, setBookingDate] = useState(new Date().toISOString().split('T')[0]); // Default to today's date
    const [status, setStatus] = useState('Pending');
    const [price, setPrice] = useState(0); // State to store the price of the package
    const [bookingId, setBookingId] = useState(null); // State to store the booking ID
    const { auth } = useAuth(); // Get userId from auth context
    const navigate = useNavigate();

    useEffect(() => {
        if (!pkgId) {
            console.error("Package ID is missing from the URL");
            return;
        }

        // Fetch user details based on stored userId in auth context
        axios.get(`http://localhost:8080/users/${auth.userId}`)
            .then(response => {
                setUser(response.data);
            })
            .catch(error => console.error('Error fetching user data', error));
        
        // Fetch price for the package
        axios.get(`http://localhost:8080/tourpackages/get/${pkgId}`)
            .then(response => {
                setPrice(response.data.price);
            })
            .catch(error => console.error('Error fetching package data', error));
    }, [pkgId, auth.userId]);

    const handleBooking = () => {
        if (!user || !pkgId) {
            alert('Booking failed: user or package information is missing.');
            return;
        }

        const bookingData = {
            bookingDate: bookingDate,
            totalCost: price,
            status: status,
            userId: user.userId, // Pass the user ID directly
            pkgId: parseInt(pkgId, 10), // Pass the package ID directly as an integer
        };

        axios.post('http://localhost:8080/bookings/create', bookingData)
            .then(response => {
                console.log('Booking successful:', response.data);
                setBookingId(response.data.bookingId); // Set the booking ID from the response
                navigate('/wanderershub/payment/:bookingId'); // Redirect to payment page after successful booking
            })
            .catch(error => {
                console.error('There was an error processing the booking!', error);
                alert('Booking failed!');
            });
    };

    return (
        <Container className="booking-container">
            <NavigationBar />
            <h2>Confirm Booking</h2>
            <Form>
                {/* <Form.Group controlId="formBasicBookingId">
                    <Form.Label>Booking ID</Form.Label>
                    <Form.Control
                        type="text"
                        value={bookingId || 'Booking ID will be generated after confirmation'}
                        readOnly
                    />
                </Form.Group> */}
                <Form.Group controlId="formBasicDate">
                    <Form.Label>Booking Date</Form.Label>
                    <Form.Control
                        type="date"
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicStatus">
                    <Form.Label>Status</Form.Label>
                    <Form.Control
                        type="text"
                        value={status}
                        readOnly
                    />
                </Form.Group>
                <Form.Group controlId="formBasicTotalCost">
                    <Form.Label>Total Cost</Form.Label>
                    <Form.Control
                        type="text"
                        value={price}
                        readOnly
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPkgId">
                    <Form.Label>Package ID</Form.Label>
                    <Form.Control
                        type="text"
                        value={pkgId}
                        readOnly
                    />
                </Form.Group>
                <Button variant="primary" onClick={handleBooking}>
                    Confirm Booking
                </Button>
            </Form>
        </Container>
    );
};

export default Booking;
