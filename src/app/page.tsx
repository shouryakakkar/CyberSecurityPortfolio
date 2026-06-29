import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Terminal } from "@/components/sections/Terminal";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
    return (
        <main className="relative min-h-screen z-10">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Terminal />
            <Projects />
            <Experience />
            <Contact />

            <footer className="py-10 text-center border-t border-white/5 relative z-10">
                <p className="text-xs font-mono tracking-[0.2em] uppercase text-silver-300">
                    © {new Date().getFullYear()} Shourya Kakkar — All systems operational
                </p>
            </footer>
        </main>
    );
}
