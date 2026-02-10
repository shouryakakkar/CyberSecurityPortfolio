"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";

export function About() {
    return (
        <Section id="about">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        <span className="text-primary">/</span> About Me
                    </h2>
                    <div className="space-y-4 text-gray-400 leading-relaxed">
                        <p>
                            I am a passionate <span className="text-white">Penetration Tester</span> and <span className="text-white">Ethical Hacker</span> dedicated to securing the digital frontier.
                            With a strong foundation in network security, penetration testing, and secure coding practices, I build robust systems that stand up to modern threats.
                        </p>
                        <p>
                            My approach combines offensive security knowledge with defensive strategies to create comprehensive protection plans. I treat every project as a critical mission, ensuring integrity, availability, and confidentiality.
                        </p>
                        <p>
                            I am currently open to opportunities in Red Teaming, Vulnerability Assessment, and SOC Analysis.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative"
                >
                    <div className="glass p-8 rounded-2xl border border-white/5 relative z-10">
                        <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-4">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                                SK
                            </div>
                            <div>
                                <h3 className="text-white font-bold">Shourya Kakkar</h3>
                                <p className="text-sm text-green-400 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                    Available for Work
                                </p>
                            </div>
                        </div>

                        <div className="space-y-3 font-mono text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-500">Location</span>
                                <span className="text-gray-300">Delhi, India</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Education</span>
                                <span className="text-gray-300">Bachelor of Technology in Computer Science Engineering</span>

                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Specialization</span>
                                <span className="text-gray-300">Cyber Security</span>

                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Focus</span>
                                <span className="text-gray-300">AppSec & NetSec, Offensive & Defensive Security</span>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-[50px] -z-10" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/20 rounded-full blur-[50px] -z-10" />
                </motion.div>
            </div>
        </Section>
    );
}
