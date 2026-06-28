"use client";

import Image from "next/image";
import styles from "./CTASection.module.css";

export default function CTASection() {
  return (
    <section className={styles.section}>
      {/* Background Image */}

      <Image
        src="/images/hero/hero1.jpg"
        alt="Heavy Equipment"
        fill
        priority={false}
        className={styles.background}
        sizes="100vw"
      />

      {/* Overlay */}

      <div className={styles.overlay}></div>

      {/* Content */}

      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.subtitle}>LET'S BUILD TOGETHER</span>

          <h2>
            Ready To Start Your
            <br />
            Next Project?
          </h2>

          <p>
            We provide reliable heavy equipment rental, transportation and
            logistics solutions across the UAE. Contact our team today and get
            the right equipment delivered on time.
          </p>

          <div className={styles.buttons}>
            <button className={styles.primaryBtn}>Request a Quote</button>

            <button className={styles.secondaryBtn}>Contact Us</button>
          </div>
        </div>

        {/* Floating Card */}

        <div className={styles.floatingCard}>
          <span className={styles.rating}>★★★★★</span>

          <h3>Trusted Across UAE</h3>

          <p>Reliable Equipment, Safe Transport & 24/7 Support</p>
        </div>
      </div>
    </section>
  );
}
