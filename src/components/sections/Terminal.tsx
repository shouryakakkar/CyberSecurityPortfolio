"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { useEffect, useRef, useState, KeyboardEvent } from "react";
import { Terminal as TerminalIcon, Minus, Square, X } from "lucide-react";

/* ── Command definitions ─────────────────────────────────────────────────── */
type OutputLine = { text: string; type: "cmd" | "out" | "err" | "info" };

const COMMANDS: Record<string, () => string[]> = {
    help: () => [
        "┌─ Available Commands ────────────────────────────────┐",
        "│  whoami       — identity disclosure                 │",
        "│  about        — background & philosophy             │",
        "│  skills       — technical capabilities              │",
        "│  projects     — featured work                       │",
        "│  experience   — professional timeline               │",
        "│  education    — academic background                 │",
        "│  contact      — reach me                            │",
        "│  status       — current availability                │",
        "│  clear        — wipe terminal                       │",
        "└─────────────────────────────────────────────────────┘",
    ],
    whoami: () => ["shourya_kakkar", "> Penetration Tester · Ethical Hacker · Security Researcher"],
    about: () => [
        "Passionate Penetration Tester & Ethical Hacker dedicated to",
        "securing the digital frontier. Combines offensive security",
        "knowledge with defensive strategies — treating every engagement",
        "as a critical mission.",
    ],
    skills: () => [
        "── Security Tools ──────────────────────────────────",
        "   Nmap  ·  Burp Suite Pro  ·  Metasploit  ·  Wireshark",
        "   Nessus  ·  Aircrack-ng",
        "",
        "── Web Security ────────────────────────────────────",
        "   OWASP Top 10  ·  SQLi  ·  XSS  ·  CSRF  ·  SSRF  ·  IDOR",
        "",
        "── Core Concepts ───────────────────────────────────",
        "   CIA Triad  ·  IDS/IPS  ·  Threat Modeling  ·  Risk Assessment",
        "",
        "── Programming ─────────────────────────────────────",
        "   Python  ·  Bash  ·  JavaScript/TypeScript  ·  SQL  ·  C++",
    ],
    projects: () => [
        "01. PromptArmor     — AI Security Reverse Proxy & Analytics",
        "02. PhishGuard      — ML-Based Phishing Detection",
        "03. AD Pentest Lab  — Active Directory Attack Simulation",
        "04. C2 Lab (Sliver) — Red Team Command & Control",
        "05. ChainStrike     — Automated Recon & Reporting CLI",
        "06. WebSecScan      — Web App Security Assessment Tool",
        "",
        "   > github.com/shouryakakkar",
    ],
    experience: () => [
        "── Feb 2026 — Present ──────────────────────────────",
        "   Security Analyst Intern @ Cryptus Cyber Security",
        "   WAPT · API Pentesting · 20+ Critical Vulns Found",
        "",
        "── Aug 2025 — Sep 2025 ─────────────────────────────",
        "   Cyber Security Intern @ ShadowFox",
        "   Network Recon · Vulnerability Assessment · OWASP",
        "",
        "── 2025 — Present ──────────────────────────────────",
        "   CTF Player @ TryHackMe",
    ],
    education: () => [
        "Bennett University",
        "B.Tech — Computer Science Engineering (Cyber Security)",
        "Aug 2023 — May 2027",
    ],
    contact: () => [
        "Email    — shouryakakkar2006@gmail.com",
        "LinkedIn — linkedin.com/in/shouryakakkar",
        "GitHub   — github.com/shouryakakkar",
    ],
    status: () => [
        "● ONLINE",
        "  Available for internships, freelance & full-time roles.",
        "  Red Teaming · Vulnerability Assessment · SOC Analysis",
    ],
};

const BOOT_SEQUENCE = [
    { text: "whoami",                    type: "cmd" as const },
    { text: "shourya_kakkar",            type: "out" as const },
    { text: "status",                    type: "cmd" as const },
    { text: "● ONLINE — available for work", type: "out" as const },
    { text: "skills --list",             type: "cmd" as const },
    { text: "> Penetration Testing",     type: "out" as const },
    { text: "> Application Security",    type: "out" as const },
    { text: "> Network Security",        type: "out" as const },
    { text: "> Threat Intelligence",     type: "out" as const },
];

