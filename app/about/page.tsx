"use client";

import { motion } from "framer-motion";
import { Lightbulb, Shield, Star, TrendingUp, Users } from "lucide-react";

const values = [
  {
    title: "Innovation",
    description:
      "We constantly push boundaries to find new and better ways to solve problems.",
    icon: Lightbulb,
  },
  {
    title: "Integrity",
    description:
      "We build trust through transparency, honesty, and ethical practices.",
    icon: Shield,
  },
  {
    title: "Quality",
    description:
      "We deliver excellence in every pixel, line of code, and strategy we create.",
    icon: Star,
  },
  {
    title: "Growth",
    description: "We focus on sustainable growth for our clients and our team.",
    icon: TrendingUp,
  },
  {
    title: "Collaboration",
    description:
      "We believe in the power of working together to achieve shared goals.",
    icon: Users,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0D1117] text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-[#3B82F6] to-[#7C3AED]">
            Who We Are
          </h1>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg md:text-xl text-[#A3B3C9] leading-relaxed">
              Slicvidia is a technology services brand operated by{" "}
              <span className="text-white font-semibold">
                Hakeem Software Solutions
              </span>
              , a registered business in India.
            </p>
            <p className="text-lg md:text-xl text-[#A3B3C9] leading-relaxed">
              We provide full-stack software development, SaaS solutions, and
              digital marketing services to clients worldwide.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#1A1F29] border border-[#2A3240] rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#3B82F6] via-[#7C3AED] to-[#28E7FF]" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Our Mission
          </h2>
          <p className="text-xl md:text-2xl text-[#A3B3C9] font-medium max-w-4xl mx-auto">
            To empower businesses with scalable digital solutions that
            accelerate growth and build long-term success.
          </p>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-12 text-white"
        >
          Our Values
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#1A1F29] border border-[#2A3240] p-6 rounded-xl hover:border-[#3B82F6] transition-colors duration-300 group"
            >
              <div className="w-12 h-12 bg-[#0D1117] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#3B82F6]/10 transition-colors duration-300">
                <value.icon className="w-6 h-6 text-[#3B82F6] group-hover:text-[#28E7FF] transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#3B82F6] transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-[#A3B3C9]">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
