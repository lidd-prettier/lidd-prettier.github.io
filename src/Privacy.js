import React from 'react';
import './Privacy.css'; // Create a separate CSS file for styling

const Privacy = () => {
  return (
    <>
      <h1 className="privacy-heading">Privacy Policy</h1>
      <p className="privacy-text">Last updated: 19 Sep 2023</p>
      <br></br>
      <p className="privacy-text">LIDD ("us," "we," or "our") operates the Prettier mobile application (the "Service").</p>
      <p className="privacy-text">
        This page informs you that we do not collect any personal data or information from users of our Service. You can use our app with confidence, knowing that your privacy is not compromised.
      </p>
      <h2 className="privacy-subheading">No Data Collection</h2>
      <p className="privacy-text">We do not collect any of the following types of data:</p>
      <ul className="privacy-list">
        <li>Personal Data</li>
        <li>Usage Data</li>
        <li>Cookies</li>
        <li>Device Information</li>
      </ul>
      <h2 className="privacy-subheading">Contact Us</h2>
      <p className="privacy-text">
        If you have any questions or concerns about our privacy policy or our app, please feel free to contact us at <a href="mailto:prettier@lidd.com">prettier@lidd.com</a>.
      </p>
    </>
  );
};

export default Privacy;
