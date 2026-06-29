"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

const socials = [
    { href: "mailto:shouryakakkar2006@gmail.com", icon: Mail, label: "Email", handle: "shouryakakkar2006@gmail.com" },
    { href: "https://www.linkedin.com/in/shouryakakkar/", icon: Linkedin, label: "LinkedIn", handle: "/in/shouryakakkar" },
    { href: "https://github.com/shouryakakkar", icon: Github, label: "GitHub", handle: "/shouryakakkar" },
];

export function Contact() {
    return (
        <Section id="contact">
            <div className="max-w-4xl mx-auto">
                <p className="section-label mb-6">05 — Contact</p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    {/* Big CTA heading */}
                    <h2 className="font-[family-name:var(--font-display)] italic text-5xl sm:text-6xl md:text-7xl text-white leading-tight mb-16">
                        Let's work<br />
                        <span
                            style={{
                                background: "linear-gradient(135deg, #f0f0f4 0%, #787890 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            together.
                        </span>
                    </h2>

                    {/* Divider */}
                    <div className="w-full h-px bg-white/8 mb-14" />

                    {/* Social links */}
                    <div className="grid sm:grid-cols-3 gap-0 border border-white/6 rounded-xl overflow-hidden">
                        {socials.map(({ href, icon: Icon, label, handle }) => (
                            <a
                                key={label}
                                href={href}
                                target={href.startsWith("mailto") ? undefined : "_blank"}
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between p-6 border-b sm:border-b-0 sm:border-r border-white/6 last:border-0 hover:bg-white/[0.025] transition-colors duration-300"
                            >
                                <div className="flex items-center gap-4">
                                    <Icon className="w-4 h-4 text-silver-500 group-hover:text-white transition-colors" />
                                    <div>
                                        <p className="text-xs font-mono tracking-[0.15em] uppercase text-silver-400 mb-0.5">{label}</p>
                                        <p className="text-sm font-mono text-silver-300 group-hover:text-white transition-colors truncate max-w-[160px]">{handle}</p>
                                    </div>
                                </div>
                                <ArrowUpRight className="w-3.5 h-3.5 text-silver-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                            </a>
                        ))}
                    </div>

                    {/* Availability note */}
                    <p className="mt-8 text-xs font-mono tracking-[0.15em] uppercase text-silver-300 text-center">
                        Available for internships, freelance &amp; full-time positions
                    </p>
                </motion.div>
            </div>
        </Section>
    );
}
