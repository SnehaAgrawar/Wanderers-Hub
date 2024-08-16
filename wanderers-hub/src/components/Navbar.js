import { Navbar, Nav, Button, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../css/Navbar.css';

function NavigationBar() {
    const { auth, logout } = useAuth();
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleLogout = () => {
        logout(navigate);
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <div className="container">
                <Navbar.Brand href="#">
                    <img src="../images/website-logo.jpg" alt="Logo" className="logo" />
                    Wanderer's Hub
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/wanderershub/home">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="#">Search</Nav.Link>
                        {auth.user ? (
                            <Dropdown align="end" className="ml-2">
                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                    {auth.user}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        ) : (
                            <>
                                <Button 
                                    variant="primary" 
                                    className="ml-2"
                                    onClick={() => navigate('/wanderershub/login')} // Navigate to Login.js
                                >
                                    Login
                                </Button>
                                <Button 
                                    variant="secondary" 
                                    className="ml-2"
                                    onClick={() => navigate('/wanderershub/register')} // Navigate to Register.js
                                >
                                    Signup
                                </Button>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}

export default NavigationBar;
