"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
    {
        question: "How long does a typical project take?",
        answer:
            "Timelines vary based on complexity. A standard website takes 2-4 weeks, while custom software or extensive marketing campaigns may take 4-8 weeks or more. We provide a detailed timeline during the discovery phase.",
    },
    {
        question: "Do you offer ongoing support?",
        answer:
            "Yes! We offer maintenance packages to ensure your website or application stays secure, up-to-date, and optimized. We're here for the long haul.",
    },
    {
        question: "What industries do you work with?",
        answer:
            "We work with a diverse range of industries including Tech Startups, E-commerce, Professional Services, Real Estate, and more. Our adaptable approach fits various business needs.",
    },
    {
        question: "Can you help with rebranding?",
        answer:
            "Absolutely. Whether you need a logo refresh or a complete brand overhaul, our design and content teams can help redefine your identity.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 px-6">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-zinc-400 text-lg">
                        Everything you need to know about working with us.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-white/10 rounded-2xl bg-zinc-900/30 overflow-hidden"
                        >
                            <button
                                onClick={() =>
                                    setOpenIndex(openIndex === index ? null : index)
                                }
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className="text-lg font-medium pr-8">{faq.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="flex-shrink-0 w-6 h-6 text-blue-400" />
                                ) : (
                                    <ChevronDown className="flex-shrink-0 w-6 h-6 text-zinc-500" />
                                )}
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-6 text-zinc-400 leading-relaxed">
                                    {faq.answer}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
