"use client";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background */}
      <div className={styles.imageWrapper}>
        <Image
          src="/images/hero/hero1.jpg"
          alt="Usman Group"
          fill
          priority
          className={styles.heroImage}
        />

        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <span className={styles.subtitle}>
          Transport • Logistics • Equipment Rental
        </span>

        <h1>
          Heavy Equipment
          <br />
          Rental & Transport
          <br />
          Specialists
        </h1>

        <p>
          Reliable heavy equipment rental and professional transport solutions
          across the UAE, delivering quality, safety, and efficiency for every
          project.
        </p>

        <div className={styles.buttons}>
          <button className={styles.quoteBtn}>GET QUOTE</button>

          <button className={styles.rentBtn}>RENT EQUIPMENT</button>
        </div>
      </div>
    </section>
  );
}
