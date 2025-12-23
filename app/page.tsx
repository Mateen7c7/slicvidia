"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import HeroSection from "./components/home/HeroSection";
import WhyChooseUs from "./components/home/WhyChooseUs";
import ServicesPreview from "./components/home/ServicesPreview";
import PortfolioSection from "./components/home/PortfolioSection";
import ReviewsSection from "./components/home/ReviewsSection";
import CTASection from "./components/home/CTASection";
import ProcessSection from "./components/home/ProcessSection";
import FAQSection from "./components/home/FAQSection";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 100], [0, 1]);

  return (
    <div className="min-h-screen">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left z-[60]"
        style={{ scaleX }}
      />

      <HeroSection />
      <WhyChooseUs />
      <ServicesPreview />
      <ProcessSection />
      <PortfolioSection />
      <ReviewsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
