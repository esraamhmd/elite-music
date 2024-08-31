import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './Login.css';

const Login = ({ setIsAuthenticated }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Replace the below logic with your actual authentication logic
        if (username === "esraa" && password === "123") {
            alert('Login successful!');
            setIsAuthenticated(true); // Update authentication state
            navigate('/'); // Redirect to the Home page
        } else {
            alert('Incorrect username or password.');
        }
    };

    return (
        <div className="logall">
            <div className="login-7">
                <h1>Log In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input1-7">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input1-7">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Log In</button> {/* This button triggers the form submit */}
                </form>
                <div className="signup-link">
                    <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
