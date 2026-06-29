"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Shield, Globe, Cpu, Code } from "lucide-react";

const skillCategories = [
    {
        title: "Tools & Platforms",
        icon: Globe,
        skills: ["Burp Suite Pro", "Nmap", "Nessus", "Metasploit", "BloodHound", "Sliver C2", "Wireshark"],
        number: "01",
    },
    {
        title: "Offensive Security",
        icon: Shield,
        skills: ["VAPT", "WAPT", "API Security", "Active Directory", "LLM Security", "C2 Operations"],
        number: "02",
    },
    {
        title: "AppSec & Docs",
        icon: Cpu,
        skills: ["Audit Reporting", "CVE Mapping", "Remediation Guidance", "CERT-In Compliance", "MITRE ATT&CK"],
        number: "03",
    },
    {
        title: "Programming",
        icon: Code,
        skills: ["Python", "Bash/Shell", "JavaScript/TypeScript", "SQL"],
        number: "04",
    },
];

export function Skills() {
    return (
        <Section id="skills">
            <div className="mb-16">
                <p className="section-label mb-4">02 — Skills</p>
                <h2 className="font-[family-name:var(--font-display)] italic text-4xl md:text-5xl text-white">
                    Technical Arsenal
                </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="group relative bg-black p-8 hover:bg-white/[0.02] transition-colors duration-300"
                    >
                        {/* Number watermark */}
                        <span className="absolute top-4 right-6 font-[family-name:var(--font-display)] italic text-7xl text-white/4 select-none leading-none">
                            {category.number}
                        </span>

                        {/* Icon */}
                        <div className="mb-12">
                            <category.icon className="w-6 h-6 text-silver-500" />
                        </div>

                        {/* Title */}
                        <h3 className="text-white font-medium text-lg mb-5">
                            {category.title}
                        </h3>

                        {/* Skills list */}
                        <ul className="space-y-2.5">
                            {category.skills.map((skill) => (
                                <li key={skill} className="flex items-center gap-2.5 text-sm font-mono text-silver-300 group-hover:text-silver-300 transition-colors">
                                    <span className="w-1 h-1 rounded-full bg-silver-600 group-hover:bg-white/40 transition-colors flex-shrink-0" />
                                    {skill}
                                </li>
                            ))}
                        </ul>

                        {/* Bottom reveal line */}
                        <div className="absolute bottom-0 left-0 w-0 h-px bg-white/25 group-hover:w-full transition-all duration-500" />
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
