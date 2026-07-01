"use client";

import { Building2, Clock3, MapPinned, ShieldCheck, Truck } from "lucide-react";
import useReveal from "@/hooks/useReveal";
import styles from "./AboutStats.module.css";

const stats = [
  { icon: <Building2 size={34} />, number: "4", label: "Group Companies" },
  { icon: <Truck size={34} />, number: "100+", label: "Fleet Assets" },
  { icon: <MapPinned size={34} />, number: "UAE", label: "Project Coverage" },
  { icon: <Clock3 size={34} />, number: "24/7", label: "Operations" },
  { icon: <ShieldCheck size={34} />, number: "15+", label: "Years Experience" },
];

export default function AboutStats() {
  const { ref, isVisible } = useReveal();

  return (
    <section
      ref={ref}
      className={`${styles.section} ${isVisible ? styles.active : ""}`}
    >
      <div className={styles.container}>
        {stats.map((item, index) => (
          <div
            className={`${styles.card} ${styles.fadeUp}`}
            style={{ transitionDelay: `${index * 0.12}s` }}
            key={item.label}
          >
            <div className={styles.icon}>{item.icon}</div>
            <strong>{item.number}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
