"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
          <motion.h1
            variants={heroTextVariant}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight"
          >
            Smart Digital Solutions to <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">
              Build, Manage & Grow
            </span>{" "}
            <br className="hidden md:block" />
            Your Online Presence.
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto"
          >
            Web Development | Full-Stack Software | Digital Marketing |
            Content Creation
          </motion.p>

          <motion.div
            variants={fadeIn}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg transition-all"
            >
              Get a Free Quote
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-semibold text-lg transition-all backdrop-blur-sm flex items-center justify-center gap-2 group"
            >
              Schedule a Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
