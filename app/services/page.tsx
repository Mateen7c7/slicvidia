"use client";

import { motion, Variants } from "framer-motion";
import {
  Globe,
  Code,
  CheckCircle,
  BarChart,
  Video,
  ArrowRight,
  ExternalLink,
  Zap,
  Shield,
  Target,
} from "lucide-react";
import Link from "next/link";
import { services } from "@/app/lib/services-data";
import { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Globe: Globe,
  Code: Code,
  CheckCircle: CheckCircle,
  BarChart: BarChart,
  Video: Video,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // Custom ease equivalent to easeOutExpo
    },
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white pt-32 pb-24 font-sans">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#3B82F6]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#7C3AED]/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] text-sm font-semibold tracking-wide"
          >
            Digital Excellence
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tighter"
          >
            Our{" "}
            <span className="bg-linear-to-r from-[#3B82F6] to-[#7C3AED] bg-clip-text text-transparent">
              Services
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-xl text-[#A3B3C9] max-w-2xl mx-auto leading-relaxed"
          >
            We provide end-to-end digital solutions designed to help your
            business scale, innovate, and thrive across all channels.
          </motion.p>
        </div>

        {/* Services Multi-Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <motion.div
                key={service.slug}
                variants={itemVariants}
                className="group relative"
              >
                <Link href={`/services/${service.slug}`}>
                  <div className="h-full p-8 rounded-[2.5rem] bg-[#1A1F29] border border-[#2A3240] hover:border-[#3B82F6]/50 transition-all duration-500 flex flex-col relative overflow-hidden">
                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-br from-[#3B82F6]/5 to-[#7C3AED]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10">
                      {/* Icon with animated background */}
                      <div className="mb-8 relative">
                        <div className="absolute inset-0 bg-[#3B82F6]/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
                        <div className="w-16 h-16 rounded-2xl bg-[#0D1117] border border-[#2A3240] flex items-center justify-center text-[#3B82F6] group-hover:text-white group-hover:bg-[#3B82F6] transition-all duration-300 relative">
                          <Icon size={32} />
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-[#A3B3C9] mb-8 leading-relaxed group-hover:text-[#D1D5DB] transition-colors duration-300">
                        {service.shortDesc}
                      </p>

                      <div className="space-y-4 mb-8">
                        <div className="text-xs font-bold uppercase tracking-wider text-[#3B82F6] mb-2">
                          Key Offerings
                        </div>
                        {service.offerings.slice(0, 3).map((offering, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                            <span className="text-sm text-[#8290A5] group-hover:text-[#A3B3C9] transition-colors">
                              {offering}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto pt-6 border-t border-[#2A3240] flex items-center justify-between group-hover:border-[#3B82F6]/30 transition-colors">
                      <span className="text-sm font-semibold text-[#3B82F6] flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300">
                        Explore Details <ArrowRight size={16} />
                      </span>
                      <ExternalLink
                        size={18}
                        className="text-[#2A3240] group-hover:text-[#3B82F6] transition-colors"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Why Us Section for Services Page */}
        <div className="mt-40 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                Why partner with{" "}
                <span className="text-[#3B82F6]">Slicvidia</span>?
              </h2>
              <p className="text-lg text-[#A3B3C9] mb-10 leading-relaxed">
                We don&apos;t just build, we strategize. Our holistic approach
                ensures that every line of code and every pixel serves a purpose
                in your business growth.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: Zap,
                    title: "Speed to Market",
                    desc: "Fast delivery without compromising quality.",
                  },
                  {
                    icon: Shield,
                    title: "Secure & Scalable",
                    desc: "Built to handle your growth securely.",
                  },
                  {
                    icon: Target,
                    title: "Result Oriented",
                    desc: "Focused on metrics that matter to you.",
                  },
                  {
                    icon: Globe,
                    title: "Global Standard",
                    desc: "Modern tech stacks and best practices.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-[#1A1F29] border border-[#2A3240] flex items-center justify-center text-[#3B82F6]">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-sm text-[#8290A5]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden border border-[#2A3240] aspect-video flex items-center justify-center bg-[#1A1F29]">
                <div className="absolute inset-0 bg-linear-to-tr from-[#3B82F6]/10 to-[#7C3AED]/10" />
                <div className="relative text-center p-8">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-32 h-32 border-2 border-dashed border-[#3B82F6]/30 rounded-full mx-auto mb-6 flex items-center justify-center"
                  >
                    <div className="w-24 h-24 bg-linear-to-r from-[#3B82F6] to-[#7C3AED] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                      <Zap size={40} className="text-white fill-white" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">
                    Transforming Ideas
                  </h3>
                  <p className="text-[#8290A5]">
                    From concept to market-ready product.
                  </p>
                </div>
              </div>
              {/* Decorative Blur */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#7C3AED]/20 blur-3xl rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#3B82F6]/20 blur-3xl rounded-full" />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[3rem] bg-linear-to-r from-[#3B82F6] to-[#7C3AED] p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Ready to elevate your digital presence?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss how our expertise can align with your business
              goals. Book a free consultation today and start your journey
              towards digital excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-10 py-4 bg-white text-[#3B82F6] font-bold rounded-full hover:bg-[#0D1117] hover:text-white transition-all duration-300 shadow-xl">
                  Contact Us Today
                </button>
              </Link>
              <Link href="/#portfolio">
                <button className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300">
                  View Our Work
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
