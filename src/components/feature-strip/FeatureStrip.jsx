"use client";

import styles from "./FeatureStrip.module.css";

import { Shield, Users, Handshake, Settings } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Safety First",
    text: "Highest standards in safety and compliance",
  },
  {
    icon: Users,
    title: "Experienced Team",
    text: "Skilled professionals ensuring reliable service",
  },
  {
    icon: Handshake,
    title: "Customer Commitment",
    text: "Dedicated to quality and customer satisfaction",
  },
  {
    icon: Settings,
    title: "Modern Fleet",
    text: "Well-maintained vehicles for every need",
  },
];

export default function FeatureStrip() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <div className={styles.item} key={index}>
              <div className={styles.iconBox}>
                <Icon size={54} strokeWidth={1.8} className={styles.icon} />
              </div>

              <div className={styles.content}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
