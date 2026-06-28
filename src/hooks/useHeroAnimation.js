"use client";

import { useEffect, useRef, useState } from "react";

export default function useHeroAnimation() {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset animation
          setAnimate(false);

          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setAnimate(true);
            });
          });
        } else {
          setAnimate(false);
        }
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return { ref, animate };
}
