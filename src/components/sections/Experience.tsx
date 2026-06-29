"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";

const experiences = [
    {
        role: "Security Analyst Intern",
        company: "Cryptus Cyber Security Pvt. Ltd.",
        period: "Feb 2026 — Present",
        description: "Conducted WAPT and API pentesting, identifying 20+ critical vulnerabilities (SQLi, XSS, IDOR/BOLA). Executed network assessments and authored CERT-In compliance-ready pentest reports.",
    },
    {
        role: "Cyber Security Intern",
        company: "ShadowFox",
        period: "Aug 2025 — Sep 2025",
        description: "Assisted in vulnerability assessments, network reconnaissance & penetration testing of web applications using Nmap, Nikto, Wireshark and OWASP Top 10.",
    },
    {
        role: "CTF Player",
        company: "TryHackMe",
        period: "2025 — Present",
        description: "Competed in Capture The Flag competitions, gaining hands-on experience in ethical hacking and penetration testing.",
    }
];

export function Experience() {
    return (
        <Section id="experience">
            <div className="mb-16">
                <p className="section-label mb-4">04 — Experience</p>
                <h2 className="font-[family-name:var(--font-display)] italic text-4xl md:text-5xl text-white">
                    Professional Journey
                </h2>
            </div>

            <div className="max-w-3xl">
                {experiences.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.15, duration: 0.6 }}
                        className="relative pl-12 pb-14 last:pb-0 group"
                    >
                        {/* Vertical line */}
                        <div className="absolute left-0 top-0 bottom-0 w-px bg-white/8" />

                        {/* Timeline dot */}
                        <div className="absolute left-[-4px] top-1 w-2 h-2 rounded-full border border-white/40 bg-black group-hover:border-white/80 group-hover:bg-white/10 transition-all duration-300" />

                        {/* Period badge */}
                        <span className="inline-block font-mono text-xs tracking-[0.2em] uppercase text-silver-500 border border-white/8 px-2 py-0.5 mb-4">
                            {exp.period}
                        </span>

                        {/* Role */}
                        <h3 className="font-[family-name:var(--font-display)] italic text-2xl text-white mb-1">
                            {exp.role}
                        </h3>

                        {/* Company */}
                        <p className="text-sm font-mono text-silver-400 mb-4">{exp.company}</p>

                        {/* Description */}
                        {exp.description && (
                            <p className="text-base text-silver-300 leading-relaxed max-w-xl">
                                {exp.description}
                            </p>
                        )}
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
