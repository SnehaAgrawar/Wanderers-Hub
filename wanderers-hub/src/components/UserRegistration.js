import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import '../css/UserRegistration.css';
import descImg from '../assests/images/desc-img.jpg';

function UserRegistration() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:8080/users', {
                uname: data.uname,
                email: data.email,
                password: data.password,
                contactNo: data.contactNo,
                userType: data.userType,
                address: data.address
            });
            console.log(response.data);
            navigate('/wanderershub/login');
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };

    return (
        <div className="registration-container">
            <Container className="registration-form">
                <h2 className="text-center">User Registration</h2>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            {...register('uname', { required: 'Name is required' })}
                        />
                        {errors.uname && <span className="text-danger">{errors.uname.message}</span>}
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Invalid email address',
                                },
                            })}
                        />
                        {errors.email && <span className="text-danger">{errors.email.message}</span>}
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter your password"
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 8,
                                    message: 'Password must be at least 8 characters',
                                },
                            })}
                        />
                        {errors.password && <span className="text-danger">{errors.password.message}</span>}
                    </Form.Group>

                    <Form.Group controlId="formContactNo">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your contact number"
                            {...register('contactNo', {
                                required: 'Contact number is required',
                                pattern: {
                                    value: /^\d{10}$/,
                                    message: 'Contact number must be exactly 10 digits',
                                },
                            })}
                        />
                        {errors.contactNo && <span className="text-danger">{errors.contactNo.message}</span>}
                    </Form.Group>

                    {/* <Form.Group controlId="formUserType">
                        <Form.Label>User Type</Form.Label>
                        <Form.Control as="select" {...register('userType', { required: 'User Type is required' })}>
                            <option value="CLIENT">Client</option>
                            <option value="GUIDE">Guide</option>
                            <option value="ADMIN">Admin</option>
                        </Form.Control>
                        {errors.userType && <span className="text-danger">{errors.userType.message}</span>}
                    </Form.Group> */}
                     <Form.Group controlId="formUserType">
                        <Form.Label>User Type</Form.Label>
                        <Form.Control
                            type="text"
                            value="Client"
                            readOnly
                        />
                    </Form.Group>

                    <Form.Group controlId="formAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter your address" {...register('address', { required: 'Address is required' })} />
                        {errors.address && <span className="text-danger">{errors.address.message}</span>}
                    </Form.Group>

                    <Button variant="primary" type="submit" className="mt-3">
                        Register
                    </Button>
                    <Link to="/wanderershub/login">
                        <Button variant="link" type="button" className="mt-3">
                            Login
                        </Button>
                    </Link>
                </Form>
            </Container>
        </div>
    );
}

export default UserRegistration;
