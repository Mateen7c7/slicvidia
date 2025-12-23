"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, PenTool, Rocket } from "lucide-react";

export default function ProcessSection() {
    const steps = [
        {
            icon: <Search className="w-6 h-6" />,
            title: "Discovery",
            desc: "We start by understanding your goals, audience, and challenges.",
        },
        {
            icon: <Lightbulb className="w-6 h-6" />,
            title: "Strategy",
            desc: "We craft a data-driven plan tailored to your business needs.",
        },
        {
            icon: <PenTool className="w-6 h-6" />,
            title: "Execution",
            desc: "Our team builds, designs, and writes with precision and creativity.",
        },
        {
            icon: <Rocket className="w-6 h-6" />,
            title: "Launch & Grow",
            desc: "We launch your solution and optimize for continuous growth.",
        },
    ];

    return (
        <section className="py-24 px-6 bg-zinc-900/20">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Process</h2>
                    <p className="text-zinc-400 text-lg">
                        A simple, transparent approach to delivering excellence.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative p-6 rounded-2xl bg-white/5 border border-white/10"
                        >
                            <div className="absolute -top-4 left-6 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                {index + 1}
                            </div>
                            <div className="mt-6 mb-4 text-blue-400">{step.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                            <p className="text-zinc-400 text-sm">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
