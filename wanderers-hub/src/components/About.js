import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/About.css';  // Custom CSS for additional styling
import NavigationBar from './Navbar';
import Footer from './Footer';
import descImg from '../assests/images/desc-img.jpg'; // Adjust the path as necessary


import img6 from '../assests/images/img6.jpg';
import img7 from '../assests/images/img7.jpg';
import img8 from '../assests/images/img8.jpg';
import img9 from '../assests/images/img9.jpg';

const About = () => {
    return (
        <>
            <NavigationBar />
            <br />
            <div className="about-container" style={{ backgroundImage: `url(${descImg})` }}>
                <div className="overlay">
                    <div className>
                        <div className="row text-center">
                            <div className="col-lg-3 col-md-6 mb-4">
                                {/* <img src="path-to-logo.png" alt="Logo" className="img-fluid mb-3" /> */}
                                <p className="text-muted">WanderersHub About Us </p>
                                {/* <div className="partners">
                                    <img src="path-to-partner1.png" alt="Partner 1" className="img-fluid mx-1" />
                                    <img src="path-to-partner2.png" alt="Partner 2" className="img-fluid mx-1" />
                                    <img src="path-to-partner3.png" alt="Partner 3" className="img-fluid mx-1" />
                                    {/* Add more partner logos as needed */}
                                {/* </div>  */}
                            </div>

                            <div className="col-lg-2 col-md-6 mb-4">
                                <h5>Main Links</h5>
                                <ul className="list-unstyled">
                                    <li><a href="#" className="text-muted">Home</a></li>
                                    <li><a href="#" className="text-muted">Group Tours</a></li>
                                    <li><a href="#" className="text-muted">Tours At a Glance</a></li>
                                    <li><a href="#" className="text-muted">Best Tour</a></li>
                                    <li><a href="#" className="text-muted">Speciality Tours</a></li>
                                    {/* Add more links as needed */}
                                </ul>
                            </div>

                            <div className="col-lg-2 col-md-6 mb-4">
                                <h5>Guest Services Links</h5>
                                <ul className="list-unstyled">
                                    <li><a href="/wanderershub/register" className="text-muted">Guest Corner</a></li>
                                    {/* <li><a href="#" className="text-muted">Join as PSA</a></li>
                                    <li><a href="#" className="text-muted">Join as GSA</a></li> */}
                                    <li><a href="/about" className="text-muted">About Us</a></li>
                                    <li><a href="/wanderershub/home" className="text-muted">How to Book</a></li>
                                    {/* Add more links as needed */}
                                </ul>
                            </div>

                            <div className="col-lg-2 col-md-6 mb-4">
                                <h5>Support</h5>
                                <ul className="list-unstyled">
                                    <li><a href="#" className="text-muted">Contact us</a></li>
                                    <li><a href="#" className="text-muted">Guest Helpline</a></li>
                                    <li><a href="#" className="text-muted">FAQs</a></li>
                                    <li className="mt-3">
                                        <p className="text-muted mb-1">📞 1800 266 1100 (Toll Free)</p>
                                        <p className="text-muted">📞 1800 266 9080 (Toll Free)</p>
                                        <p className="text-muted">📞 +91 22 24332222</p>
                                        <p className="text-muted">📱 Exclusive For NRI: +91 9930969988</p>
                                        <p className="text-muted">📧 holiday@wanderershub.in</p>
                                    </li>
                                </ul>
                            </div>

                            {/* <div className="col-lg-3 col-md-6 mb-4">
                                <h5>eBrochures</h5>
                                <div className="d-flex flex-wrap justify-content-center">
                                    <img src="img6" alt="Brochure 1" className="img-fluid brochure-img m-2" />
                                    <img src="path-to-brochure2.png" alt="Brochure 2" className="img-fluid brochure-img m-2" />
                                    <img src="path-to-brochure3.png" alt="Brochure 3" className="img-fluid brochure-img m-2" />
                                    <img src="path-to-brochure4.png" alt="Brochure 4" className="img-fluid brochure-img m-2" />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default About;
