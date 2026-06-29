"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function Hero() {
    const [text, setText] = useState("");
    const mouseRef = useRef({ x: 0, y: 0 });
    const heroRef = useRef<HTMLDivElement>(null);
    const fullText = "Securing the digital frontier — one system at a time.";

    /* Typewriter */
    useEffect(() => {
        let i = 0;
        const id = setInterval(() => {
            setText(fullText.slice(0, i + 1));
            i++;
            if (i >= fullText.length) clearInterval(id);
        }, 45);
        return () => clearInterval(id);
    }, []);

    /* Parallax glow on mouse move */
    useEffect(() => {
        const hero = heroRef.current;
        if (!hero) return;
        const move = (e: MouseEvent) => {
            const rect = hero.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width - 0.5) * 60;
            const y = ((e.clientY - rect.top) / rect.height - 0.5) * 60;
            mouseRef.current = { x, y };
            const glow = hero.querySelector<HTMLElement>(".hero-glow");
            if (glow) {
                glow.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
            }
        };
        hero.addEventListener("mousemove", move);
        return () => hero.removeEventListener("mousemove", move);
    }, []);

    return (
        <div
            ref={heroRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Ambient glow that tracks mouse */}
            <div
                className="hero-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none transition-transform duration-200 ease-out"
                style={{
                    background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
                }}
            />

            {/* Thin horizontal rule accent lines */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-24 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent pointer-events-none" />
            <div className="absolute left-0 right-0 top-1/2 translate-y-24  h-px bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
                {/* Over-label */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="section-label mb-8"
                >
                    Cybersecurity Engineer &amp; Ethical Hacker
                </motion.p>

                {/* Main heading — italic serif */}
                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                    className="font-[family-name:var(--font-display)] italic text-6xl sm:text-8xl md:text-9xl leading-none tracking-tight text-white mb-8"
                >
                    Shourya
                    <br />
                    <span
                        style={{
                            background: "linear-gradient(135deg, #f0f0f4 0%, #787890 60%, #f0f0f4 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        Kakkar
                    </span>
                </motion.h1>

                {/* Typewriter subtitle */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="h-7 mb-14"
                >
                    <p className="font-mono italic text-base text-silver-300 tracking-wide">
                        {text}
                        <span className="animate-[blink_1s_step-end_infinite] ml-0.5">_</span>
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                    className="flex flex-wrap justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="group relative px-8 py-3 overflow-hidden border border-white/20 text-white text-xs font-mono tracking-[0.2em] uppercase transition-all duration-300 hover:border-white/60"
                    >
                        <span className="relative z-10 text-sm">View Work</span>
                        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 text-sm font-mono tracking-[0.15em] uppercase text-silver-400 hover:text-white transition-colors duration-300"
                    >
                        Contact
                    </a>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="relative mt-20 flex flex-col items-center gap-2"
                >
                    <span className="text-[11px] font-mono tracking-[0.25em] text-silver-500 uppercase">Scroll</span>
                    <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
                </motion.div>
            </div>
        </div>
    );
}
