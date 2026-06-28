"use client";

import Image from "next/image";
import styles from "./FeaturedProjects.module.css";
import useReveal from "@/hooks/useReveal";

const projects = [
  {
    id: 1,
    image: "/images/equipment/excavator.jpg",
    category: "Construction",
    title: "Excavator Foundation Work",
    location: "Dubai, UAE",
  },
  {
    id: 2,
    image: "/images/equipment/crane.jpg",
    category: "Heavy Lifting",
    title: "Mobile Crane Operation",
    location: "Abu Dhabi, UAE",
  },
  {
    id: 3,
    image: "/images/equipment/lowbed-trailer.jpg",
    category: "Logistics",
    title: "Heavy Equipment Transportation",
    location: "Sharjah, UAE",
  },
];

export default function FeaturedProjects() {
  const { ref, isVisible } = useReveal();
  return (
    <section
      ref={ref}
      className={`${styles.section} ${isVisible ? styles.active : ""}`}
    >
      <div className={styles.container}>
        {/* Heading */}

        <div className={`${styles.heading} ${styles.fadeUp}`}>
          <span className={styles.subtitle}>FEATURED PROJECTS</span>

          <h2>Recent Projects We've Successfully Delivered</h2>

          <p>
            Discover some of our recent heavy equipment, transport and lifting
            operations completed across the UAE with safety, precision and
            reliability.
          </p>
        </div>

        {/* Projects */}

        <div className={styles.grid}>
          {projects.map((project) => (
            <div
              key={project.id}
              className={`
${styles.card}
${styles.fadeUp}
${styles[`delay${project.id}`]}
`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className={styles.image}
                sizes="(max-width:768px) 100vw,
                       (max-width:1200px) 50vw,
                       33vw"
              />

              <div className={styles.overlay}></div>

              <div className={styles.content}>
                <span className={styles.category}>{project.category}</span>

                <h3>{project.title}</h3>

                <p>{project.location}</p>

                <button className={styles.button}>
                  Read More
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
