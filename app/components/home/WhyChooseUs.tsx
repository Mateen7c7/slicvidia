"use client";

import { motion, Variants } from "framer-motion";
import { Cpu, Zap, BarChart, MessageSquare } from "lucide-react";

// Shared variants (ideally these should be in a utility file, but keeping self-contained for now as per refactor strategy)
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

export default function WhyChooseUs() {
    return (
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
                            icon: <Zap className="w-8 h-8 text-yellow-400" />,
                            title: "Performance-First",
                            desc: "Speed matters. We build lightweight, high-speed solutions that rank better and convert more.",
                        },
                        {
                            icon: <Cpu className="w-8 h-8 text-blue-400" />,
                            title: "Developer-Led Strategy",
                            desc: "Direct access to engineers. No middlemen, just technical experts solving your problems.",
                        },
                        {
                            icon: <MessageSquare className="w-8 h-8 text-purple-400" />,
                            title: "Transparent & Open",
                            desc: "No jargon or hidden fees. You get clear updates and honest advice at every step.",
                        },
                        {
                            icon: <BarChart className="w-8 h-8 text-green-400" />,
                            title: "Long-Term Growth",
                            desc: "We don't just launch and leave. We partner with you to scale and maintain your success.",
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
    );
}
