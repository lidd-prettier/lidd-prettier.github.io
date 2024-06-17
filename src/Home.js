import React from 'react';
import { Link } from 'react-router-dom';

import demoVideo from './demo.mp4';
import appStoreBadge from './Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg';

const Home = ({ setView }) => {
  return (
    <>
      <h1>Turn Every Outing into Something Prettier.</h1>
      <br></br>
      <p>Explore charming routes, connect with fellow adventurers, and immerse yourself in the cities' best-kept secrets, no matter where you are.</p>
      <div className="phone-container">
        <video autoPlay loop muted playsInline>
          <source src={demoVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <p className="download-now">DOWNLOAD NOW</p>
      <div className="download-buttons">
        <a href="https://apps.apple.com/ca/app/prettier/id6450973776">
          <img src={appStoreBadge} alt="Download on the App Store" />
        </a>
      </div>
      <p className="terms-and-policy">
        By subscribing to Prettier, you agree to the <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">Terms of Service</a>. View our
        <Link to="/privacy" onClick={() => setView('privacy')}> Privacy Policy</Link>.
      </p>
    </>
  );
};

export default Home;