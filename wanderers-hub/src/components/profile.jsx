import axios from 'axios';
import React, { useEffect } from 'react';

export default function Profile() {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("jwt");
                if (token) {
                    const response = await axios.get("http://localhost:8080/users/15", {
                        headers: {
                            "Authorization": `Bearer ${token}` // Properly format the Authorization header
                        }
                    });
                    console.log("Admin:", response.data);
                } else {
                    console.error("No token found in localStorage");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []); // Dependency array is empty, so this runs once when the component mounts

    return (
        <div>Profile</div>
    );
}
