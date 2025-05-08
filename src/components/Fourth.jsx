import Image from 'next/image';
import React from 'react';
import styles from '../styles/fourth.module.scss';
import one from '../assets/one.jpg';
import two from '../assets/two.jpg';
import three from '../assets/three.jpg';
import forth from '../assets/four.jpg';

const Fourth = () => {
  const services = [
    { image: one, title: "Facial Feminization Surgery" },
    { image: two, title: "Top Surgery" },
    { image: three, title: "Body Contouring" },
    { image: forth, title: "Voice Feminization" }
  ];

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1>Safe and Effective</h1>
        <h1>Gender Reassignment Surgeries</h1>
      </div>

      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.imageContainer}>
              <Image 
                src={service.image} 
                alt={service.title}
                fill
                className={styles.image}
              />
            </div>
            <p className={styles.serviceCardP}>{service.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Fourth;
