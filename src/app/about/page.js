import AboutHero from "@/components/about/AboutHero/AboutHero";
import AboutStats from "@/components/about/AboutStats/AboutStats";
import CompanyOverview from "@/components/about/CompanyOverview/CompanyOverview";
import MissionVision from "@/components/about/MissionVision/MissionVision";
import Timeline from "@/components/about/Timeline/Timeline";
import WhyChooseAbout from "@/components/about/WhyChooseAbout/WhyChooseAbout";
import CTAAbout from "@/components/about/CTAAbout/CTAAbout";
import Footer from "@/components/footer/Footer";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStats />
      <CompanyOverview />
      <MissionVision />
      <Timeline />
      <WhyChooseAbout />
      <CTAAbout />
      <Footer />
    </>
  );
}
