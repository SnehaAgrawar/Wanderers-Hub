import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams } from 'react-router-dom';
import '../css/Payment.css';

function Payment() {
  const navigate = useNavigate();
  const { booking_id } = useParams(); // Get booking_id from the URL parameters

  const [paymentDetails, setPaymentDetails] = useState({
    booking_id: booking_id, // Use booking_id from useParams
    amount: '', // Payment amount
    payment_method: '', // Payment method
    status: 'Pending', // Default payment status
    date: new Date().toISOString().split('T')[0] // Default to today's date
  });

  const handleChange = (e) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/payments', paymentDetails)
      .then(response => {
        navigate(`/invoice/${booking_id}`); // Redirect to invoice page after successful payment
      })
      .catch(error => {
        console.error("There was an error processing the payment!", error);
      });
  };

  return (
    <div className="container mt-5 payment-container">
      <h2>Payment</h2>
      <form onSubmit={handleSubmit}>
        {/* <div className="form-group">
          <label>Booking ID</label>
          <input type="text" className="form-control" name="booking_id" value={paymentDetails.booking_id} readOnly />
        </div> */}
        <div className="form-group">
          <label>Amount</label>
          <input type="text" className="form-control" name="amount" value={paymentDetails.amount} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Payment Method</label>
          <select className="form-control" name="payment_method" value={paymentDetails.payment_method} onChange={handleChange} required>
            <option value="Credit Card">Credit Card</option>
            <option value="PayPal">PayPal</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Make Payment</button>
      </form>
    </div>
  );
}

export default Payment;
