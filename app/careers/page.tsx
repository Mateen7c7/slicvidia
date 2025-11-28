"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Zap, Users, Globe } from "lucide-react";
import Link from "next/link";

const benefits = [
  {
    icon: <Code className="w-6 h-6 text-[#3B82F6]" />,
    title: "Latest Tech Stack",
    description:
      "Work with cutting-edge technologies like Next.js, TypeScript, and AI integrations.",
  },
  {
    icon: <Users className="w-6 h-6 text-[#7C3AED]" />,
    title: "Collaborative Culture",
    description:
      "Join a team of passionate creators who support and learn from each other.",
  },
  {
    icon: <Globe className="w-6 h-6 text-[#28E7FF]" />,
    title: "Remote First",
    description:
      "Work from anywhere in the world. We value output over hours logged.",
  },
  {
    icon: <Zap className="w-6 h-6 text-[#3B82F6]" />,
    title: "Fast Growth",
    description:
      "Grow your career rapidly as we scale our operations and client base.",
  },
];

const openPositions = [
  {
    title: "Senior Frontend Developer",
    type: "Full-time",
    location: "Remote",
    department: "Engineering",
  },
  {
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Remote",
    department: "Design",
  },
  {
    title: "Digital Marketing Specialist",
    type: "Contract",
    location: "Remote",
    department: "Marketing",
  },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 bg-[#0D1117] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#3B82F6]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#7C3AED]/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#3B82F6] to-[#7C3AED] bg-clip-text text-transparent">
            Join Our Mission
          </h1>
          <p className="text-xl text-[#A3B3C9] max-w-2xl mx-auto">
            We&apos;re building the future of digital experiences. If
            you&apos;re passionate about innovation and creativity, we want to
            hear from you.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#1A1F29]/50 backdrop-blur-sm p-6 rounded-xl border border-[#2A3240] hover:border-[#3B82F6]/50 transition-colors"
            >
              <div className="mb-4 bg-[#0D1117] w-12 h-12 rounded-lg flex items-center justify-center border border-[#2A3240]">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
              <p className="text-[#A3B3C9] text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Open Positions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            Open Positions
          </h2>
          <div className="space-y-4">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                className="group bg-[#1A1F29]/30 backdrop-blur-sm p-6 rounded-xl border border-[#2A3240] hover:border-[#3B82F6] transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-[#3B82F6] transition-colors">
                    {position.title}
                  </h3>
                  <div className="flex gap-4 text-sm text-[#8290A5]">
                    <span>{position.department}</span>
                    <span>•</span>
                    <span>{position.type}</span>
                    <span>•</span>
                    <span>{position.location}</span>
                  </div>
                </div>
                <Link href="/contact">
                  <button className="px-6 py-2 rounded-full border border-[#2A3240] hover:bg-[#3B82F6] hover:border-[#3B82F6] hover:text-white transition-all flex items-center gap-2 text-sm font-medium">
                    Apply Now <ArrowRight size={16} />
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#A3B3C9] mb-4">
              Don&apos;t see a role that fits? We&apos;re always looking for
              talent.
            </p>
            <Link
              href="/contact"
              className="text-[#3B82F6] hover:text-[#7C3AED] transition-colors font-medium inline-flex items-center gap-2"
            >
              Send us your portfolio <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
