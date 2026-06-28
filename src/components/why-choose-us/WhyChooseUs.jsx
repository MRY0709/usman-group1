"use client";

import Image from "next/image";
import styles from "./WhyChooseUs.module.css";
import useReveal from "@/hooks/useReveal";

const features = [
  "Modern Heavy Equipment Fleet",
  "Certified & Skilled Operators",
  "24/7 Operations & Support",
  "UAE Wide Project Coverage",
  "Reliable Transport Solutions",
  "Safety & Quality Commitment",
];

export default function WhyChooseUs() {
  const { ref, isVisible } = useReveal();

  return (
    <section
      ref={ref}
      className={`${styles.section} ${isVisible ? styles.active : ""}`}
    >
      <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.left}>
          <span
            className={`${styles.subtitle} ${styles.fadeUp} ${styles.delay1}`}
          >
            WHY CHOOSE US
          </span>

          <h2 className={`${styles.fadeUp} ${styles.delay2}`}>
            Your Trusted Heavy Equipment &
            <br />
            Transport Partner
          </h2>

          <p className={`${styles.fadeUp} ${styles.delay3}`}>
            We deliver reliable heavy equipment rental, transport and logistics
            solutions across the UAE. With a modern fleet, experienced operators
            and a strong commitment to safety, we help projects stay productive
            from start to finish.
          </p>

          <div
            className={`${styles.featureGrid} ${styles.fadeUp} ${styles.delay4}`}
          >
            {features.map((item) => (
              <div key={item} className={styles.feature}>
                <span className={styles.check}>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <button
            className={`${styles.button} ${styles.fadeUp} ${styles.delay5}`}
          >
            Request a Quote →
          </button>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <div
            className={`${styles.imageWrapper} ${styles.fadeRight} ${styles.delay2}`}
          >
            <Image
              src="/images/equipment/wheel-loader.jpg"
              alt="Heavy Equipment"
              fill
              sizes="(max-width:768px) 100vw, 50vw"
              className={styles.image}
              priority={false}
            />

            <div className={`${styles.cardTop} ${styles.pop} ${styles.delay4}`}>
              <h3>15+</h3>
              <span>Years Experience</span>
            </div>

            <div
              className={`${styles.cardBottom} ${styles.pop} ${styles.delay5}`}
            >
              <h3>100+</h3>
              <span>Equipment Fleet</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
