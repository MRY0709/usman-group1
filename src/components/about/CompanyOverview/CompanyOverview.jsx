"use client";

import Image from "next/image";
import { ArrowRight, ShieldCheck, Truck, Wrench } from "lucide-react";
import useReveal from "@/hooks/useReveal";
import styles from "./CompanyOverview.module.css";

const highlights = [
  {
    icon: <Truck size={24} />,
    title: "Transport Ready",
    text: "Reliable movement of machinery, materials and site equipment across the UAE.",
  },
  {
    icon: <Wrench size={24} />,
    title: "Maintained Fleet",
    text: "Equipment is checked, serviced and prepared before it reaches your project.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Safety First",
    text: "Every job is handled with disciplined planning, trained teams and clear site coordination.",
  },
];

export default function CompanyOverview() {
  const { ref, isVisible } = useReveal();

  return (
    <section
      ref={ref}
      className={`${styles.section} ${isVisible ? styles.active : ""}`}
    >
      <div className={styles.container}>
        <div className={styles.media}>
          <div className={`${styles.mainImage} ${styles.fadeLeft}`}>
            <Image
              src="/images/about/B.jpg"
              alt="Usman Group equipment operations"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className={styles.image}
            />
          </div>

          <div className={`${styles.smallImage} ${styles.pop}`}>
            <Image
              src="/images/about/C.jpg"
              alt="Heavy equipment site support"
              fill
              sizes="280px"
              className={styles.image}
            />
          </div>

          <div className={`${styles.experienceCard} ${styles.pop}`}>
            <strong>15+</strong>
            <span>Years of trusted field experience</span>
          </div>
        </div>

        <div className={styles.content}>
          <span className={`${styles.subtitle} ${styles.fadeUp}`}>
            COMPANY OVERVIEW
          </span>

          <h2 className={`${styles.fadeUp} ${styles.delay1}`}>
            A dependable partner for equipment, transport and project movement.
          </h2>

          <p className={`${styles.fadeUp} ${styles.delay2}`}>
            Usman Group supports construction, infrastructure, industrial and
            commercial projects with heavy equipment rental, professional
            transport and practical logistics support. Our work is built around
            responsive service, properly maintained machinery and teams who
            understand the pressure of active sites.
          </p>

          <div className={`${styles.highlightGrid} ${styles.fadeUp} ${styles.delay3}`}>
            {highlights.map((item) => (
              <div className={styles.highlight} key={item.title}>
                <div className={styles.icon}>{item.icon}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <a className={`${styles.link} ${styles.fadeUp} ${styles.delay4}`} href="/fleet">
            Explore our fleet <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
