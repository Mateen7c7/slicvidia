"use client";

import { motion } from "framer-motion";

export default function ReviewsSection() {
    return (
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
    );
}
