"use client";

import { Eye, Goal, Handshake, ShieldCheck } from "lucide-react";
import useReveal from "@/hooks/useReveal";
import styles from "./MissionVision.module.css";

const cards = [
  {
    icon: <Goal size={34} />,
    title: "Our Mission",
    text: "To deliver dependable equipment rental and transport support that keeps every client project moving with confidence.",
  },
  {
    icon: <Eye size={34} />,
    title: "Our Vision",
    text: "To be a trusted UAE partner for heavy equipment, logistics and site movement, known for readiness and reliability.",
  },
  {
    icon: <ShieldCheck size={34} />,
    title: "Our Standard",
    text: "We protect timelines, people and assets through maintained machinery, safe practices and accountable service.",
  },
  {
    icon: <Handshake size={34} />,
    title: "Our Promise",
    text: "Clear communication, practical solutions and long-term business relationships built on consistent delivery.",
  },
];

export default function MissionVision() {
  const { ref, isVisible } = useReveal();

  return (
    <section
      ref={ref}
      className={`${styles.section} ${isVisible ? styles.active : ""}`}
    >
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={`${styles.subtitle} ${styles.fadeUp}`}>
            WHAT GUIDES US
          </span>
          <h2 className={`${styles.fadeUp} ${styles.delay1}`}>
            Built on reliability, safety and long-term trust.
          </h2>
        </div>

        <div className={styles.grid}>
          {cards.map((card, index) => (
            <article
              className={`${styles.card} ${styles.fadeUp}`}
              style={{ transitionDelay: `${0.2 + index * 0.12}s` }}
              key={card.title}
            >
              <div className={styles.icon}>{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
