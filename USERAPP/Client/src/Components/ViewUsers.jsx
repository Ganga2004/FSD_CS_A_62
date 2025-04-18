import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // ✅ Replace this with your actual deployed Render backend URL
    const apiUrl = 'https://your-app-name.onrender.com/api/users';

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get(apiUrl);
                setUsers(res.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch users');
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className='view-users'>
            <h2>All Users</h2>

            {loading && <p>Loading users...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        <strong>Name:</strong> {user.name} <br />
                        <strong>Email:</strong> {user.email} <br />
                        <strong>Role:</strong> {user.role}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ViewUsers;