export function Terminal() {
    const [lines, setLines]           = useState<OutputLine[]>([]);
    const [input, setInput]           = useState("");
    const [history, setHistory]       = useState<string[]>([]);
    const [histIdx, setHistIdx]       = useState(-1);
    const [booted, setBooted]         = useState(false);
    const [minimised, setMinimised]   = useState(false);
    const bodyRef                     = useRef<HTMLDivElement>(null);
    const inputRef                    = useRef<HTMLInputElement>(null);

    /* Boot sequence */
    useEffect(() => {
        let i = 0;
        const id = setInterval(() => {
            if (i < BOOT_SEQUENCE.length) {
                const entry = BOOT_SEQUENCE[i];
                setLines((prev) => [...prev, { text: entry.text, type: entry.type }]);
                i++;
            } else {
                clearInterval(id);
                setBooted(true);
                setLines((prev) => [
                    ...prev,
                    { text: "", type: "out" },
                    { text: "Type  help  to see available commands.", type: "info" },
                ]);
            }
        }, 500);
        return () => clearInterval(id);
    }, []);

    /* Auto-scroll */
    useEffect(() => {
        if (bodyRef.current) {
            bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
        }
    }, [lines]);

    /* Focus input on click anywhere in terminal body */
    const focusInput = () => inputRef.current?.focus();

    const runCommand = (raw: string) => {
        const cmd = raw.trim().toLowerCase().split(/\s+/)[0];

        // Add the typed command to output
        setLines((prev) => [...prev, { text: raw.trim(), type: "cmd" }]);

        if (!cmd) return;

        // Save to history
        setHistory((h) => [raw.trim(), ...h.slice(0, 49)]);
        setHistIdx(-1);

        if (cmd === "clear") {
            setLines([]);
            return;
        }

        const handler = COMMANDS[cmd];
        if (handler) {
            const results = handler();
            setLines((prev) => [
                ...prev,
                ...results.map((t) => ({ text: t, type: "out" as const })),
            ]);
        } else {
            setLines((prev) => [
                ...prev,
                { text: `command not found: ${cmd}  (try 'help')`, type: "err" },
            ]);
        }
    };

    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            runCommand(input);
            setInput("");
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            const next = Math.min(histIdx + 1, history.length - 1);
            setHistIdx(next);
            setInput(history[next] ?? "");
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            const next = Math.max(histIdx - 1, -1);
            setHistIdx(next);
            setInput(next === -1 ? "" : history[next]);
        } else if (e.key === "Tab") {
            e.preventDefault();
            // Basic tab-complete
            const partial = input.trim().toLowerCase();
            const match = Object.keys(COMMANDS).find((c) => c.startsWith(partial));
            if (match) setInput(match);
        }
    };

    return (
        <Section className="py-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl mx-auto"
            >
                <div className="border border-white/8 rounded-xl overflow-hidden shadow-2xl">
                    {/* ── Header ── */}
                    <div className="bg-white/[0.03] px-5 py-3 flex items-center justify-between border-b border-white/8">
                        <div className="flex items-center gap-2.5">
                            <TerminalIcon className="w-3.5 h-3.5 text-silver-300" />
                            <span className="text-xs font-mono tracking-[0.12em] text-silver-400">
                                bash — shourya@system:~
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setMinimised((m) => !m)}
                                className="text-silver-600 hover:text-silver-300 transition-colors"
                                aria-label="Minimise"
                            >
                                <Minus className="w-3 h-3" />
                            </button>
                            <button
                                onClick={() => { setLines([]); setBooted(false); }}
                                className="text-silver-600 hover:text-silver-300 transition-colors"
                                aria-label="Maximise"
                            >
                                <Square className="w-3 h-3" />
                            </button>
                            <button
                                onClick={() => setLines([])}
                                className="text-silver-600 hover:text-red-400 transition-colors"
                                aria-label="Clear"
                            >
                                <X className="w-3 h-3" />
                            </button>
                        </div>
                    </div>

                    {/* ── Body ── */}
                    {!minimised && (
                        <div
                            ref={bodyRef}
                            onClick={focusInput}
                            className="p-6 h-96 font-mono text-sm overflow-y-auto bg-black/70 cursor-text"
                            style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(255,255,255,0.1) transparent" }}
                        >
                            {lines.map((line, i) => (
                                <div key={i} className="mb-1.5 leading-relaxed">
                                    {line.type === "cmd" ? (
                                        <div className="flex gap-2">
                                            <span className="text-silver-500 select-none">$</span>
                                            <span className="text-white">{line.text}</span>
                                        </div>
                                    ) : line.type === "err" ? (
                                        <div className="text-red-400/80 pl-4">{line.text}</div>
                                    ) : line.type === "info" ? (
                                        <div className="text-silver-400 pl-4 italic">{line.text}</div>
                                    ) : (
                                        <div className="text-silver-300 pl-4 whitespace-pre">{line.text}</div>
                                    )}
                                </div>
                            ))}

                            {/* ── Active input row ── */}
                            {booted && (
                                <div className="flex gap-2 items-center mt-1">
                                    <span className="text-silver-500 select-none">$</span>
                                    <div className="flex-1 relative">
                                        <input
                                            ref={inputRef}
                                            value={input}
                                            onChange={(e) => setInput(e.target.value)}
                                            onKeyDown={onKeyDown}
                                            autoComplete="off"
                                            autoCorrect="off"
                                            spellCheck={false}
                                            className="bg-transparent outline-none text-white w-full caret-white font-mono text-sm"
                                            aria-label="Terminal input"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Booting pulse */}
                            {!booted && (
                                <div className="flex gap-2 mt-1">
                                    <span className="text-silver-500 select-none">$</span>
                                    <span className="w-1.5 h-4 bg-silver-200 inline-block animate-[blink_1s_step-end_infinite]" />
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Hint row */}
                {booted && !minimised && (
                    <p className="mt-3 text-center text-xs font-mono text-silver-600 tracking-wider">
                        ↑ ↓ history &nbsp;·&nbsp; Tab autocomplete &nbsp;·&nbsp; type{" "}
                        <span className="text-silver-400">help</span> to start
                    </p>
                )}
            </motion.div>
        </Section>
    );
}
