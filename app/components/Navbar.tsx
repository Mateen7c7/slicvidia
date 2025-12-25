"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0D1117]/80 backdrop-blur-md border-b border-[#2A3240]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold tracking-tighter bg-linear-to-r from-[#3B82F6] to-[#7C3AED] bg-clip-text text-transparent cursor-pointer"
          >
            Slicvidia
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#A3B3C9]">
          {[
            { name: "Services", href: "/services" },
            { name: "Portfolio", href: "/#portfolio" },
            { name: "About", href: "/about" },
            { name: "Privacy", href: "/privacy" },
            { name: "Refund", href: "/refund" },
            { name: "Terms", href: "/terms" },
          ].map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="hover:text-white transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3B82F6] transition-all group-hover:w-full" />
            </motion.a>
          ))}
          <Link href="/contact">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-linear-to-r from-[#3B82F6] to-[#7C3AED] text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg hover:shadow-blue-500/25 relative overflow-hidden group"
            >
              <span className="relative z-10">Get a Quote</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </motion.button>
          </Link>
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
          className="md:hidden bg-[#0D1117] border-b border-[#2A3240]"
        >
          <div className="flex flex-col p-6 gap-4 text-[#A3B3C9]">
            <Link
              href="/services"
              className="hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/#portfolio"
              className="hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/privacy"
              className="hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Privacy
            </Link>
            <Link
              href="/refund"
              className="hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Refund
            </Link>
            <Link
              href="/terms"
              className="hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Terms
            </Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <button className="bg-linear-to-r from-[#3B82F6] to-[#7C3AED] text-white px-5 py-3 rounded-full font-bold w-full shadow-lg">
                Get a Quote
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
