"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { ExternalLink, Github, Lock } from "lucide-react";

const projects = [
    {
        title: "PhishGuard: ML-Based Phishing Email & URL Detection Tool",
        description: "A machine learning-powered solution designed to safeguard users from phishing attacks by detecting malicious emails and URLs.",
        tech: ["Python", "Scikit-Learn", "TF-IDF", "Pandas", "NumPy", "React.js", "Node.js"],
        links: { github: "https://github.com/shouryakakkar/PhishGuardAI", demo: "#" },
        featured: true,
    },
    {
        title: "WebSecScan: Web Application & Server Security Assessment Tool",
        description: "Automated scanner that identifies common web vulnerabilities (XSS, SQLi) and generates PDF reports.",
        tech: ["Python", "Flask", "Nmap", "Nikto", "OWASP Top 10"],
        links: { github: "https://github.com/shouryakakkar/WebSecScan", demo: "https://websecscan.onrender.com/" },
        featured: false,
    },
    {
        title: "USB Forensics & Endpoint Security Tool",
        description: "A comprehensive tool for USB forensics and endpoint security, designed to safeguard systems from malicious USB devices.",
        tech: ["Python", "Tkinter", "Pynput", "USBGuard", "Forensics", "Endpoint Security"],
        links: { github: "https://github.com/shouryakakkar/USB-Forensics-Tool", demo: "#" },
        featured: false,
    },
];

export function Projects() {
    return (
        <Section id="projects">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="flex flex-col gap-12"
            >
                <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-2">
                            <span className="text-primary">/</span> Featured Projects
                        </h2>
                        <p className="text-gray-400">Selected work from my cybersecurity journey</p>
                    </div>
                    <a href="#" className="text-primary font-mono text-sm hover:underline flex items-center gap-1">
                        View All Projects <ExternalLink className="w-4 h-4" />
                    </a>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass p-6 rounded-xl border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,229,255,0.1)] group flex flex-col"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                    <Lock className="w-6 h-6" />
                                </div>
                                <div className="flex gap-4">
                                    <a href={project.links.github} className="text-gray-400 hover:text-white transition-colors">
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a href={project.links.demo} className="text-gray-400 hover:text-white transition-colors">
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/5"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </Section>
    );
}
