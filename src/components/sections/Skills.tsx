"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Shield, Globe, Cpu, Code } from "lucide-react";

const skillCategories = [
    {
        title: "Offensive Security",
        icon: Shield,
        skills: ["VAPT", "WAPT", "API Security", "Active Directory", "LLM Security", "C2 Operations"],
        color: "text-primary",
    },
    {
        title: "Tools & Platforms",
        icon: Globe,
        skills: ["Burp Suite Pro", "Nmap", "Metasploit", "BloodHound", "Sliver C2", "Wireshark"],
        color: "text-purple-400",
    },
    {
        title: "AppSec & Docs",
        icon: Cpu,
        skills: ["Audit Reporting", "CVE Mapping", "Remediation Guidance", "CERT-In Compliance", "MITRE ATT&CK"],
        color: "text-green-400",
    },
    {
        title: "Programming",
        icon: Code,
        skills: ["Python", "Bash/Shell", "JavaScript", "SQL"],
        color: "text-blue-400",
    },
];

export function Skills() {
    return (
        <Section id="skills">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl font-bold mb-12 text-center"
            >
                <span className="text-primary">/</span> Technical Arsenal
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="glass p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,229,255,0.1)] group"
                    >
                        <div className={`mb-4 ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                            <category.icon className="w-10 h-10" />
                        </div>

                        <h3 className="text-xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                            {category.title}
                        </h3>

                        <ul className="space-y-2">
                            {category.skills.map((skill) => (
                                <li key={skill} className="flex items-center gap-2 text-sm text-gray-400">
                                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-primary transition-colors" />
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
