import React from 'react';
import Image from 'next/image';
import doctor from '../assets/doctor.svg';
import first from '../styles/first.module.scss';

const First = () => {
  return (
    <div className={first.container} id='about'>
      <div className={first.textContent}>
        <h2 className={first.mainTitle}>
          Our Journey: 18 Years of Compassionate Care and Expertise
        </h2>
        <p className={first.tagline}>
          Olmeo Transgender Surgery Institute: Leading the Way in Gender Affirmation
        </p>

        <div className={first.aboutSection}>
          <h2 className={first.sectionTitle}>About Dr. Kaushik</h2>
          <p className={first.description}>
            The Founder of Olmec Transgender Surgery Institute.
          </p>
        </div>
      </div>

      <div className={first.imageWrapper}>
        <Image 
          src={doctor} 
          alt="Dr. Kaushik"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
    </div>
  );
};

export default First;
