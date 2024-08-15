import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import axios from 'axios';
import '../css/Bookings.css';

function Bookings() {
    const [bookingsData, setBookingsData] = useState([]);

    useEffect(() => {
        // Fetch bookings data from the backend using Axios
        const fetchBookings = async () => {
            try {
                const response = await axios.get('/wanderershub/bookings'); // Adjust the URL to match your backend endpoint
                setBookingsData(response.data);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };

        fetchBookings();
    }, []); // Empty dependency array ensures this effect runs once on component mount

    return (
        <Container className="bookings-page py-5">
            <h2 className="text-center mb-4">Your Bookings</h2>
            <Table bordered hover responsive>
                <thead>
                    <tr>
                        <th>Booking ID</th>
                        <th>Date</th>
                        <th>Cost</th>
                        <th>Status</th>
                        <th>Customer Name</th>
                        <th>Tour Package</th>
                    </tr>
                </thead>
                <tbody>
                    {bookingsData.length > 0 ? (
                        bookingsData.map((booking, index) => (
                            <tr key={index}>
                                <td>{booking.bookingId}</td>
                                <td>{booking.date}</td>
                                <td>{booking.cost}</td>
                                <td className={booking.status.toLowerCase()}>{booking.status}</td>
                                <td>{booking.customerName}</td>
                                <td>{booking.tourPackage}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center">No bookings found</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    );
}

export default Bookings;
