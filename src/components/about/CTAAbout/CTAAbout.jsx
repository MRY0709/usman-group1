"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./CTAAbout.module.css";

export default function CTAAbout() {
  return (
    <section className={styles.section}>
      <Image
        src="/images/about/H.jpg"
        alt="Heavy equipment ready for project support"
        fill
        sizes="100vw"
        className={styles.background}
      />
      <div className={styles.overlay} />

      <div className={styles.container}>
        <span className={styles.subtitle}>READY FOR YOUR NEXT PROJECT?</span>
        <h2>
          Get dependable equipment and transport support from one team.
        </h2>
        <p>
          Tell us what your site needs and our team will help match the right
          machinery, transport plan and support schedule.
        </p>

        <div className={styles.buttons}>
          <Link href="/contact" className={styles.primaryBtn}>
            Request a Quote
          </Link>
          <Link href="/fleet" className={styles.secondaryBtn}>
            View Fleet
          </Link>
        </div>
      </div>
    </section>
  );
}
