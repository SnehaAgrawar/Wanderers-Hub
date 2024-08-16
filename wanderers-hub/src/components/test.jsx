import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Test() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: 'md@gmail.com',
        password: '12345678',
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('http://localhost:8080/auth/signin', formData, {
                    headers: { "Content-Type": "application/json" }
                });
                localStorage.setItem("jwt",response.data.jwt);
                console.log("Response:", response.data);
                navigate("/profile");
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [formData]); // Dependency array includes formData if it's expected to change

    return (
        <div>
            Hello
        </div>
    );
}
