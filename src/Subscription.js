import React from 'react';
import './Subscription.css'; // Create a separate CSS file for styling
import appStoreBadge from './Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg';


const Subscription = () => {
    const handleRedirect = () => {
        window.open('https://apps.apple.com/ca/app/prettier/id6450973776', '_blank');
    };

    return (
        <>
            <h1>Subscribe</h1>
            <br></br>
            <p>Subscribe and discover Prettier routes.</p>
            <p>Choose your membership plan.</p>

            <div className="plan-container">
                <div className="plan">
                    <div className="plan-header">
                        <h2>PRETTIER MONTHLY</h2>
                        <p className="price">$0.99</p>
                    </div>
                    <br></br>
                    <p className="description">Discover prettier routes.</p>
                    <button className="subscribe-button" onClick={handleRedirect}>SUBSCRIBE</button>
                    <p>Valid for 30 days</p>

                </div>
                <div className="plan">
                    <div className="plan-header">
                        <h2>PRETTIER YEARLY</h2>
                        <p className="price">$1.99</p>
                    </div>
                    <br></br>
                    <p className="description">Save with yearly plan.</p>
                    <button className="subscribe-button" onClick={handleRedirect}>SUBSCRIBE</button>
                    <p>Valid for 1 year</p>

                </div>
            </div>

            <div className="download-buttons">
                <a href="https://apps.apple.com/ca/app/prettier/id6450973776">
                    <img src={appStoreBadge} alt="Download on the App Store" />
                </a>
            </div>        </>
    );
};

export default Subscription;
