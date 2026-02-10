"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Terminal as TerminalIcon, Minimize, Maximize, X } from "lucide-react";

interface Line {
    text: string;
    type: "command" | "output";
    id: number;
}

const INITIAL_LINES: Line[] = [
    { text: "whoami", type: "command", id: 1 },
    { text: "shourya_kakkar", type: "output", id: 2 },
    { text: "current_status", type: "command", id: 3 },
    { text: "analyzing_threats...", type: "output", id: 4 },
    { text: "skills --list", type: "command", id: 5 },
    { text: "> Penetration Testing", type: "output", id: 6 },
    { text: "> Application Security", type: "output", id: 7 },

    { text: "> Network Security", type: "output", id: 7 },
    { text: "> Threat Intelligence", type: "output", id: 8 },
];

export function Terminal() {
    const [visibleLineCount, setVisibleLineCount] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleLineCount((prev) => {
                if (prev < INITIAL_LINES.length) {
                    return prev + 1;
                }
                clearInterval(interval);
                return prev;
            });
        }, 800);

        return () => clearInterval(interval);
    }, []);

    const lines = INITIAL_LINES.slice(0, visibleLineCount);

    return (
        <Section className="py-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto"
            >
                <div className="glass rounded-lg overflow-hidden border border-gray-800 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                    {/* Terminal Header */}
                    <div className="bg-gray-900/90 px-4 py-2 flex items-center justify-between border-b border-gray-800">
                        <div className="flex items-center gap-2 text-gray-400 text-sm font-mono">
                            <TerminalIcon className="w-4 h-4 text-primary" />
                            <span>bash: user@system: ~</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Minimize className="w-3 h-3 text-gray-500 hover:text-white cursor-pointer" />
                            <Maximize className="w-3 h-3 text-gray-500 hover:text-white cursor-pointer" />
                            <X className="w-3 h-3 text-gray-500 hover:text-red-500 cursor-pointer" />
                        </div>
                    </div>

                    {/* Terminal Body */}
                    <div
                        ref={containerRef}
                        className="p-6 h-[400px] font-mono text-sm overflow-y-auto custom-scrollbar bg-black/80"
                    >
                        {lines.map((line) => (
                            <div key={line.id} className="mb-2">
                                {line.type === "command" ? (
                                    <div className="flex gap-2">
                                        <span className="text-primary">$</span>
                                        <span className="text-white">{line.text}</span>
                                    </div>
                                ) : (
                                    <div className="text-gray-400 indent-4">{line.text}</div>
                                )}
                            </div>
                        ))}
                        <div className="flex gap-2 animate-pulse">
                            <span className="text-primary">$</span>
                            <span className="w-2 h-5 bg-primary block" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </Section>
    );
}
