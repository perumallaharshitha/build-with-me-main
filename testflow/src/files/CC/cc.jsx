import React from 'react';
import './cc.css';
import debate from '../../assets/actvt/debate.jpg';
import fancyDress from '../../assets/actvt/fancydress.png';
import jam from '../../assets/actvt/jam.jpg';
import uif from '../../assets/actvt/uif2024.jpeg';
import nec from '../../assets/actvt/nec.jpeg';
import traditional from '../../assets/actvt/traditional.jpg';

const activities = [
  {
    title: "UIF Meetup 2024 – Netherlands",
    description: "I had the incredible opportunity to attend the University Innovation Fellows (UIF) Global Meetup, where I engaged with over 300 innovators from around the world in a vibrant exchange of ideas and culture. Through hands-on workshops like Responsible Futuring and Cultural Hack, I gained practical tools to drive innovation and foster global collaboration. A highlight was visiting the University of Twente, where I experienced real-world innovation and learned from industry practices. Exploring Amsterdam’s rich history, biking culture, and local cuisine added a unique dimension to this transformative journey. This experience has deepened my commitment to creating sustainable change through innovation and global cooperation.",
    image: uif,
  },
  {
    title: "NEC – Business & Entrepreneurship",
    description: "I had the opportunity to contribute as a team member of NEC, actively participating in entrepreneurial planning and event organization. I collaborated on strategic initiatives, supported foundational tasks, and helped shape innovative business ideas. A key achievement was co-organizing the Eureka Pitch Desk Competition and the Illuminate Workshop, both aimed at fostering creativity and entrepreneurial thinking. Working closely with peers has enhanced my skills in team-work, coordination, and business strategy. This enriching experience has significantly contributed to my personal and professional growth.",
    image: nec,
  },
  {
    title: "Indian Traditional Competition",
    description: "Won 1st prize in Indian traditional competition. (₹2000 cash prize)",
    image: traditional,
  },
  {
    title: "Debate Competition",
    description: "Won 1st prize in a debate competition. (₹500 cash prize)",
    image: debate,
  },
  {
    title: "Fancy Dress – Business Woman",
    description: "Won 1st prize for dressing as a business woman.",
    image: fancyDress,
  },
  {
    title: "Just A Minute (JAM)",
    description: "Won 1st prize in Just A Minute event. (₹1000 cash prize)",
    image: jam,
  },
];

const TimelineCard = ({ title, description, image, index }) => {
  const isLeft = index % 2 === 0;
  return (
    <div className={`timeline-item `}>
      <div className="timeline-content">
        <img src={image} alt={title} />
        <div className="text-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const CoCurricularTimeline = () => {
  return (
    <>
      <h2 className="timeline-title">My Activities</h2>
      <div className="timeline">
        {activities.map((activity, index) => (
          <TimelineCard key={index} {...activity} index={index} />
        ))}
      </div>
    </>
  );
};


export default CoCurricularTimeline;
