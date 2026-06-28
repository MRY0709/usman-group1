import Hero from "@/components/hero/Hero";
import CompanySlider from "@/components/company-slider/CompanySlider";
import StatsBar from "@/components/stats-bar/StatsBar";
import GroupCompanies from "@/components/group-companies/GroupCompanies";
import FeatureStrip from "@/components/feature-strip/FeatureStrip";
import FleetShowcase from "@/components/fleet-showcase/FleetShowcase";
import WhyChooseUs from "@/components/why-choose-us/WhyChooseUs";
import HowWeWork from "@/components/how-we-work/HowWeWork";
import FeaturedProjects from "@/components/featured-projects/FeaturedProjects";
import CTASection from "@/components/cta-banner/CTASection";
import Testimonials from "@/components/testimonials/Testimonials";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanySlider />
      <StatsBar />
      <GroupCompanies />
      <FeatureStrip />
      <FleetShowcase />
      <WhyChooseUs />
      <HowWeWork />
      <FeaturedProjects />
      <CTASection />
      <Testimonials />
      <Footer />
    </>
  );
}
