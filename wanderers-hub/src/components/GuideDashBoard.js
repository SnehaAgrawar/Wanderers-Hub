import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './Footer';
import "../css/GuideDashBoard.css"; // Custom styles

const GuideDashboard = () => {
    const [guideName, setGuideName] = useState("");
    const [packages, setPackages] = useState([]);
  
    // Fetch data from the API
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("/api/guide-dashboard"); // Update with your API endpoint
          const data = response.data;
  
          setGuideName(data.guideName);
          setPackages(data.packages);
        } catch (error) {
          console.error("Error fetching the guide dashboard data", error);
        }
      };
  
      fetchData();
    }, []);
  

  return (
    <div className="guide-dashboard container my-5">
      <header className="d-flex justify-content-between align-items-center mb-4">
        <h2>Hello, {guideName}</h2>
        <i className="bi bi-person-circle fs-3"></i>
      </header>
      <table className="table table-striped">
        <thead className="table-danger">
          <tr>
            <th>ID (Pkg)</th>
            <th>Package Name</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {packages.map((pkg) => (
            <tr key={pkg.id}>
              <td>{pkg.id}</td>
              <td>{pkg.name}</td>
              <td>{pkg.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="assigned-tours mt-4">
        <button className="btn btn-danger w-100">View Assigned Tours</button>
      </div>
      <Footer />
    </div>
  );
};

export default GuideDashboard;
