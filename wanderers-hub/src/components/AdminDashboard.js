import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/AdminDashboard.css';
import NavigationBar from './Navbar';
import { Modal, Button } from 'react-bootstrap';

function AdminDashboard() {
  const [packages, setPackages] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editPackage, setEditPackage] = useState(null);
  const [editedPackageName, setEditedPackageName] = useState('');
  const [editedPackagePrice, setEditedPackagePrice] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    axios.get('http://localhost:8080/tourpackages', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
      setPackages(response.data);
      setLoading(false);
    })
    .catch(error => console.error('Error fetching packages:', error));

    axios.get('http://localhost:8080/users', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
      setUsers(response.data);
      setLoading(false);
    })
    .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleDeletePackage = (id) => {
    const token = localStorage.getItem('token');
    
    axios.delete(`http://localhost:8080/tourpackages/delete/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(() => {
      setPackages(packages.filter(pkg => pkg.pkgId !== id));
    })
    .catch(error => console.error('Error deleting package:', error));
  };

  const handleEditPackage = (id) => {
    const pkg = packages.find(p => p.pkgId === id);
    setEditPackage(pkg);
    setEditedPackageName(pkg.pname);
    setEditedPackagePrice(pkg.price);
    setShowModal(true);
  };

  const handleEditInputChange = (field, value) => {
    if (field === 'name') {
      setEditedPackageName(value);
    } else if (field === 'price') {
      setEditedPackagePrice(value);
    }
  };

  const handleSaveEdit = () => {
    const token = localStorage.getItem('token');
    
    const updatedPackage = {
      pname: editedPackageName,
      price: editedPackagePrice
    };

    axios.put(`http://localhost:8080/tourpackages/${editPackage.pkgId}`, updatedPackage, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
      setPackages(packages.map(pkg => 
        pkg.pkgId === editPackage.pkgId ? response.data : pkg
      ));
      setShowModal(false);
      setEditPackage(null);
    })
    .catch(error => console.error('Error updating package:', error));
  };

  const handleDeleteUser = (userId) => {
    const token = localStorage.getItem('token');
    
    axios.delete(`http://localhost:8080/users/delete/${userId}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(() => {
      setUsers(users.filter(user => user.userId !== userId));
    })
    .catch(error => console.error('Error deleting user:', error));
  };

  return (
    <>
      <div>
        <NavigationBar />
      </div>
      <br />
      <br />
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
                          <tr key={pkg.pkgId}>
                            <td>{pkg.pkgId}</td>
                            <td>{pkg.pname}</td>
                            <td>${pkg.price}</td>
                            <td>
                              <button
                                className="btn btn-danger"
                                onClick={() => handleDeletePackage(pkg.pkgId)}
                              >
                                Delete
                              </button>
                              <button
                                className="btn btn-primary"
                                onClick={() => handleEditPackage(pkg.pkgId)}
                              >
                                Edit
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
                          <tr key={user.userId}>
                            <td>{user.userId}</td>
                            <td>{user.uname}</td>
                            <td>{user.contactNo}</td>
                            <td>
                              <button
                                className="btn btn-danger"
                                onClick={() => handleDeleteUser(user.userId)}
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

      {/* Modal for editing a package */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Package</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label>Package Name</label>
              <input
                type="text"
                className="form-control"
                value={editedPackageName}
                onChange={(e) => handleEditInputChange('name', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Price</label>
              <input
                type="number"
                className="form-control"
                value={editedPackagePrice}
                onChange={(e) => handleEditInputChange('price', e.target.value)}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AdminDashboard;
