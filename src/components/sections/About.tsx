"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";

const stats = [
    { label: "Focus Areas", value: "3+" },
    { label: "Tools", value: "15+" },
    { label: "Status", value: "Open" },
];

export function About() {
    return (
        <Section id="about">
            <div className="grid md:grid-cols-2 gap-20 items-start">
                {/* Left — Text */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <p className="section-label mb-6">01 — About</p>
                    <h2 className="font-[family-name:var(--font-display)] italic text-4xl md:text-5xl text-white leading-snug mb-10">
                        Bridging the gap between{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #f0f0f4 0%, #787890 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            offence &amp; defence
                        </span>
                    </h2>

                    <div className="space-y-5 text-silver-300 leading-relaxed text-base">
                        <p>
                            I am a passionate{" "}
                            <span className="text-white font-medium">Penetration Tester</span> and{" "}
                            <span className="text-white font-medium">Ethical Hacker</span> dedicated to securing
                            the digital frontier. With a strong foundation in network security, penetration
                            testing, and secure coding, I build robust systems that stand up to modern threats.
                        </p>
                        <p>
                            My approach combines offensive security knowledge with defensive strategies — treating
                            every project as a critical mission ensuring integrity, availability, and
                            confidentiality.
                        </p>
                        <p>
                            Currently open to opportunities in{" "}
                            <span className="text-white">Red Teaming</span>,{" "}
                            <span className="text-white">Vulnerability Assessment</span>, and{" "}
                            <span className="text-white">SOC Analysis</span>.
                        </p>
                    </div>
                </motion.div>

                {/* Right — Card */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="relative"
                >
                    {/* Identity Card */}
                    <div className="glass-strong rounded-2xl p-8 relative overflow-hidden">
                        {/* Top shimmer line */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                        {/* Avatar row */}
                        <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/6">
                            <div
                                className="w-14 h-14 rounded-full flex items-center justify-center text-white font-[family-name:var(--font-display)] italic text-xl"
                                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                            >
                                SK
                            </div>
                            <div>
                                <h3 className="text-white font-medium">Shourya Kakkar</h3>
                                <p className="text-xs font-mono text-silver-400 flex items-center gap-2 mt-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse inline-block" />
                                    Available for Work
                                </p>
                            </div>
                        </div>

                        {/* Info grid */}
                        <div className="space-y-4 font-mono text-sm">
                            {/* Static rows for location & focus */}
                            {[
                                { k: "Location", v: "Delhi, India" },
                                { k: "Specialisation", v: "Cyber Security" },
                                { k: "Focus", v: "AppSec · NetSec · Offensive" },
                            ].map(({ k, v }) => (
                                <div key={k} className="flex justify-between items-baseline">
                                    <span className="text-silver-500">{k}</span>
                                    <span className="text-silver-200 text-right max-w-[55%]">{v}</span>
                                </div>
                            ))}
                            {/* Education — two-line block */}
                            <div className="flex justify-between items-start pt-1 border-t border-white/5">
                                <span className="text-silver-500 shrink-0 mr-4">Education</span>
                                <div className="text-right">
                                    <p className="text-silver-200">Bennett University</p>
                                    <p className="text-silver-400 text-xs mt-0.5">B.Tech CSE (Cyber Security)</p>
                                    <p className="text-silver-400 text-xs mt-0.5">Aug 2023 — May 2027</p>
                                </div>
                            </div>
                        </div>

                        {/* Stats row */}
                        <div className="mt-8 pt-6 border-t border-white/6 grid grid-cols-3 gap-4">
                            {stats.map(({ label, value }) => (
                                <div key={label} className="text-center">
                                    <p className="font-[family-name:var(--font-display)] italic text-2xl text-white">{value}</p>
                                    <p className="text-[11px] font-mono tracking-wider text-silver-500 uppercase mt-0.5">{label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Bottom shimmer line */}
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    </div>

                    {/* Decorative blurred orbs */}
                    <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full opacity-20 blur-3xl pointer-events-none"
                        style={{ background: "radial-gradient(circle, #c8c8d4, transparent)" }} />
                </motion.div>
            </div>
        </Section>
    );
}
