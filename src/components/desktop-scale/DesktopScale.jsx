"use client";

import { useEffect } from "react";

export default function DesktopScale() {
  useEffect(() => {
    const DESIGN_WIDTH = 1540;

    function scaleDesktop() {
      const root = document.getElementById("desktop-root");
      if (!root) return;

      // 👇 Missing tha
      const scale = Math.min(window.innerWidth / DESIGN_WIDTH, 1);

      root.style.width = DESIGN_WIDTH + "px";
      root.style.transformOrigin = "top left";
      root.style.transform = `scale(${scale})`;
    }

    scaleDesktop();

    window.addEventListener("resize", scaleDesktop);

    return () => window.removeEventListener("resize", scaleDesktop);
  }, []);

  return null;
}
