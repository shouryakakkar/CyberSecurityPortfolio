"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        role: "Cyber Security Analyst Intern",
        company: "Cryptus Cyber Security Pvt. Ltd.",
        period: "Feb 2026 - Present",
        description: "Conducted WAPT and API pentesting, identifying 20+ critical vulnerabilities (SQLi, XSS, IDOR/BOLA). Executed network assessments and authored CERT-In compliance-ready pentest reports. Developed steganography-based Android malware for R&D.",
    }
];

export function Experience() {
    return (
        <Section id="experience">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                <span className="text-primary">/</span> Professional Timeline
            </h2>

            <div className="max-w-3xl mx-auto px-4">
                {experiences.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.2 }}
                        className="relative border-l border-white/10 pl-8 pb-12 last:pb-0"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-2 border-primary shadow-[0_0_10px_var(--color-primary)]" />

                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                            <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                            <span className="text-sm font-mono text-primary/80 bg-primary/10 px-3 py-1 rounded">
                                {exp.period}
                            </span>
                        </div>

                        <div className="text-lg text-gray-300 font-medium mb-2 flex items-center gap-2">
                            <Briefcase className="w-4 h-4 text-gray-500" />
                            {exp.company}
                        </div>

                        <p className="text-gray-400 leading-relaxed">
                            {exp.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
