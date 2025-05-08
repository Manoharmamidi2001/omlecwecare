import React from 'react';
import home from '../styles/home.module.scss';

const HomePage = () => {
  return (
    <div className={home.heroContainer}>
      <div className={home.content}>
      <h2>Pioneer for Gender Affrimation Surgery (Sex Change Surgery) in india</h2>
      <div className={home.pera}>
      <p>The primer Transgender Surgery Institute, New Delhi, India</p>
      </div>
      <button>Make an appointment</button>
      </div>
    </div>
  );
};

export default HomePage;
