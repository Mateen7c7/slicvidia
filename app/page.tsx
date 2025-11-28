"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import {
  Code,
  BarChart,
  PenTool,
  Video,
  CheckCircle,
  ArrowRight,
  Globe,
  Cpu,
  Zap,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";

// Animation Variants
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

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="min-h-screen">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* 1️⃣ Hero Section */}
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

      {/* 2️⃣ Why Choose Slicvidia? */}
      <section
        id="about"
        className="py-24 bg-zinc-900/30 border-y border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: <Cpu className="w-8 h-8 text-blue-400" />,
                title: "End-to-End Solutions",
                desc: "Tech + Marketing under one roof.",
              },
              {
                icon: <Zap className="w-8 h-8 text-yellow-400" />,
                title: "Fast Delivery",
                desc: "Rapid prototyping and ongoing support.",
              },
              {
                icon: <BarChart className="w-8 h-8 text-green-400" />,
                title: "Scalable Growth",
                desc: "Software that grows with your business.",
              },
              {
                icon: <MessageSquare className="w-8 h-8 text-purple-400" />,
                title: "Transparent",
                desc: "Clear communication every step of the way.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5, borderColor: "rgba(59, 130, 246, 0.5)" }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 transition-colors duration-300"
              >
                <div className="mb-4 p-3 bg-white/5 rounded-xl w-fit">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-zinc-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3️⃣ Services Preview Section */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our Expertise
            </h2>
            <p className="text-zinc-400 text-lg">
              Comprehensive services to elevate your brand.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                title: "Website Development",
                icon: <Globe />,
                desc: "High-performance websites tailored to your brand.",
                href: "/services/website-development",
              },
              {
                title: "Website Management",
                icon: <CheckCircle />,
                desc: "Updates, security, and maintenance handled for you.",
                href: "/services/web-management-maintenance",
              },
              {
                title: "Full-Stack Software",
                icon: <Code />,
                desc: "Custom web applications and internal tools.",
                href: "/services/software-development",
              },
              {
                title: "Digital Marketing & SEO",
                icon: <BarChart />,
                desc: "Drive traffic and convert visitors into customers.",
                href: "/services/digital-marketing",
              },
              {
                title: "Content Creation",
                icon: <PenTool />,
                desc: "Engaging copy and visuals that tell your story.",
                href: "/services/content-video-editing",
              },
              {
                title: "Video Editing",
                icon: <Video />,
                desc: "Professional editing for social media and ads.",
                href: "/services/content-video-editing",
              },
            ].map((service, index) => (
              <Link key={index} href={service.href} passHref>
                <motion.div
                  variants={fadeIn}
                  whileHover={{ scale: 1.02, backgroundColor: "rgb(24 24 27)" }}
                  className="group p-8 rounded-3xl bg-zinc-900 border border-white/10 cursor-pointer transition-all duration-300 h-full"
                >
                  <div className="mb-6 p-4 bg-blue-500/10 text-blue-400 rounded-2xl w-fit group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-zinc-400 mb-6">{service.desc}</p>
                  <div className="flex items-center text-sm font-semibold text-blue-400 group-hover:text-blue-300">
                    Learn More{" "}
                    <motion.span whileHover={{ x: 5 }}>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4️⃣ Portfolio / Showcase */}
      <section
        id="portfolio"
        className="py-24 bg-zinc-900/30 border-y border-white/5 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Selected Work
              </h2>
              <p className="text-zinc-400 text-lg">
                See how we help businesses thrive.
              </p>
            </motion.div>
            <motion.button
              whileHover={{ x: 5 }}
              className="text-white border-b border-white pb-1 hover:text-blue-400 hover:border-blue-400 transition-colors"
            >
              View All Projects
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative aspect-video rounded-3xl overflow-hidden bg-zinc-800 border border-white/10"
              >
                {/* Placeholder for Project Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-700 ease-in-out">
                  <span className="text-zinc-600 font-medium text-xl">
                    Project Demo {item}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }} // This might trigger prematurely if not careful, but group hover handles visibility
                    className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <h3 className="text-2xl font-bold mb-2">
                      E-Commerce Platform
                    </h3>
                    <p className="text-zinc-300 mb-6">
                      Full-stack development & UI Design
                    </p>
                    <button className="px-6 py-2 bg-white text-black rounded-full font-semibold hover:bg-zinc-200">
                      View Case Study
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5️⃣ Reviews / Social Proof */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-16"
          >
            Trusted by Innovative Brands
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Slicvidia transformed our online presence. Their attention to detail is unmatched.",
                author: "Sarah J.",
                role: "CEO, TechStart",
              },
              {
                quote:
                  "Professional, fast, and incredibly talented team. Highly recommended!",
                author: "Mike T.",
                role: "Founder, GrowthLabs",
              },
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-zinc-900/50 border border-white/10 relative"
              >
                <div className="text-4xl text-blue-500 absolute top-6 left-6">
                  &quot;
                </div>
                <p className="text-lg text-zinc-300 mb-6 relative z-10 pt-4">
                  {review.quote}
                </p>
                <div>
                  <div className="font-bold">{review.author}</div>
                  <div className="text-sm text-zinc-500">{review.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6️⃣ CTA Section */}
      <section className="py-32 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-blue-600 to-purple-700 text-center p-12 md:p-24"
        >
          <div className="absolute inset-0 bg-white/5 mix-blend-overlay"></div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Ready to Build Something Great?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Let’s bring your idea to life with a team that cares about your
              success.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-xl hover:bg-blue-50 transition-colors shadow-xl"
            >
              Book a Strategy Call
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
