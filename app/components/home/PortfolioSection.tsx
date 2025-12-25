"use client";

import { motion } from "framer-motion";
import { projects } from "../../lib/projects-data"; // Adjusted import path

export default function PortfolioSection() {
    return (
        <section
            id="portfolio"
            className="py-24 bg-zinc-900/30 border-y border-white/5 px-6"
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            Selected Work
                        </h2>
                        <p className="text-zinc-400 text-lg">
                            See how we help businesses thrive.
                        </p>
                    </motion.div>
                    <motion.button
                        whileHover={{ x: 5 }}
                        className="text-white border-b border-white pb-1 hover:text-blue-400 hover:border-blue-400 transition-colors"
                    >
                        View All Projects
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="group relative min-h-[500px] rounded-3xl overflow-hidden bg-zinc-800 border border-white/10"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-700 ease-in-out">
                                <span className="text-zinc-600 font-medium text-xl">
                                    {project.projectName} image
                                </span>
                            </div>
                            <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 text-left backdrop-blur-md">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 space-y-4"
                                >
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1">
                                            {project.projectName}
                                        </h3>
                                        <p className="text-blue-400 font-medium">{project.client}</p>
                                    </div>

                                    <div className="space-y-2 text-sm text-zinc-300">
                                        <p><strong className="text-white">Problem:</strong> {project.problem}</p>
                                        <p><strong className="text-white">Solution:</strong> {project.solution}</p>
                                        <p><strong className="text-white">Result:</strong> <span className="text-green-400">{project.results}</span></p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {project.tools.map((tool, index) => (
                                            <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-xs text-zinc-300 border border-white/5">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>

                                    <button className="w-full mt-4 px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-zinc-200 transition-colors">
                                        View Case Study
                                    </button>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
