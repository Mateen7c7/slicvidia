"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  BarChart,
  PenTool,
  Video,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Globe,
  Cpu,
  Zap,
  MessageSquare,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Slicvidia
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#portfolio" className="hover:text-white transition-colors">
              Portfolio
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              Why Us
            </a>
            <button className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-zinc-200 transition-colors">
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden bg-black border-b border-white/10"
          >
            <div className="flex flex-col p-6 gap-4 text-zinc-400">
              <a
                href="#services"
                className="hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </a>
              <a
                href="#about"
                className="hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Why Us
              </a>
              <button className="bg-white text-black px-5 py-2 rounded-full font-semibold w-full">
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* 1️⃣ Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] -z-10 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] -z-10" />

        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Smart Digital Solutions to <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Build, Manage & Grow
              </span>{" "}
              <br className="hidden md:block" />
              Your Online Presence.
            </h1>

            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto">
              Web Development | Full-Stack Software | Digital Marketing |
              Content Creation
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-500/25">
                Get a Free Quote
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-semibold text-lg transition-all backdrop-blur-sm flex items-center justify-center gap-2 group">
                Schedule a Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
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
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
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
                variants={fadeInUp}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors"
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our Expertise
            </h2>
            <p className="text-zinc-400 text-lg">
              Comprehensive services to elevate your brand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Website Development",
                icon: <Globe />,
                desc: "High-performance websites tailored to your brand.",
              },
              {
                title: "Website Management",
                icon: <CheckCircle />,
                desc: "Updates, security, and maintenance handled for you.",
              },
              {
                title: "Full-Stack Software",
                icon: <Code />,
                desc: "Custom web applications and internal tools.",
              },
              {
                title: "Digital Marketing & SEO",
                icon: <BarChart />,
                desc: "Drive traffic and convert visitors into customers.",
              },
              {
                title: "Content Creation",
                icon: <PenTool />,
                desc: "Engaging copy and visuals that tell your story.",
              },
              {
                title: "Video Editing",
                icon: <Video />,
                desc: "Professional editing for social media and ads.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-zinc-900 border border-white/10 hover:bg-zinc-800 transition-all hover:-translate-y-1 cursor-pointer"
              >
                <div className="mb-6 p-4 bg-blue-500/10 text-blue-400 rounded-2xl w-fit group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-zinc-400 mb-6">{service.desc}</p>
                <div className="flex items-center text-sm font-semibold text-blue-400 group-hover:text-blue-300">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4️⃣ Portfolio / Showcase */}
      <section
        id="portfolio"
        className="py-24 bg-zinc-900/30 border-y border-white/5 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Selected Work
              </h2>
              <p className="text-zinc-400 text-lg">
                See how we help businesses thrive.
              </p>
            </div>
            <button className="text-white border-b border-white pb-1 hover:text-blue-400 hover:border-blue-400 transition-colors">
              View All Projects
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="group relative aspect-video rounded-3xl overflow-hidden bg-zinc-800 border border-white/10"
              >
                {/* Placeholder for Project Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <span className="text-zinc-600 font-medium">
                    Project Demo {item}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2">
                    E-Commerce Platform
                  </h3>
                  <p className="text-zinc-300 mb-6">
                    Full-stack development & UI Design
                  </p>
                  <button className="px-6 py-2 bg-white text-black rounded-full font-semibold hover:bg-zinc-200">
                    View Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5️⃣ Reviews / Social Proof */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Trusted by Innovative Brands
          </h2>
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
              <div
                key={index}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6️⃣ CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-blue-600 to-purple-700 text-center p-12 md:p-24">
          <div className="absolute inset-0 bg-white/5 mix-blend-overlay"></div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Ready to Build Something Great?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Let’s bring your idea to life with a team that cares about your
              success.
            </p>
            <button className="px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-xl hover:bg-blue-50 transition-colors shadow-xl">
              Book a Strategy Call
            </button>
          </div>
        </div>
      </section>

      {/* 7️⃣ Footer */}
      <footer className="bg-zinc-950 border-t border-white/10 pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Slicvidia
            </div>
            <p className="text-zinc-400">
              Building the future of digital experiences.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Content Creation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Connect</h4>
            <ul className="space-y-3 text-zinc-400">
              <li>hello@slicvidia.com</li>
              <li>+1 (555) 123-4567</li>
              <li className="flex gap-4 mt-4">
                {/* Social Icons */}
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors"
                >
                  𝕏
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors"
                >
                  In
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors"
                >
                  Ig
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-sm">
          <div>© 2024 Slicvidia. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
