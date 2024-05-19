// src/About.js
import React from 'react';
import styles from './styles.module.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={styles.header}
        >
          <header className={styles.header}>
        <motion.h1
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
About Amurva Agro Pvt Ltd        </motion.h1>
        <motion.p
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.paragraph}
        >
        Amurva Agro Pvt Ltd is a private limited company based in Dewas, Madhya Pradesh. Established in 2024, the company currently specializes in the production and distribution of wheat flour products. With a commitment to quality and customer satisfaction.
 </motion.p>
      </header>
        </motion.div>
      
      <h2 className={styles.sectionTitle}>Current Product Line:</h2>
      <ul className={styles.list}>
        <li>
          <strong className={styles.highlight}>Wheat Flour:</strong> Available in 5kg and 10kg packages, the wheat flour is produced using high-quality wheat grains sourced from trusted suppliers. It is known for its purity, nutritional value, and consistency, making it a preferred choice among consumers.
        </li>
        <li>
          <strong className={styles.highlight}>Wheat Bati Flour:</strong> Specifically formulated for making traditional Indian bread (bati), this product comes in 2kg packaging. It is finely ground to ensure the perfect texture and taste, catering to the culinary needs of households and eateries.
        </li>
      </ul>
      
      <h2 className={styles.sectionTitle}>Future Expansion Plans:</h2>
      <p className={styles.paragraph}>
        In line with its commitment to innovation and meeting consumer demands, Amurva Agro Pvt Ltd is strategically planning to expand its product range. The company is exploring opportunities to introduce new products that complement its existing line of wheat flour offerings.
      </p>
      <p className={styles.paragraph}>Some potential product extensions under consideration include:</p>
      <ul className={styles.list}>
        <li>
          <strong className={styles.highlight}>Specialty Flours:</strong> Introducing specialty flours such as multigrain flour, organic flour, or gluten-free flour to cater to diverse dietary preferences and health-conscious consumers.
        </li>
        <li>
          <strong className={styles.highlight}>Ready-to-Eat Products:</strong> Developing ready-to-eat products like instant wheat porridge or wheat-based snacks to offer convenience and value-added options to consumers.
        </li>
        <li>
          <strong className={styles.highlight}>Value-Added Wheat Products:</strong> Exploring opportunities to introduce value-added wheat products such as fortified flour with added vitamins and minerals, enhancing the nutritional profile of the products.
        </li>
      </ul>
    </div>
  );
};

export default About;
