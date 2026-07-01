"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      {/* Background Image */}
      <Image
        src="/images/about/A.jpg"
        alt="Usman Group Heavy Equipment"
        fill
        priority
        className={styles.bgImage}
      />

      {/* Dark Overlay */}
      <div className={styles.overlay}></div>

      {/* Left Panel */}
      <div className={styles.leftPanel}>
        <span className={styles.label}>ABOUT US</span>

        <h1>
          Building Trust
          <br />
          Through Heavy
          <br />
          Equipment
          <br />
          Excellence
        </h1>

        <div className={styles.goldLine}></div>

        <p>
          Usman Group delivers reliable heavy equipment rental, transportation
          and logistics solutions across the UAE. With modern machinery,
          experienced professionals and uncompromising service quality, we help
          businesses complete every project with confidence.
        </p>

        <div className={styles.buttons}>
          <Link href="/fleet" className={styles.primaryBtn}>
            Explore Fleet
          </Link>

          <Link href="/contact" className={styles.secondaryBtn}>
            Contact Us
          </Link>
        </div>
      </div>

      {/* Gold Edge */}
      <div className={styles.goldEdge}></div>
    </section>
  );
}
