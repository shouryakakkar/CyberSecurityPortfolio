"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export function Contact() {
    return (
        <Section id="contact" className="py-20 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="glass max-w-2xl mx-auto p-12 rounded-2xl border border-white/5 relative overflow-hidden"
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Ready to <span className="text-primary">Secure</span> Your Infrastructure?
                </h2>

                <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                    Currently available for internship opportunities and freelance projects.
                    Let's discuss how I can help protect your digital assets.
                </p>

                <div className="flex justify-center gap-6">
                    <a
                        href="mailto:shouryakakkar2006@gmail.com"
                        className="p-4 rounded-full bg-white/5 hover:bg-primary/20 text-white hover:text-primary transition-all hover:scale-110 border border-white/5"
                        aria-label="Email"
                    >
                        <Mail className="w-6 h-6" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/shouryakakkar/"
                        className="p-4 rounded-full bg-white/5 hover:bg-primary/20 text-white hover:text-primary transition-all hover:scale-110 border border-white/5"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                        href="https://github.com/shouryakakkar"
                        className="p-4 rounded-full bg-white/5 hover:bg-primary/20 text-white hover:text-primary transition-all hover:scale-110 border border-white/5"
                        aria-label="GitHub"
                    >
                        <Github className="w-6 h-6" />
                    </a>
                </div>
            </motion.div>
        </Section>
    );
}
