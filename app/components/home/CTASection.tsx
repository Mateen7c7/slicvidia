"use client";

import { motion } from "framer-motion";

export default function CTASection() {
    return (
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
    );
}
