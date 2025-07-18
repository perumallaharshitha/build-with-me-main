import React from 'react';
import './footer.css';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

function Footer() {
  return (
    <div className="main-foo text-dark py-4 mt-auto border-top">
      <div className="foo-container text-center">
        <div className="mb-2">
          <a href="mailto:harshithaperumalla23@gmail.com" className="text-dark mx-2"><FaEnvelope size={20} /></a>
          <a href="tel:+919573552122" className="text-dark mx-2"><FaPhone size={20} /></a>
          <a href="https://www.linkedin.com/in/perumalla-harshitha-975798273" className="text-dark mx-2" target="_blank" rel="noreferrer"><FaLinkedin size={20} /></a>
          <a href="https://github.com/perumallaharshitha" className="text-dark mx-2" target="_blank" rel="noreferrer"><FaGithub size={20} /></a>
          <a href="https://www.instagram.com/harshiii.122/" className="text-dark mx-2" target="_blank" rel="noreferrer"><FaInstagram size={20} /></a>
        </div>
        <small>&copy; 2025 Harshitha Perumalla. All rights reserved.</small>
      </div>
    </div>
  );
}

export default Footer;
