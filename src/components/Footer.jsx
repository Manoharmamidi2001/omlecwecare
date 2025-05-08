import React from 'react';
import styles from '../styles/footer.module.scss';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from 'next/image';
import doctor from '../assets/doctor.svg';
import FooterTop from './FooterTop';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterTop />
      <div className={styles.footerColumns}>
        <div className={styles.column}>
          <h4>Olmec.</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
          <div className={styles.socialIcons}>
            <FaFacebook className={styles.icon} />
            <FaTwitter className={styles.icon} />
            <FaInstagram className={styles.icon} />
          </div>
        </div>

        <div className={styles.column}>
          <h4>Site Navigation</h4>
          <div className={styles.doubleLists}>
            <ul>
              <li>Consultation</li>
              <li>Teeth Whitening</li>
              <li>Root Canals</li>
              <li>Crowns & Bridges</li>
              <li>Dental Implants</li>
              <li>Tooth Extractions</li>
            </ul>
            <ul>
              <li>Homepage</li>
              <li>Our Services</li>
              <li>Portfolio-Works</li>
              <li>Latest News</li>
              <li>Our Contacts</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>

        <div className={styles.column}>
          <h4>Latest News</h4>
          <ul className={styles.newsList}>
            <li className={styles.newsItem}>
              <Image src={doctor} alt="news-img" />
              <div>
                Top 5 Tips On How To Choose A Good Dentist <br />
                <span>01-22-2023</span>
              </div>
            </li>
            <li className={styles.newsItem}>
              <Image src={doctor} alt="news-img" />
              <div>
                Safety Measures For Your Patients <br />
                <span>01-22-2023</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <hr className={styles.footerDivider} />
      <div className={styles.footerBottom}>
        © {new Date().getFullYear()} Olmec. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
