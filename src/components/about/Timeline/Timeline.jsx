"use client";

import useReveal from "@/hooks/useReveal";
import styles from "./Timeline.module.css";

const steps = [
  {
    year: "01",
    title: "Plan the Requirement",
    text: "We understand the site, load, access, timing and equipment needs before committing resources.",
  },
  {
    year: "02",
    title: "Prepare the Fleet",
    text: "Machinery, trailers and support vehicles are checked so the project receives ready-to-work assets.",
  },
  {
    year: "03",
    title: "Move with Control",
    text: "Transport and site coordination are handled with clear communication from dispatch to delivery.",
  },
  {
    year: "04",
    title: "Support Until Completion",
    text: "Our team stays responsive for rental extensions, replacement support and additional project needs.",
  },
];

export default function Timeline() {
  const { ref, isVisible } = useReveal();

  return (
    <section
      ref={ref}
      className={`${styles.section} ${isVisible ? styles.active : ""}`}
    >
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={`${styles.subtitle} ${styles.fadeUp}`}>
            HOW WE DELIVER
          </span>
          <h2 className={`${styles.fadeUp} ${styles.delay1}`}>
            A practical process for demanding site operations.
          </h2>
          <p className={`${styles.fadeUp} ${styles.delay2}`}>
            From first call to final pickup, our process is designed to keep
            equipment moving, downtime low and communication clear.
          </p>
        </div>

        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <article
              className={`${styles.item} ${styles.fadeUp}`}
              style={{ transitionDelay: `${0.25 + index * 0.12}s` }}
              key={step.title}
            >
              <span>{step.year}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
