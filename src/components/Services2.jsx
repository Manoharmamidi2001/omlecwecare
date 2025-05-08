import React from 'react'
import five from '../assets/5.png'
import six from '../assets/6.png'
import seven from '../assets/7.png'
import eight from '../assets/8.png'
import services from '../styles/services.module.scss'
import Image from 'next/image'

const Services2 = () => {
    const serviceItems = [
        { 
          title: "Breast Augmentation", 
          subTitle: "(Chest Feminization)",
          description: "",
          image: five
        },
        { 
          title: "Genital Affirmation Surgery", 
          description: "",
          image: six
        },
        { 
          title: "Chest Masculinization Surgery", 
          subTitle: "(Top Surgery)",
          description: "",
          image: seven
        },
        { 
          title: "Face Masculinization Surgery (FMS)", 
          description: "",
          image: eight
        }
      ];
  return (
    <div className={services.container} id='services'>
      <div className={services.cards}>
        {serviceItems.map((service, index) => (
          <div key={index} className={services.card}>
            <div className={services.imageContainer}>
              <Image src={service.image} alt={service.title} width={100} height={100} />
            </div>
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services2
