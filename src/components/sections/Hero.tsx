"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { useEffect, useState } from "react";

export function Hero() {
    const [text, setText] = useState("");
    const fullText = "Leveraging AI & Automation to make systems more secure.";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, i + 1));
            i++;
            if (i > fullText.length) clearInterval(interval);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />

            <Section className="flex flex-col items-center text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        <span className="text-white">Hello, I'm </span>
                        <span className="text-primary glow-text">Shourya</span>
                    </h1>
                </motion.div>

                <div className="h-8 md:h-12 mb-8">
                    <p className="text-xl md:text-2xl text-gray-400 font-mono">
                        {text}
                        <span className="animate-[blink_1s_step-end_infinite] ml-1">|</span>
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="flex gap-4"
                >
                    <a
                        href="#projects"
                        className="px-8 py-3 bg-primary/10 border border-primary/50 text-primary font-mono rounded hover:bg-primary/20 transition-all hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]"
                    >
                        View Work
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 border border-gray-700 text-gray-300 font-mono rounded hover:bg-white/5 transition-all"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </Section>
        </div>
    );
}
