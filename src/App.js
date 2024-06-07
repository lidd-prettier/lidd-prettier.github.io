import React, { useState } from 'react';
import './App.css';
import prettierLogo from './prettier-logo.png';
import twitterIcon from './twitter-icon.png';
import instagramIcon from './instagram-icon.png';
import appStoreBadge from './Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg';
import Home from './Home';
import Privacy from './Privacy';
import Subscription from './Subscription';
import Gallery from './Gallery'; 


function App() {
  const [view, setView] = useState('home'); // State to manage current view

  return (
    <div className="App">
      <header className="header">
        <img src={prettierLogo} alt="Prettier Logo" onClick={() => setView('home')} className="logo" />
        <span className="logo-text" onClick={() => setView('home')}>Prettier</span>
        <nav>
          <a
            href="#"
            className={view === 'home' ? 'active' : ''}
            onClick={() => setView('home')}
          >
            Features
          </a>
          <a
            href="#"
            className={view === 'subscription' ? 'active' : ''}
            onClick={() => setView('subscription')}
          >
            Subscription
          </a>
          <a
            href="#"
            className={view === 'privacy' ? 'active' : ''}
            onClick={() => setView('privacy')}
          >
            Privacy
          </a>
          <a
            href="#"
            className={view === 'gallery' ? 'active' : ''}
            onClick={() => setView('gallery')}
          >
            Gallery
          </a>
        </nav>
        <button className="contact-button">Contact Us</button>
      </header>

      <main className="main">
        <div className="main-content">
        {view === 'home' && <Home setView={setView} />}
          {view === 'privacy' && <Privacy />}
          {view === 'subscription' && <Subscription />}
          {view === 'gallery' && <Gallery />}
        </div>
      </main>

      <footer className="footer">
        <div className="footer-left">
          <div className="footer-logo-container">
            <img src={prettierLogo} alt="Prettier Logo" className="footer-logo" />
            <span className="footer-logo-text">Prettier</span>
          </div>
          <p className="footer-text">
            Prettier protects your data.<br />
            Read more in our  <a
              href="#"
              className={view === 'privacy' ? 'active' : ''}
              onClick={() => setView('privacy')}
            >
              Privacy Policy.
            </a>
          </p>
          <div className="footer-social-icons">
            <a href="https://x.com/prettierapp​">
              <img src={twitterIcon} alt="Twitter" />
            </a>
            <a href="https://www.instagram.com/prettierapp">
              <img src={instagramIcon} alt="Instagram" />
            </a>
          </div>
        </div>
        <div className="footer-center">
          <div className="footer-links">
            <a
              href="#"
              className={view === 'home' ? 'active' : ''}
              onClick={() => setView('home')}
            >
              Features
            </a>
            <a
              href="#"
              className={view === 'subscription' ? 'active' : ''}
              onClick={() => setView('subscription')}
            >
              Subscription
            </a>
            <a
              href="#"
              className={view === 'privacy' ? 'active' : ''}
              onClick={() => setView('privacy')}
            >
              Privacy
            </a>
            <a href="#">Routes</a>
            <a href="#">Useful Info</a>
          </div>
        </div>
        <div className="footer-right">
          <h3>Let's Get In-Touch</h3>
          <p>prettier@lidd.com</p>
          <div className="footer-download-buttons">
            <div className="download-buttons">
              <a href="https://apps.apple.com/ca/app/prettier/id6450973776">
                <img src={appStoreBadge} alt="Download on the App Store" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;