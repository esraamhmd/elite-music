import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate and Link from react-router-dom
import './Signup.css';

const Signup = ({ setIsAuthenticated }) => {
    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (newPassword !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
        } else {
            alert('Sign Up successful!');
            setIsAuthenticated(true); // Update authentication state upon successful signup
            navigate('/'); // Redirect to the Home page
        }
    };

    return (
        <div className="sigall">
            <div className="signup-8">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input1-8">
                        <label htmlFor="newUsername">Username</label>
                        <input
                            type="text"
                            id="newUsername"
                            name="newUsername"
                            value={newUsername}
                            onChange={(e) => setNewUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input1-8">
                        <label htmlFor="newPassword">Password</label>
                        <input
                            type="password"
                            id="newPassword"
                            name="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input1-8">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
                <div className="loginn-link">
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
