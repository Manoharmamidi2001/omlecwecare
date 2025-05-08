'use client'
import React, { useEffect, useState } from 'react';
import corosels from '../styles/corousels.module.scss';
import Image from 'next/image';
import doctorImage from '../assets/doctor.svg';

const Corousels = () => {
  const testimonials = [
    {
      id: 1,
      image: doctorImage,
      name: "Sarah Johnson",
      package: "Basic Care Package",
      feedback: "The care I received was exceptional. The staff was attentive and professional throughout my treatment.",
      rating: 5
    },
    {
      id: 2,
      image: doctorImage,
      name: "Michael Chen",
      package: "Premium Wellness Plan",
      feedback: "This package transformed my health. The comprehensive approach made all the difference in my recovery.",
      rating: 4
    },
    {
      id: 3,
      image: doctorImage,
      name: "Emma Rodriguez",
      package: "Complete Recovery Bundle",
      feedback: "Worth every penny! The personalized attention and follow-up care were beyond my expectations.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length, isPaused]);

  return (
    <div className={corosels.container}>
      <div className={corosels.top}>
        <h1>Let's see our patients' feedback!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
      </div>
      <div className={corosels.bottom}>
        <div 
          className={corosels.carousel}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className={corosels.carouselTrack} 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className={corosels.testimonialCard}>
                <div className={corosels.imageContainer}>
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    width={400}
                    height={400}
                    className={corosels.doctorImage}
                  />
                </div>
                <div className={corosels.contentContainer}>
                  <div className={corosels.div}>
                  <p className={corosels.quetoes}>“</p>
                  <p className={corosels.feedback}>{testimonial.feedback}</p>
                  </div>
                  <div className={corosels.patientInfo}>
                    <div className={corosels.patientImage}>
                      <Image src={doctorImage}/>
                    </div>
                    <div className={corosels.patientData}>
                    <h3>{testimonial.name}</h3>
                    <p className={corosels.package}>{testimonial.package}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Corousels;