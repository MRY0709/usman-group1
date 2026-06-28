"use client";

import styles from "./StatsBar.module.css";
import { Building2, Truck, MapPinned, Clock3 } from "lucide-react";

const stats = [
  {
    icon: <Building2 size={42} />,
    number: "4",
    label: "Companies",
  },
  {
    icon: <Truck size={42} />,
    number: "100+",
    label: "Vehicles",
  },
  {
    icon: <MapPinned size={42} />,
    number: "UAE",
    label: "Coverage",
  },
  {
    icon: <Clock3 size={42} />,
    number: "24/7",
    label: "Operations",
  },
];

export default function StatsBar() {
  return (
    <section className={styles.stats}>
      <div className={styles.container}>
        {stats.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{item.icon}</div>

            <div className={styles.content}>
              <h3>{item.number}</h3>
              <span>{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
