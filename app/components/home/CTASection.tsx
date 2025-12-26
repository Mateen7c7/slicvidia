"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-32 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto relative rounded-[3rem] overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-800 to-purple-900 text-center p-12 md:p-24 border border-white/20 shadow-2xl"
      >
        {/* Abstract overlay shapes for texture */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-white/5 radial-gradient pointer-events-none"></div>

        <div className="relative z-10 space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
            Stop Leaving Revenue <br className="hidden md:block" />
            on the Table.
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Your digital presence should be your best salesperson. Get a custom
            roadmap to scale your business—100% free, no obligation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/contact" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-10 py-4 bg-white text-blue-900 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-xl"
              >
                Get Your Free Growth Roadmap
              </motion.button>
            </Link>

            <Link href="#portfolio" className="w-full sm:w-auto">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-10 py-4 bg-transparent border-2 border-white/20 text-white rounded-full font-bold text-lg hover:border-white transition-all backdrop-blur-sm"
              >
                View Our Portfolio
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
