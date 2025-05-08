import React from 'react';
import Image from 'next/image';
import { FaEnvelope, FaInstagram, FaFacebookF, FaThumbsUp } from 'react-icons/fa';
import doctorsStyles from '../styles/meetDoctors.module.scss';
import doctorImage from '../assets/doctor.svg';

const Doctors = () => {
  const doctors = [
    {
      image: doctorImage,
      name: "Richard Muldoon",
      title: "Practical Nurse",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
      email: "richard.muldoon@example.com"
    },
    {
      image: doctorImage,
      name: "Stephanie Patel",
      title: "Patient Services Manager",
      description: "Lorem ipsum educa econsectetur adipiscing elit, sed diam no nonummy nibh euismod tincidunt.",
      email: "stephanie.patel@example.com"
    },
    {
      image: doctorImage,
      name: "Julia Scott",
      title: "Dentist",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
      email: "julia.scott@example.com"
    }
  ];

  return (
    <div className={doctorsStyles.doctorsSection} id='doctors'>
      <h1>Meet Our Doctors</h1>
      <div className={doctorsStyles.doctorsContainer}>
        {doctors.map((doctor, index) => (
          <div key={index} className={doctorsStyles.doctorCard}>
            <div className={doctorsStyles.imageContainer}>
              <Image 
                src={doctor.image} 
                alt={`Portrait of ${doctor.name}`}
                fill
                className={doctorsStyles.doctorImage}
              />
              <div className={doctorsStyles.socialPopup}>
                <FaEnvelope title="Email" />
                <FaInstagram title="Instagram" />
                <FaFacebookF title="Facebook" />
                <FaThumbsUp title="Like" />
              </div>
            </div>
            <div className={doctorsStyles.cardContent}>
              <div>
                <h3>{doctor.name}</h3>
                <p className={doctorsStyles.title}>{doctor.title}</p>
              </div>
              <p className={doctorsStyles.description}>{doctor.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
