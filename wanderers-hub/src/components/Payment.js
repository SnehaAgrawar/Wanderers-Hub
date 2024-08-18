import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import '../css/Payment.css';

function Payment() {
  const navigate = useNavigate();
  const { bookingId } = useParams(); // Use the correct parameter name

  const [paymentDetails, setPaymentDetails] = useState({
    booking_id: bookingId, // Use bookingId from useParams
    amount: '',
    payment_method: '',
    status: 'Pending',
    date: new Date().toISOString().split('T')[0]
  });

  const handleChange = (e) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/payments', paymentDetails)
      .then(response => {
        navigate(`/invoice/${bookingId}`); // Ensure bookingId is passed correctly
      })
      .catch(error => {
        console.error("There was an error processing the payment!", error);
      });
  };

  return (
    <div className="container mt-5 payment-container">
      <NavigationBar />
      <h2>Payment</h2>
      <form onSubmit={handleSubmit}>
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
