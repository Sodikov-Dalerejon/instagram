import React, { useState, useEffect } from 'react';
import { FaFacebook } from 'react-icons/fa';
import './InstagramLogin.css';

function InstagramLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempted with:', { username, password });
    };

    if (isLoading) {
        return (
            <div className={`loading-screen ${darkMode ? 'dark' : ''}`}>
                <div className="loading-content">
                    <img
                        src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/1b47f9d0e595.png"
                        alt="Instagram"
                        className="loading-logo"
                    />
                </div>
            </div>
        );
    }

    return (
        <div className={`instagram-login-container ${darkMode ? 'dark' : ''}`}>
            <div className="login-box">
                <div className="logo-container">
                    <h1>Instagram</h1>
                </div>

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Phone number, username, or email"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="login-button">
                        Log in
                    </button>

                    <div className="divider">
                        <span>OR</span>
                    </div>

                    <div className="facebook-login">
                        <FaFacebook className="facebook-icon" />
                        <span>Log in with Facebook</span>
                    </div>

                    <a href="/forgot-password" className="forgot-password">
                        Forgot password?
                    </a>
                </form>
            </div>

            <div className="signup-box">
                <p>Don't have an account? <a href="/signup">Sign up</a></p>
            </div>

            <div className="app-download">
                <p>Get the app.</p>
                <div className="app-buttons">
                    <img
                        src="https://static.cdninstagram.com/rsrc.php/v4/yz/r/c5Rp7Ym-Klz.png"
                        alt="GET IT ON Google Play"
                    />
                    <img
                        src="https://static.cdninstagram.com/rsrc.php/v4/yu/r/EHY6QnZYdNX.png"
                        alt="Get it from Microsoft"
                    />
                </div>
            </div>

            <footer className="footer">
                <div className="footer-links">
                    <a href="https://about.meta.com/">Meta</a>
                    <a href="https://about.instagram.com/">About</a>
                    <a href="https://about.instagram.com/blog/">Blog</a>
                    <a href="https://www.instagram.com/about/jobs/">Jobs</a>
                    <a href="https://help.instagram.com/">Help</a>
                    <a href="https://developers.facebook.com/docs/instagram">API</a>
                    <a href="https://www.instagram.com/legal/privacy/">Privacy</a>
                    <a href="https://www.instagram.com/legal/terms/">Terms</a>
                    <a href="https://www.instagram.com/explore/locations/">Locations</a>
                    <a href="https://www.instagram.com/lite/">Instagram Lite</a>
                    <a href="https://www.threads.net/">Threads</a>
                    <a href="https://www.instagram.com/legal/contact/">Contact</a>
                    <a href="https://www.instagram.com/legal/terms/update/">Uploading & Non-Likes</a>
                    <a href="https://www.instagram.com/verified/">Meta Verified</a>
                </div>
                <div className="copyright">
                    <span>© {new Date().getFullYear()} Instagram from Meta</span>
                </div>
            </footer>

            <button
                className="theme-toggle"
                onClick={() => setDarkMode(!darkMode)}
            >
                {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
        </div>
    );
}

export default InstagramLogin;