import { Navbar, Nav, Button, Dropdown, Container} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../css/Navbar.css';

function NavigationBar() {
    const { auth, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(navigate);
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            
                <Navbar.Brand href="#">
                    {/* <img src="../assets/images/website-logo.jpg" alt="Logo" className="logo" /> */}
                    Wanderer's Hub
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/wanderershub/home">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="#">Search</Nav.Link>
                        {auth.user ? (
                            <Dropdown align="end">
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
                                    variant="outline-light" 
                                    className="ms-2"
                                    onClick={() => navigate('/wanderershub/login')}
                                >
                                    Login
                                </Button>
                                <Button 
                                    variant="outline-light" 
                                    className="ms-2"
                                    onClick={() => navigate('/wanderershub/register')}
                                >
                                    Signup
                                </Button>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
        
        </Navbar>
    );
}

export default NavigationBar;
