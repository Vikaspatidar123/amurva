// components/Footer.js
import React from 'react';
import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {new Date().getFullYear()} Amurva Agro Pvt Ltd. All rights reserved.</p>
        <div className={styles.socialLinks}>
          <a href="https://wa.me/9926161716" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href="https://www.instagram.com/amurv_a?igsh=Y3B6Mm8wejJvcGVp" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="mailto:amurvaagropvtltd@gmail.com" rel="noopener noreferrer">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
