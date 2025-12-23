"use client";

import { motion, Variants } from "framer-motion";
import { Globe, CheckCircle, Code, BarChart, PenTool, Video, ArrowRight } from "lucide-react";
import Link from "next/link";

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

export default function ServicesPreview() {
    return (
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
                            benefits: ["Fast Load Times", "SEO Optimized", "Mobile Responsive"],
                            whoFor: "Small Businesses & Startups",
                            techStack: "Next.js, React, Tailwind",
                            href: "/services/website-development",
                        },
                        {
                            title: "Website Management",
                            icon: <CheckCircle />,
                            desc: "Updates, security, and maintenance handled for you.",
                            benefits: ["Security Patches", "Content Updates", "24/7 Monitoring"],
                            whoFor: "Busy Business Owners",
                            techStack: "Vercel, AWS, CMS",
                            href: "/services/web-management-maintenance",
                        },
                        {
                            title: "Full-Stack Software",
                            icon: <Code />,
                            desc: "Custom web applications and internal tools.",
                            benefits: ["Scalable Architecture", "Custom Features", "Secure API"],
                            whoFor: "Enterprise & SaaS",
                            techStack: "Node.js, PostgreSQL, Docker",
                            href: "/services/software-development",
                        },
                        {
                            title: "Digital Marketing & SEO",
                            icon: <BarChart />,
                            desc: "Drive traffic and convert visitors into customers.",
                            benefits: ["Higher Rankings", "Targeted Ads", "Conversion Rate Optimization"],
                            whoFor: "Growth-Focused Brands",
                            techStack: "Google Ads, Analytics, SEMrush",
                            href: "/services/digital-marketing",
                        },
                        {
                            title: "Content Creation",
                            icon: <PenTool />,
                            desc: "Engaging copy and visuals that tell your story.",
                            benefits: ["Brand Voice", "Blog Posts", "Social Media Assets"],
                            whoFor: "Thought Leaders & Brands",
                            techStack: "Adobe Suite, Figma, Copywriting",
                            href: "/services/content-video-editing",
                        },
                        {
                            title: "Video Editing",
                            icon: <Video />,
                            desc: "Professional editing for social media and ads.",
                            benefits: ["Reels & TikToks", "Promotional Videos", "Color Grading"],
                            whoFor: "Content Creators & Agencies",
                            techStack: "Premiere Pro, After Effects, DaVinci",
                            href: "/services/content-video-editing",
                        },
                    ].map((service, index) => (
                        <Link key={index} href={service.href} passHref>
                            <motion.div
                                variants={fadeIn}
                                whileHover={{ scale: 1.02, backgroundColor: "rgb(24 24 27)" }}
                                className="group p-8 rounded-3xl bg-zinc-900 border border-white/10 cursor-pointer transition-all duration-300 h-full flex flex-col"
                            >
                                <div className="mb-6 p-4 bg-blue-500/10 text-blue-400 rounded-2xl w-fit group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                                <p className="text-zinc-400 mb-6 flex-grow">{service.desc}</p>

                                <div className="mb-6 space-y-3">
                                    <div className="text-sm">
                                        <span className="text-blue-400 font-semibold">Best for:</span> <span className="text-zinc-300">{service.whoFor}</span>
                                    </div>
                                    <div className="text-sm">
                                        <span className="text-blue-400 font-semibold">Tech:</span> <span className="text-zinc-500 font-mono text-xs ml-1 bg-zinc-800 px-2 py-1 rounded">{service.techStack}</span>
                                    </div>
                                    <ul className="text-sm text-zinc-400 list-disc list-inside">
                                        {service.benefits.map((benefit, i) => (
                                            <li key={i}>{benefit}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex items-center text-sm font-semibold text-blue-400 group-hover:text-blue-300 mt-auto pt-4 border-t border-white/5">
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
    );
}
