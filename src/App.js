import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Link, Routes, Route } from 'react-router-dom';
import './App.css';
import prettierLogo from './prettier-logo.png';
import twitterIcon from './twitter-icon.png';
import instagramIcon from './instagram-icon.png';
import appStoreBadge from './Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg';
import Home from './Home';
import Privacy from './Privacy';
import Subscription from './Subscription';
import Gallery from './Gallery';
import burgerIcon from './menu-burger.png'; // Add a burger icon image

function App() {
  const [view, setView] = useState('home'); // State to manage current view
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu toggle
  const menuRef = useRef(null);

  const handleContactClick = () => {
    window.location.href = 'mailto:prettier@lidd.com';
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.classList.contains('burger-icon')) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <header className="header">
          <div className="logo-container" onClick={() => setView('home')}>
            <img src={prettierLogo} alt="Prettier Logo" className="logo" />
            <span className="logo-text">Prettier</span>
          </div>
          <nav ref={menuRef} className={`nav ${menuOpen ? 'open' : ''}`}>
            <Link
              to="/features"
              className={view === 'home' ? 'active' : ''}
              onClick={() => {
                setView('home');
                closeMenu();
              }}
            >
              Features
            </Link>
            <Link
              to="/subscription"
              className={view === 'subscription' ? 'active' : ''}
              onClick={() => {
                setView('subscription');
                closeMenu();
              }}
            >
              Subscription
            </Link>
            <Link
              to="/gallery"
              className={view === 'gallery' ? 'active' : ''}
              onClick={() => {
                setView('gallery');
                closeMenu();
              }}
            >
              Gallery
            </Link>
          </nav>
          <button className="contact-button" onClick={handleContactClick}>Contact Us</button>
          <img src={burgerIcon} alt="Menu" className="burger-icon" onClick={toggleMenu} />
        </header>

        <main className="main">
          <div className="main-content">
            <Routes>
            <Route path="/" element={<Home setView={setView} />} />
              <Route path="/features" element={<Home setView={setView} />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
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
              Read more in our <Link
                to="/privacy"
                className={view === 'privacy' ? 'active' : ''}
                onClick={() => setView('privacy')}
              >
                Privacy Policy.
              </Link>
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
              <Link
                to="/features"
                className={view === 'home' ? 'active' : ''}
                onClick={() => setView('home')}
              >
                Features
              </Link>
              <Link
                to="/subscription"
                className={view === 'subscription' ? 'active' : ''}
                onClick={() => setView('subscription')}
              >
                Subscription
              </Link>
              <Link
                to="/gallery"
                className={view === 'gallery' ? 'active' : ''}
                onClick={() => setView('gallery')}
              >
                Gallery
              </Link>
              <Link
                to="/privacy"
                className={view === 'privacy' ? 'active' : ''}
                onClick={() => setView('privacy')}
              >
                Privacy
              </Link>
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
    </Router>
  );
}

export default App;