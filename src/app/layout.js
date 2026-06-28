import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import DesktopScale from "@/components/desktop-scale/DesktopScale";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Usman Group",
  description: "Heavy Equipment Rental & Transport",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <DesktopScale />

        <div id="desktop-root">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
