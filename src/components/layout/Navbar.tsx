"use client";

import { motion } from "framer-motion";
import { Menu, X, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <a href="#" className="flex items-center gap-2 text-primary font-bold text-xl tracking-tighter">
                    <span>Shourya<span className="text-white"> Kakkar</span></span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-gray-400 hover:text-primary transition-colors hover:glow-text"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-gray-400 hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            <motion.div
                initial={false}
                animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                className="md:hidden overflow-hidden glass border-b border-white/5"
            >
                <div className="flex flex-col p-6 gap-4">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="text-gray-400 hover:text-primary transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </motion.div>
        </nav>
    );
}
