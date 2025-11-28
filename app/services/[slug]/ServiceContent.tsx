"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Code,
  CheckCircle,
  BarChart,
  PenTool,
  Video,
  Check,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Globe: Globe,
  Code: Code,
  CheckCircle: CheckCircle,
  BarChart: BarChart,
  PenTool: PenTool,
  Video: Video,
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

interface Service {
  title: string;
  icon: string;
  shortDesc: string;
  overview: {
    heading: string;
    description: string;
    importance: string;
  };
  offerings: string[];
  process: { title: string; desc: string }[];
  cta: string;
}

export default function ServiceContent({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] || Globe;

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10" />

        <div className="max-w-7xl mx-auto text-center z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.div variants={fadeIn} className="flex justify-center mb-6">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <Icon className="w-12 h-12 text-blue-400" />
              </div>
            </motion.div>
            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-6xl font-bold tracking-tight"
            >
              {service.title}
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-xl text-zinc-400 max-w-3xl mx-auto"
            >
              {service.shortDesc}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Overview & Importance */}
      <section className="py-16 px-6 bg-zinc-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">{service.overview.heading}</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              {service.overview.description}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10"
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-300">
              Why It Matters
            </h3>
            <p className="text-zinc-300 italic">
              &quot;{service.overview.importance}&quot;
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We Offer
            </h2>
            <p className="text-zinc-400">
              Comprehensive solutions tailored to your needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.offerings.map((offer: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-zinc-900 border border-white/10 hover:border-blue-500/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-1 bg-blue-500/20 rounded-full">
                    <Check className="w-4 h-4 text-blue-400" />
                  </div>
                  <p className="text-zinc-300 font-medium">{offer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 bg-zinc-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-16 text-center"
          >
            Our Process
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-900/50">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3 mt-2">{step.title}</h3>
                <p className="text-zinc-400 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-[3rem] p-12 md:p-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/10 mix-blend-overlay" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {service.cta}
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Ready to take the next step? Contact us today to discuss your
              project.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg shadow-xl hover:bg-blue-50 transition-colors"
            >
              Get Started Now
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
