import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/GuideDashBoard.css';
import NavigationBar from './Navbar';



const GuideDashboard = () => {
    const [assignedTours, setAssignedTours] = useState([]);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        setUserId(storedUserId);

        if (storedUserId) {
            fetchAssignedTours(storedUserId);
        }
    }, []);

    const fetchAssignedTours = async (guideId) => {
      if (!guideId) {
          console.error("Guide ID is missing");
          return;
      }
  
      try {
          const response = await axios.get(`http://localhost:8080/bookings/guide/${guideId}`);
          console.log('Fetched tours:', response.data);
          setAssignedTours(response.data);
      } catch (error) {
          console.error("Error fetching assigned tours", error.response ? error.response.data : error.message);
      }
  };
  

    return (
      <>
      <div>
      <NavigationBar />
      </div>
      <br/>
      <br/>
      <br/>
        <div className="container mt-5 guide-dashboard">
            <h2 className="mb-4">Guide Dashboard</h2>
            <div className="guide-dashboard-content">
                <button className="btn btn-primary mb-3" onClick={() => fetchAssignedTours(userId)}>
                    View Assigned Tours
                </button>
                
                <div className="assigned-tours">
                    <h3>Assigned Tours</h3>
                    {assignedTours.length === 0 ? (
                        <p>No assigned tours available.</p>
                    ) : (
                        <ul className="list-group">
                            {assignedTours.map((tour) => (
                                <li key={tour.bookingId} className="list-group-item">
                                    <strong>
                                        {tour.tourPackage && tour.tourPackage.pname ? tour.tourPackage.pname : 'No package name'}
                                    </strong><br/>
                                    Date: {new Date(tour.bookingDate).toLocaleDateString()}<br/>
                                    Status: {tour.status || 'No status'}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
        </>
    );
};

export default GuideDashboard;
