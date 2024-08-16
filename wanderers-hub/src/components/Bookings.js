// import React, { useState, useEffect } from 'react';
// import { Container, Table } from 'react-bootstrap';
// import axios from 'axios';
// import '../css/Bookings.css';

// function Bookings() {
//     const [bookingsData, setBookingsData] = useState([]);

//     useEffect(() => {
//         // Fetch bookings data from the backend using Axios
//         const fetchBookings = async () => {
//             try {
//                 const response = await axios.get('/wanderershub/bookings'); // Adjust the URL to match your backend endpoint
//                 setBookingsData(response.data);
//             } catch (error) {
//                 console.error('Error fetching bookings:', error);
//             }
//         };

//         fetchBookings();
//     }, []); // Empty dependency array ensures this effect runs once on component mount

//     return (
//         <Container className="bookings-page py-5">
//             <h2 className="text-center mb-4">Your Bookings</h2>
//             <Table bordered hover responsive>
//                 <thead>
//                     <tr>
//                         <th>Booking ID</th>
//                         <th>Date</th>
//                         <th>Cost</th>
//                         <th>Status</th>
//                         <th>Customer Name</th>
//                         <th>Tour Package</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {bookingsData.length > 0 ? (
//                         bookingsData.map((booking, index) => (
//                             <tr key={index}>
//                                 <td>{booking.bookingId}</td>
//                                 <td>{booking.date}</td>
//                                 <td>{booking.cost}</td>
//                                 <td className={booking.status.toLowerCase()}>{booking.status}</td>
//                                 <td>{booking.customerName}</td>
//                                 <td>{booking.tourPackage}</td>
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan="6" className="text-center">No bookings found</td>
//                         </tr>
//                     )}
//                 </tbody>
//             </Table>
//         </Container>
//     );
// }

// export default Bookings;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';

const Booking = () => {
    const { pkgId } = useParams(); // Get pkgId from URL parameters
    const [user, setUser] = useState(null); // State to store user details
    const [bookingDate, setBookingDate] = useState(new Date().toISOString().split('T')[0]); // Default to today's date
    const [status, setStatus] = useState('Pending');
    const [price, setPrice] = useState(0); // State to store the price of the package
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch user details (assuming you have a userId or similar mechanism)
        const userId = 17; // Replace with the logic to retrieve the userId

        axios.get(`http://localhost:8080/users/${userId}`) // Corrected string interpolation with backticks
            .then(response => setUser(response.data))
            .catch(error => console.error('Error fetching user data', error));
        
        // Fetch price for the package
        axios.get(`http://localhost:8080/tourpackages/get/${pkgId}`) // Corrected string interpolation with backticks
            .then(response => setPrice(response.data.price))
            .catch(error => console.error('Error fetching package data', error));
    }, [pkgId]);

    const handleBooking = () => {
        if (!user || !pkgId) {
            alert('Booking failed: user or package information is missing.');
            return;
        }

        const bookingData = {
            bookingDate,
            totalCost: price,
            status,
            user: { userId: user.userId }, // Pass the userId in the booking data
            tourPackage: { pkgId } // Pass the pkgId in the booking data
        };

        axios.post('http://localhost:8080/bookings/create', bookingData)
            .then(response => {
                console.log('Booking successful:', response.data);
                navigate('/confirmation'); // Redirect to confirmation page after successful booking
            })
            .catch(error => {
                console.error('There was an error processing the booking!', error);
                alert('Booking failed!');
            });
    };

    return (
        <Container className="booking-container">
            <h2>Confirm Booking</h2>
            <Form>
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
                <Button variant="primary" onClick={handleBooking}>
                    Confirm Booking
                </Button>
            </Form>
        </Container>
    );
};

export default Booking;

