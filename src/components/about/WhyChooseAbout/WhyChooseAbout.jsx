"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import useReveal from "@/hooks/useReveal";
import styles from "./WhyChooseAbout.module.css";

const points = [
  "Fast equipment availability for urgent project needs",
  "Experienced operators and logistics coordinators",
  "Transparent communication from booking to delivery",
  "Heavy transport support for machinery and materials",
  "Maintenance-minded fleet management",
  "UAE-wide coverage for construction and industrial sites",
];

export default function WhyChooseAbout() {
  const { ref, isVisible } = useReveal();

  return (
    <section
      ref={ref}
      className={`${styles.section} ${isVisible ? styles.active : ""}`}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={`${styles.subtitle} ${styles.fadeUp}`}>
            WHY USMAN GROUP
          </span>
          <h2 className={`${styles.fadeUp} ${styles.delay1}`}>
            Professional support for projects where timing matters.
          </h2>
          <p className={`${styles.fadeUp} ${styles.delay2}`}>
            We combine the practical readiness of a rental fleet with the
            discipline of a transport operation. That means clients get the
            right equipment, delivered with the right coordination, at the
            moment their project needs it.
          </p>

          <div className={`${styles.points} ${styles.fadeUp} ${styles.delay3}`}>
            {points.map((point) => (
              <div className={styles.point} key={point}>
                <CheckCircle2 size={22} />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.imageWrap} ${styles.fadeRight}`}>
          <Image
            src="/images/about/F.jpg"
            alt="Heavy transport and rental equipment"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className={styles.image}
          />
          <div className={styles.badge}>
            <strong>24/7</strong>
            <span>Operational Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
