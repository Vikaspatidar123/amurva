// pages/index.js
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './styles.module.css';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={styles.container}
    >
      <header className={styles.header}>
        <motion.h1
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to Amurva Agro Pvt Ltd
        </motion.h1>
        <motion.p
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Your trusted source for high-quality wheat flour products
        </motion.p>
      </header>

      <section className={styles.products}>
        <h2>Our Products</h2>
        <div className={styles.productList}>
          {/* Product 1 */}
          <motion.div
            className={styles.product}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={styles.imageContainer}
            >
              <Image src="/assets/ata.jpg" alt="Wheat Flour" width={300} height={200} />
            </motion.div>
            <h3>Wheat Flour</h3>
            <p>Available in 5kg and 10kg packages, known for its purity and nutritional value.</p>
          </motion.div>
          {/* Product 2 */}
          <motion.div
            className={styles.product}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={styles.imageContainer}
            >
              <Image src="/assets/logo.png" alt="Wheat Bati Flour" width={300} height={200} />
            </motion.div>
            <h3>Wheat Bati Flour</h3>
            <p>Perfect for making traditional Indian bread (bati), available in 2kg packages.</p>
          </motion.div>
        </div>
      </section>

      <section className={styles.futurePlans}>
        <h2>Future Expansion Plans</h2>
        <p>We are planning to expand our product range to include specialty flours, ready-to-eat products, and value-added wheat products.</p>
      </section>

      <section className={styles.gallery}>
        <h2>Gallery</h2>
        <div className={styles.imageGallery}>
          <motion.div
            className={styles.galleryImage}
            whileHover={{ scale: 1.1 }}
          >
            <Image src="/assets/AmurvaAmratam.jpeg" alt="Gallery Image 1" width={300} height={200} />
          </motion.div>
          <motion.div
            className={styles.galleryImage}
            whileHover={{ scale: 1.1 }}
          >
            <Image src="/assets/ata1.jpg" alt="Gallery Image 2" width={300} height={200} />
          </motion.div>
          <motion.div
            className={styles.galleryImage}
            whileHover={{ scale: 1.1 }}
          >
            <Image src="/assets/logo.png" alt="Gallery Image 3" width={300} height={200} />
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
