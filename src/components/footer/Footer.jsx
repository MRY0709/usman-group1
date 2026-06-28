"use client";

import styles from "./Footer.module.css";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* ================= CTA ================= */}

      <div className={styles.cta}>
        <span className={styles.subtitle}>READY TO WORK WITH US?</span>

        <h2>
          Reliable Heavy Equipment &
          <br />
          Transport Solutions
        </h2>

        <div className={styles.ctaButtons}>
          <button className={styles.primaryBtn}>Request Quote</button>

          <button className={styles.secondaryBtn}>Contact Us</button>
        </div>
      </div>

      {/* ================= Main Footer ================= */}

      <div className={styles.container}>
        {/* Company */}

        <div className={styles.column}>
          <h3 className={styles.logo}>TRANSPORT</h3>

          <p>
            Providing reliable heavy equipment rental, transportation and
            logistics solutions across the UAE with quality, safety,
            professionalism and on-time delivery.
          </p>
        </div>

        {/* Quick Links */}

        <div className={styles.column}>
          <h4>Quick Links</h4>

          <div className={styles.info}>
            <Phone size={18} />
            <span>
              +971 50 191 8874
              <br />
              +971 50 354 5674
            </span>
          </div>

          <div className={styles.info}>
            <Mail size={18} />
            <span>usman@transportuae.co</span>
          </div>

          <div className={styles.info}>
            <MapPin size={18} />
            <span>Al Quoz 4, Dubai - UAE</span>
          </div>
        </div>

        {/* Services */}

        <div className={styles.column}>
          <h4>Services</h4>

          <a>Heavy Equipment Rental</a>
          <a>Transport Services</a>
          <a>Logistics Solutions</a>
          <a>Crane Rental</a>
          <a>Equipment Transport</a>
        </div>

        {/* Contact */}

        <div className={styles.column}>
          <h4>Contact</h4>

          <div className={styles.info}>
            <Phone size={18} />
            <span>+971 50 191 8874</span>
          </div>

          <div className={styles.info}>
            <Mail size={18} />
            <span>info@transportuae.co</span>
          </div>

          <div className={styles.info}>
            <MapPin size={18} />
            <span>Dubai, United Arab Emirates</span>
          </div>
        </div>
      </div>

      {/* Bottom */}

      <div className={styles.bottom}>
        © 2026 Transport. All Rights Reserved.
      </div>
    </footer>
  );
}
