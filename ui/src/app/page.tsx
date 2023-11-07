import React from 'react';
import HeroSection from "@/components/pages/home/hero-section";
import AboutSection from "@/components/pages/home/about-section";
import ServicesSection from "@/components/pages/home/services-section";
import FaqsSection from "@/components/pages/home/faq-section";

const Home = () => {
  return (
    <div className="">

      <HeroSection />

      <AboutSection />

      <ServicesSection />

      <FaqsSection />

    </div>
  );
};

export default Home;