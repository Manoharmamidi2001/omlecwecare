import React from 'react';
import services from '../styles/services.module.scss';
import one from '../assets/1.png';
import two from '../assets/2.png';
import three from '../assets/3.png';
import four from '../assets/4.png';
import five from '../assets/5.png';
import six from '../assets/6.png';
import seven from '../assets/7.png';
import eight from '../assets/8.png';
import Image from 'next/image';

const Services = () => {
  const serviceItems = [
    { title: "Hormonal Therapy", description: "A Key Step in Gender Transition", image: one },
    { title: "Sex Reassignment Surgery (SRS)", description: "Surgical Transition Process", image: two },
    { title: "Facial Feminization Surgery (FFS)", description: "Surgical Transition Process", image: three },
    { title: "Voice Feminization Surgery", description: "Surgical Transition Process", image: four },
    { title: "Breast Augmentation", subTitle: "(Chest Feminization)", description: "Surgical Transition Process", image: five },
    { title: "Genital Affirmation Surgery", description: "Surgical Transition Process", image: six },
    { title: "Chest Masculinization Surgery", subTitle: "(Top Surgery)", description: "Surgical Transition Process", image: seven },
    { title: "Face Masculinization Surgery (FMS)", description: "Surgical Transition Process", image: eight },
  ];

  return (
    <div className={services.container} id='services'>
      <h1>A WIDE RANGE OF SERVICES</h1>
      <p>Understanding Gender Incongruence, Gender Dysphoria, and Gender Identity Disorder</p>
      <div className={services.cards}>
        {serviceItems.map((service, index) => (
          <div key={index} className={services.card}>
            <div className={services.imageContainer}>
              <Image src={service.image} alt={service.title} width={100} height={100} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
