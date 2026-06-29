"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "PromptArmor",
        subtitle: "AI Security Reverse Proxy & Analytics Platform",
        description:
            "Architected multi-provider LLM security reverse proxy intercepting traffic across 4 AI providers with a 4-layer detection pipeline neutralizing jailbreaks and prompt injection attacks.",
        tech: ["Python", "FastAPI", "DistilBERT", "PostgreSQL", "Docker", "Streamlit"],
        links: { github: "https://github.com/shouryakakkar/PromptArmor", demo: "https://promptarmor.up.railway.app/" },
        number: "01",
    },
    {
        title: "PhishGuard",
        subtitle: "ML-Based Phishing Email & URL Detection Tool",
        description:
            "A machine learning-powered solution designed to safeguard users from phishing attacks by detecting malicious emails and URLs.",
        tech: ["Python", "Scikit-Learn", "TF-IDF", "Pandas", "NumPy", "React.js", "Node.js"],
        links: { github: "https://github.com/shouryakakkar/PhishGuardAI", demo: "#" },
        number: "02",
    },
    {
        title: "AD Pentest Lab",
        subtitle: "Active Directory Penetration Testing Lab",
        description:
            "Simulated enterprise AD attack chain via Kerberoasting, mapped 1,747 AD relationships via BloodHound to identify Domain Admin attack paths, and documented Credential Guard defensive controls.",
        tech: ["Windows Server 2022", "Rubeus", "BloodHound", "Mimikatz", "Kali Linux"],
        links: { github: "https://github.com/shouryakakkar/AD-Attack-Lab", demo: "https://medium.com/@shourya.kakkar/building-an-active-directory-attack-lab-kerberoasting-bloodhound-credential-guard-a-hands-on-e7c5db1e7cdd" },
        number: "03",
    },
    {
        title: "C2 Lab",
        subtitle: "Red Team Command & Control Simulation",
        description:
            "Deployed Sliver C2, generated obfuscated Windows beacons, established persistent HTTP C2 sessions, and mapped MITRE ATT&CK TTPs while documenting EDR detection vectors.",
        tech: ["Sliver C2", "Kali Linux", "Windows 11", "Python"],
        links: { github: "https://github.com/shouryakakkar/C2-Lab-Sliver", demo: "#" },
        number: "04",
    },
    {
        title: "ChainStrike",
        subtitle: "Automated Offensive Recon & Reporting Tool",
        description:
            "Built a Python CLI tool chaining Nmap, Gobuster, and Nikto. Automatically parses outputs and generates HTML pentest reports with CVE mappings and MITRE ATT&CK TTP tags.",
        tech: ["Python", "Nmap", "Gobuster", "Nikto", "MITRE ATT&CK"],
        links: { github: "https://github.com/shouryakakkar/ChainStrike", demo: "#" },
        number: "05",
    },
    {
        title: "WebSecScan",
        subtitle: "Web Application & Server Security Assessment Tool",
        description:
            "Automated scanner that identifies common web vulnerabilities (XSS, SQLi) and generates professional PDF reports.",
        tech: ["Python", "Flask", "Nmap", "Nikto", "OWASP Top 10"],
        links: { github: "https://github.com/shouryakakkar/WebSecScan", demo: "https://websecscan.onrender.com/" },
        number: "06",
    },
];

export function Projects() {
    return (
        <Section id="projects">
            <div className="mb-16">
                <p className="section-label mb-4">03 — Projects</p>
                <div className="flex flex-col md:flex-row justify-between items-end gap-4">
                    <h2 className="font-[family-name:var(--font-display)] italic text-4xl md:text-5xl text-white">
                        Featured Projects
                    </h2>
                    <a
                        href="https://github.com/shouryakakkar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-mono tracking-[0.15em] uppercase text-silver-400 hover:text-white transition-colors flex items-center gap-1.5"
                    >
                        All Work <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
                {projects.map((project, idx) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.07 }}
                        className="group relative bg-black p-8 flex flex-col hover:bg-white/[0.02] transition-colors duration-300"
                    >
                        {/* Number watermark */}
                        <span className="absolute top-4 right-6 font-[family-name:var(--font-display)] italic text-7xl text-white/4 select-none leading-none">
                            {project.number}
                        </span>

                        {/* Links */}
                        <div className="flex gap-3 mb-8">
                            <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-silver-500 hover:text-white transition-colors"
                                aria-label="GitHub"
                            >
                                <Github className="w-4 h-4" />
                            </a>
                            {project.links.demo !== "#" && (
                                <a
                                    href={project.links.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-silver-500 hover:text-white transition-colors"
                                    aria-label="Live Demo"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            )}
                        </div>

                        {/* Title */}
                        <h3 className="font-[family-name:var(--font-display)] italic text-2xl text-white mb-1 group-hover:text-silver-100 transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-sm font-mono text-silver-400 mb-5">{project.subtitle}</p>

                        {/* Description */}
                        <p className="text-base text-silver-400 leading-relaxed flex-grow mb-8">
                            {project.description}
                        </p>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-1.5 mt-auto">
                            {project.tech.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-xs font-mono px-2 py-0.5 border border-white/8 text-silver-400 tracking-wider"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Bottom reveal line */}
                        <div className="absolute bottom-0 left-0 w-0 h-px bg-white/25 group-hover:w-full transition-all duration-500" />
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
