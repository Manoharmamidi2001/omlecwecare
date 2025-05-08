import Image from 'next/image';
import React from 'react';
import third from '../assets/third.jpg';
import thirds from '../styles/third.module.scss';

const Third = () => {
  return (
    <div className={thirds.container}>
      <div className={thirds.imageWrapper}>
        <Image
          src={third}
          alt="Empowering the Transgender Community"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
      <div className={thirds.textContent}>
        <h1 className={thirds.title}>
          Empowering the Transgender Community with Comprehensive Medical Care
        </h1>
        <p className={thirds.description}>
          At Educating individuals about gender dysphoria and gender incongruence,
          so they can make informed decisions.
        </p>
      </div>
    </div>
  );
};

export default Third;
