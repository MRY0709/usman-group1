"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./CompanySlider.module.css";
import useReveal from "@/hooks/useReveal";

const companies = [
  {
    name: "USMAN TRANSPORT LLC",
    subtitle: "UAE",
    image: "/images/companies/company1.jpg",
  },
  {
    name: "GLT TRANSPORT LLC",
    subtitle: "Logistics",
    image: "/images/companies/company2.jpg",
  },
  {
    name: "UIT TRANSPORT BR LLC",
    subtitle: "Fleet Services",
    image: "/images/companies/company3.jpg",
  },
  {
    name: "USMAN & IMTIAZ TRANSPORT LLC",
    subtitle: "Heavy Equipment",
    image: "/images/companies/company4.jpg",
  },
];

export default function CompanySlider() {
  const { ref, isVisible } = useReveal({
    threshold: 0.01,
  });

  return (
    <div
      ref={ref}
      className={`${styles.wrapper} ${isVisible ? styles.animate : ""}`}
    >
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={4}
        slidesPerGroup={4}
        spaceBetween={18}
        loop={false}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        {companies.map((company, index) => (
          <SwiperSlide
            key={company.name}
            className={index < 2 ? styles.leftCard : styles.rightCard}
          >
            <div className={styles.card}>
              <div className={styles.image}>
                <Image
                  src={company.image}
                  alt={company.name}
                  fill
                  sizes="90px"
                />
              </div>

              <div className={styles.content}>
                <h3>{company.name}</h3>
                <span>{company.subtitle}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
