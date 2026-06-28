"use client";

import styles from "./HowWeWork.module.css";
import { PhoneCall, MessagesSquare, Truck, ShieldCheck } from "lucide-react";
import useReveal from "@/hooks/useReveal";
const process = [
  {
    id: 1,
    number: "01",
    icon: <PhoneCall size={34} />,
    title: "Request Service",
    description:
      "Contact our team and tell us about your equipment or transport requirements.",
  },
  {
    id: 2,
    number: "02",
    icon: <MessagesSquare size={34} />,
    title: "Project Consultation",
    description:
      "Our specialists evaluate your project and recommend the ideal solution.",
  },
  {
    id: 3,
    number: "03",
    icon: <Truck size={34} />,
    title: "Equipment Delivery",
    description:
      "Your equipment is delivered safely, on time and ready for operation.",
  },
  {
    id: 4,
    number: "04",
    icon: <ShieldCheck size={34} />,
    title: "24/7 Project Support",
    description:
      "Continuous technical support throughout your project whenever needed.",
  },
];

export default function HowWeWork() {
  const { ref, isVisible } = useReveal();
  return (
    <section
      ref={ref}
      className={`${styles.section} ${isVisible ? styles.active : ""}`}
    >
      <div className={styles.container}>
        <div className={`${styles.heading} ${styles.fadeUp}`}>
          <span className={styles.subtitle}>HOW WE WORK</span>

          <h2>Simple Process. Reliable Service.</h2>

          <p>
            From your first inquiry to project completion, our streamlined
            workflow ensures fast response, timely delivery and dependable
            support.
          </p>
        </div>

        <div className={styles.grid}>
          {process.map((step, index) => (
            <div key={step.id} className={styles.cardWrapper}>
              <div
                className={`
        ${styles.card}
        ${styles.fadeUp}
        ${styles[`delay${step.id}`]}
      `}
              >
                <span className={styles.number}>{step.number}</span>

                <div className={styles.icon}>{step.icon}</div>

                <h3>{step.title}</h3>

                <div className={styles.line}></div>

                <p>{step.description}</p>
              </div>

              {index !== process.length - 1 && (
                <div className={styles.arrow}>→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
