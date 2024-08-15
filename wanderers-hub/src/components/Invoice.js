import React from 'react';
import { useParams } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../css/Invoice.css';

function Invoice() {
  const { booking_id } = useParams();

  const downloadInvoice = () => {
    const doc = new jsPDF();
    doc.text("Invoice", 20, 20);
    doc.text(`Booking ID: ${booking_id}`, 20, 30);
    // Add more invoice details here...
    doc.save('invoice.pdf');
  };

  return (
    <div>

      <div className="container mt-5 invoice-container">
        <h2>Invoice</h2>
        <p>Booking ID: {booking_id}</p>
        <p>Amount: $XYZ</p>
        <p>Payment Method: ABC</p>
        <p>Status: Paid</p>
        <button onClick={downloadInvoice} className="btn btn-primary">Download Invoice</button>
      </div>

    </div>
  );
}

export default Invoice;
