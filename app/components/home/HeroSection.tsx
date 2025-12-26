"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const heroTextVariant: Variants = {
  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const blobAnimation: Variants = {
  animate: {
    scale: [1, 1.1, 1],
    rotate: [0, 10, -10, 0],
    x: [0, 50, -50, 0],
    y: [0, -30, 30, 0],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden min-h-[90vh] flex items-center justify-center">
      {/* Animated Background Gradient */}
      <motion.div
        variants={blobAnimation}
        animate="animate"
        className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] -z-10"
      />
      <motion.div
        variants={blobAnimation}
        animate="animate"
        transition={{ delay: 2 }} // Offset the second blob
        className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px] -z-10"
      />

      <div className="max-w-7xl mx-auto text-center z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-8"
        >
          {/* Outcome-Driven Headline */}
          <motion.h1
            variants={heroTextVariant}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight"
          >
            Turn Your Digital Presence Into <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">
              A Growth Engine
            </span>
          </motion.h1>

          {/* Clarified Audience & Value Prop */}
          <motion.p
            variants={fadeIn}
            className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto"
          >
            For ambitious businesses ready to scale. We combine high-performance
            web development with data-driven marketing to convert visitors into
            revenue.
          </motion.p>

          {/* Trust Indicators / Proof Text */}
          <motion.div
            variants={fadeIn}
            className="flex items-center justify-center gap-6 text-sm md:text-base text-zinc-500 font-medium"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Results-Driven
            </span>
            <span className="hidden md:inline">•</span>
            <span>Tailored Strategies</span>
            <span className="hidden md:inline">•</span>
            <span>Long-Term Support</span>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            {/* Improved CTA: Free Consultation */}
            <Link href="/contact" className="w-full sm:w-auto">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg transition-all"
              >
                Get Your Free Audit
              </motion.button>
            </Link>
            {/* Secondary CTA */}
            <Link href="/contact" className="w-full sm:w-auto">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-semibold text-lg transition-all backdrop-blur-sm flex items-center justify-center gap-2 group"
              >
                Book a Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
