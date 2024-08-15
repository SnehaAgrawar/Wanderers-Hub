import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import Header from './Header';

const PackageDetail = () => {
  // State to hold the itinerary data
  const [itinerary, setItinerary] = useState([]);
  const [loading, setLoading] = useState(true);  // To handle loading state
  const [error, setError] = useState(null);  // To handle error state

  useEffect(() => {
    // Function to fetch itinerary data from backend
    const fetchItinerary = async () => {
      try {
        const response = await axios.get('https://your-backend-url.com/api/itinerary');  // Replace with your actual API endpoint
        setItinerary(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching itinerary data');
        setLoading(false);
      }
    };

    fetchItinerary();
  }, []);

  return (
    <div className="container mt-4">
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <a className="navbar-brand" href="#">WanderersHub</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
        {/* <Navbar /> */}
      <h3>Package Name (12D/11N)</h3>

      {/* Display loading, error, or the table */}
      {loading ? (
        <div>Loading itinerary...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Day</th>
              <th scope="col">Description</th>
              <th scope="col">Location</th>
            </tr>
          </thead>
          <tbody>
            {itinerary.map((item, index) => (
              <tr key={index}>
                <th scope="row">{item.day}</th>
                <td>{item.description}</td>
                <td>{item.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="text-center mt-4">
        <button className="btn btn-primary">Book</button>
      </div>

      <footer className="text-center mt-4">
        <p>&copy; 2024 WanderersHub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PackageDetail;
