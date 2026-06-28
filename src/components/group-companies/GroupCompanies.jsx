"use client";

import styles from "./GroupCompanies.module.css";
import { UserRound, ArrowRight } from "lucide-react";
import useReveal from "@/hooks/useReveal";

const companies = [
  {
    image: "/images/companies/company1.jpg",
    title: "USMAN TRANSPORT LLC",
    services: ["General Transport", "Heavy Haulage", "Oversized Deliveries"],
    buttonColor: "blue",
  },
  {
    image: "/images/companies/company2.jpg",
    title: "GLT TRANSPORT LLC",
    services: [
      "Logistics Solutions",
      "FMCG & Retail Transport",
      "Warehouse Support",
    ],
    buttonColor: "green",
  },
  {
    image: "/images/companies/company3.jpg",
    title: "UIT TRANSPORT BR LLC",
    services: [
      "Project Logistics",
      "Cross Border Transport",
      "Dedicated Fleet",
    ],
    buttonColor: "blue",
  },
  {
    image: "/images/companies/company4.jpg",
    title: "USMAN & IMTIAZ TRANSPORT LLC",
    services: [
      "Equipment Transport",
      "Machinery Moving",
      "Industrial Solutions",
    ],
    buttonColor: "green",
  },
];

export default function GroupCompanies() {
  const { ref, isVisible } = useReveal();

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.container}>
        {/* Heading */}
        <div
          className={`${styles.heading} ${
            isVisible ? "active delay-1" : "delay-1"
          } reveal`}
        >
          <span className={styles.subtitle}>OUR STRENGTH, YOUR SUCCESS</span>

          <h2 className={styles.title}>OUR GROUP COMPANIES</h2>
        </div>

        {/* Cards */}
        <div className={styles.cards}>
          {companies.map((company, index) => (
            <div
              key={company.title}
              className={`
      ${styles.card}
      ${index < 2 ? styles.leftReveal : styles.rightReveal}
      ${isVisible ? styles.active : ""}
      ${styles[`delay${index + 1}`]}
    `}
            >
              {/* Top Area */}
              <div className={styles.cardTop}>
                {/* Company Name */}
                <div className={styles.companyInfo}>
                  <h3>{company.title}</h3>
                </div>

                {/* Truck Image */}
                <div className={styles.imageWrapper}>
                  <img
                    src={company.image}
                    alt={company.title}
                    className={styles.truck}
                  />

                  {/* White Gradient */}
                  <div className={styles.imageOverlay}></div>
                </div>
              </div>

              {/* Body */}
              <div className={styles.cardBody}>
                <ul className={styles.serviceList}>
                  {company.services.map((service, i) => (
                    <li key={i}>
                      <UserRound size={16} className={styles.icon} />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`${styles.learnBtn} ${
                    company.buttonColor === "green" ? styles.green : styles.blue
                  }`}
                >
                  <span>LEARN MORE</span>

                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
