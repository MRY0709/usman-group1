"use client";

import styles from "./Testimonials.module.css";
import useReveal from "@/hooks/useReveal";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Khan",
    role: "Project Manager",
    company: "Dubai, UAE",
    review:
      "Excellent service with modern equipment and professional operators. Everything was delivered on time.",
  },
  {
    id: 2,
    name: "John Smith",
    role: "Construction Head",
    company: "Abu Dhabi",
    review:
      "Reliable company with outstanding customer support. Highly recommended for heavy equipment rental.",
  },
  {
    id: 3,
    name: "Ali Hassan",
    role: "Site Engineer",
    company: "Sharjah",
    review:
      "Professional team, quality equipment and smooth project execution from start to finish.",
  },
];

export default function Testimonials() {
  const { ref, isVisible } = useReveal();
  return (
    <section
      ref={ref}
      className={`${styles.section} ${isVisible ? styles.active : ""}`}
    >
      <div className={styles.container}>
        <div className={`${styles.heading} ${styles.fadeUp}`}>
          <span className={styles.subtitle}>CLIENT TESTIMONIALS</span>

          <h2>Trusted By Contractors Across The UAE</h2>

          <p>
            We take pride in delivering reliable heavy equipment, transportation
            and logistics solutions backed by exceptional customer satisfaction.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((item) => (
            <div
              key={item.id}
              className={`
  ${styles.card}
  ${styles.fadeUp}
  ${styles[`delay${item.id}`]}
`}
            >
              <div className={styles.stars}>★★★★★</div>

              <p className={styles.review}>"{item.review}"</p>

              <div className={styles.user}>
                <div className={styles.avatar}>{item.name.charAt(0)}</div>

                <div>
                  <h4>{item.name}</h4>
                  <span>
                    {item.role} • {item.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
