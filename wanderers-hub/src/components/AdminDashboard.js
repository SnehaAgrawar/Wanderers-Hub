import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/AdminDashboard.css';

function AdminDashboard() {
  const [packages, setPackages] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch packages and users when component mounts
    axios.get('/api/packages')
      .then(response => {
        setPackages(response.data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching packages:', error));

    axios.get('/api/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleDeletePackage = (id) => {
    axios.delete(`/api/packages/${id}`)
      .then(() => {
        setPackages(packages.filter(pkg => pkg.pkg_id !== id));
      })
      .catch(error => console.error('Error deleting package:', error));
  };

  const handleDeleteUser = (id) => {
    axios.delete(`/api/users/${id}`)
      .then(() => {
        setUsers(users.filter(user => user.user_id !== id));
      })
      .catch(error => console.error('Error deleting user:', error));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="admin-dashboard">
      
      <div className="container">
        <div className="dashboard-header">
          <h1>Admin Dashboard</h1>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Manage Packages</div>
              <div className="card-body">
                {packages.length > 0 ? (
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Package ID</th>
                        <th>Package Name</th>
                        <th>Price</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {packages.map(pkg => (
                        <tr key={pkg.pkg_id}>
                          <td>{pkg.pkg_id}</td>
                          <td>{pkg.pname}</td>
                          <td>${pkg.price}</td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => handleDeletePackage(pkg.pkg_id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p>No packages available.</p>
                )}
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Manage Users</div>
              <div className="card-body">
                {users.length > 0 ? (
                  <table className="table">
                    <thead>
                      <tr>
                        <th>User ID</th>
                        <th>Username</th>
                        <th>Contact</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map(user => (
                        <tr key={user.user_id}>
                          <td>{user.user_id}</td>
                          <td>{user.uname}</td>
                          <td>{user.contact_no}</td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => handleDeleteUser(user.user_id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p>No users available.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default AdminDashboard;
