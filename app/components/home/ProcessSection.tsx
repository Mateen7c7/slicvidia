"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, PenTool, Rocket, Code } from "lucide-react";

export default function ProcessSection() {
    const steps = [
        {
            icon: <Search className="w-6 h-6" />,
            title: "Discovery",
            desc: "We research your business, audience, and competitors to define clear goals.",
        },
        {
            icon: <Lightbulb className="w-6 h-6" />,
            title: "Planning",
            desc: "We create a roadmap, wireframes, and strategy to ensure success.",
        },
        {
            icon: <PenTool className="w-6 h-6" />,
            title: "Development",
            desc: "Our experts build your solution using modern, scalable technologies.",
        },
        {
            icon: <Code className="w-6 h-6" />, // Using Code icon for Testing as a proxy for technical validation
            title: "Testing",
            desc: "Rigorous testing to ensure performance, security, and a bug-free experience.",
        },
        {
            icon: <Rocket className="w-6 h-6" />,
            title: "Launch & Support",
            desc: "We deploy your project and provide ongoing support to help you grow.",
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
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
