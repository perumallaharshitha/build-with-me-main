import React from 'react';
import './cp.css';

import leetBadge1 from '../../assets/badges/lc1.png';
import leetBadge2 from '../../assets/badges/lc2.png';
import leetBadge3 from '../../assets/badges/lc3.png';
import leetBadge4 from '../../assets/badges/lc4.png';

import hrBadge1 from '../../assets/badges/hr1.png';
import hrBadge2 from '../../assets/badges/hr2.png';
import hrBadge3 from '../../assets/badges/hr3.png';
import hrBadge4 from '../../assets/badges/hr4.png';
import hrBadge5 from '../../assets/badges/hr5.png';

const leetCodeBadges = [
  { name: '100 Days Badge 2025', image: leetBadge1 },
  { name: '50 Days Badge 2025', image: leetBadge2 },
  { name: '100 Days Badge 2024', image: leetBadge3 },
  { name: '50 Days Badge 2024', image: leetBadge4 },
];

const hackerRankBadges = [
  { name: 'Problem Solving', image: hrBadge1 },
  { name: 'C++', image: hrBadge2 },
  { name: 'Java', image: hrBadge3 },
  { name: '30 Days of Code', image: hrBadge4 },
  { name: 'C', image: hrBadge5 },
];

function CodingProfiles() {
  return (
    <div className="cp-container">
      <h2 className="cp-title">Competitive Programming Profiles</h2>

      <section className="cp-section">
        <div className="cp-header">
          <h3>LeetCode</h3>
          <a href="https://leetcode.com/u/harshithaperumalla23/" target="_blank" rel="noopener noreferrer" className="profile-link">
            Profile
          </a>
        </div>
        <div className="badges-grid leetcode-badges">
            {leetCodeBadges.map((badge, i) => (
                <div key={i} className="badge-wrapper">
                <img src={badge.image} alt={badge.name} className="badge-card-img" />
                <p className="badge-name-outside">{badge.name}</p>
                </div>
            ))}
        </div>
      </section>

      <section className="cp-section">
        <div className="cp-header">
          <h3>HackerRank</h3>
          <a href="https://www.hackerrank.com/profile/harshithaperuma1" target="_blank" rel="noopener noreferrer" className="profile-link">
            Profile
          </a>
        </div>
        <div className="badges-grid hackerrank-badges">
          {hackerRankBadges.map((badge, i) => (
            <div key={i} className="badge-item no-bg">
              <img src={badge.image} alt={badge.name} className="badge-img" />
              <p className="badge-name">{badge.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default CodingProfiles;
