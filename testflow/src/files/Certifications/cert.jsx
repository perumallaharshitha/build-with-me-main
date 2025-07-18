import React, { useState, useRef, useEffect } from 'react';
import './cert.css';
import si21 from '../../assets/SmartInterviews/SI21.pdf';
import html from '../../assets/Coursera/HTML_Coursera.pdf';
import linux from '../../assets/Coursera/LINUX_Coursera.pdf';
import cloud from '../../assets/AWS/CloudComputing.pdf';
import zscalar from '../../assets/AWS/ZScalar.pdf';
import nptel from '../../assets/NPTEL/DataAnalyticswithPython.pdf';


const certifications = {
  'Accenture Summer Internship 2025': [
    {
      name: 'Packaged App Development Associate',
      file: 'https://drive.google.com/file/d/1foID8ThvXNH1HJSxS2jBa0E644kq6dyb/view',
    },
  ],
  'Coursera': [
    {
      name: 'HTML, CSS, and Javascript for Web Developers',
      file: html,
    },
    {
      name: ' Fundamentals of Red Hat Enterprise Linux',
      file: linux,
    },
  ],
  'AWS': [
    {
      name: 'Cloud Virtual Internship',
      file: cloud,
    },
    {
      name: 'Zero Trust Cloud Security Virtual Internship',
      file: zscalar,
    },
  ],
  'NPTEL': [
    {
      name: 'Data Analytics with Python',
      file: nptel,
    },
  ],
  'Smart Interviews': [
    {
      name: 'Smart Coder',
      file: 'https://smartinterviews.in/certificate/e8349b00',
    },
    {
      name: 'Smart Interviews 21 Day Coding Challenge',
      file: si21,
    },
  ],
};

function AccordionSection({ category, certs, isActive, onToggle }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    if (isActive) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight('0px');
    }
  }, [isActive]);

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={onToggle}>
        <h3>{category}</h3>
        <span>{isActive ? '−' : '+'}</span>
      </div>
      <div
        ref={contentRef}
        className={`accordion-content ${isActive ? 'open' : ''}`}
        style={{ maxHeight: height }}
      >
        <ul className="cert-list">
          {certs.map((cert, index) => (
            <li key={index} className="cert-item">
              <span>{cert.name}</span>
              <a
                href={typeof cert.file === 'string' && cert.file.startsWith('http') ? cert.file : cert.file}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Certifications() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="certifications">
      <h2 className="title">My Certifications</h2>
      {Object.entries(certifications).map(([category, certs]) => (
        <AccordionSection
          key={category}
          category={category}
          certs={certs}
          isActive={activeCategory === category}
          onToggle={() =>
            setActiveCategory((prev) => (prev === category ? null : category))
          }
        />
      ))}
    </div>
  );
}

export default Certifications;
