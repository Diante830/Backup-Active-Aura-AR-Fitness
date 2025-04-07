import React, { useState } from 'react';
import './News.css';

const News = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        // Handle the subscription logic here (e.g., API call)
        alert(`Subscribed with email: ${email}`);
    };

    return (
        <center>

            <div className="news-container">

                <div className="newsletter-form-container">
                    <div className="newsletter-left">
                        <h2 className="sign-up">Stay Active and Updated</h2>
                        <p className="stay-updated">Unlock the latest fitness tips, personalized training programs, exclusive offers, and AR-powered workouts designed just for you! Stay ahead of your fitness goals with real-time coaching, virtual guidance, and dynamic workout challenges. Whether you're tracking progress or discovering new routines, we keep you motivated and informed with every step. Transform your fitness experience with the power Active Aura—anytime, anywhere!</p>
                    </div>

                    <div className="newsletter-right">

                        <form onSubmit={handleSubscribe}>
                            <p className="send-message">Leave an email with us</p>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={handleEmailChange}
                                required
                                className="email-input"

                            />
                            <p className="send-message">We'll send you weekly newsletters</p>
                        </form>

                    </div>
                </div>
            </div>
        </center>
    );
};

export default News;