import React from 'react';
import { useParams } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Navbar';
import '../css/Invoice.css';

function Invoice() {
  const { bookingId } = useParams(); // Use the correct parameter name
  
  console.log(bookingId); // Debugging purpose

  const downloadInvoice = () => {
    const doc = new jsPDF();
    doc.text("Invoice", 20, 20);
    doc.text(`Booking ID: ${bookingId}`, 20, 30);
    doc.save('invoice.pdf');
  };

  return (
    <div className="container mt-5 invoice-container">
      <NavigationBar />
      <h2>Invoice</h2>
      <p>Booking ID: {bookingId}</p>
      <p>Amount: $XYZ</p>
      <p>Payment Method: ABC</p>
      <p>Status: Paid</p>
      <button onClick={downloadInvoice} className="btn btn-primary">Download Invoice</button>
    </div>
  );
}

export default Invoice;
