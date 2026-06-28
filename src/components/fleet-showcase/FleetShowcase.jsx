"use client";

import styles from "./FleetShowcase.module.css";
import Image from "next/image";
import useReveal from "@/hooks/useReveal";

const fleet = [
  {
    id: 1,
    image: "/images/equipment/excavator.jpg",
    category: "Excavator",
    title: "Excavator",
    description:
      "Powerful crawler excavator designed for excavation, demolition and heavy earthmoving projects.",
    features: ["Heavy Duty", "High Performance", "Operator Available"],
  },

  {
    id: 2,
    image: "/images/equipment/wheel-loader.jpg",
    category: "Wheel Loader",
    title: "Wheel Loader",
    description:
      "Efficient wheel loader for material handling, loading and construction site operations.",
    features: ["Fast Loading", "Fuel Efficient", "High Capacity"],
  },

  {
    id: 3,
    image: "/images/equipment/backhoe-loader.jpg",
    category: "Backhoe Loader",
    title: "Backhoe Loader",
    description:
      "Versatile backhoe loader suitable for digging, trenching and loading applications.",
    features: ["Multi Purpose", "Reliable", "Compact Design"],
  },

  {
    id: 4,
    image: "/images/equipment/crane.jpg",
    category: "Mobile Crane",
    title: "Mobile Crane",
    description:
      "Heavy lifting crane engineered for safe lifting and industrial construction projects.",
    features: ["Heavy Lifting", "Certified Equipment", "Professional Operator"],
  },

  {
    id: 5,
    image: "/images/equipment/forklift.jpg",
    category: "Forklift",
    title: "Forklift",
    description:
      "Modern forklift designed for warehouse logistics and industrial material handling.",
    features: ["Warehouse Ready", "Safe Operation", "High Efficiency"],
  },

  {
    id: 6,
    image: "/images/equipment/lowbed-trailer.jpg",
    category: "Lowbed Trailer",
    title: "Lowbed Trailer",
    description:
      "Heavy-duty lowbed trailer for transporting oversized machinery and construction equipment.",
    features: ["Heavy Transport", "Secure Delivery", "Long Distance"],
  },
];

export default function FleetShowcase() {
  const { ref: containerRef, isVisible } = useReveal();

  return (
    <section ref={containerRef} className={styles.section}>
      <div className={styles.container}>
        {/* Heading */}

        <div
          className={`
    ${styles.heading}
    ${isVisible ? styles.active : ""}
    ${styles.fadeUp}
  `}
        >
          <span className={styles.subtitle}>OUR PREMIUM FLEET</span>

          <h2>Heavy Equipment Ready For Every Project</h2>

          <p>
            Explore our modern fleet of heavy equipment designed to deliver
            reliable, safe and efficient solutions across construction,
            logistics and industrial projects throughout the UAE.
          </p>
        </div>

        {/* Fleet Cards */}

        <div className={styles.grid}>
          {fleet.map((item, index) => (
            <div
              key={item.id}
              className={`
    ${styles.card}
    ${index < 3 ? styles.leftReveal : styles.rightReveal}
    ${isVisible ? styles.active : ""}
    ${styles[`delay${index + 1}`]}
  `}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={styles.image}
                  sizes="(max-width:768px) 100vw,
                 (max-width:1200px) 50vw,
                 33vw"
                />

                <span className={styles.imageBadge}>{item.category}</span>
              </div>

              <div className={styles.content}>
                <h3>{item.title}</h3>

                <p className={styles.description}>{item.description}</p>

                <ul className={styles.features}>
                  {item.features.slice(0, 2).map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <button className={styles.button}>
                  <span>View Details</span>

                  <span className={styles.arrow}>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
