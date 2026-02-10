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
    <main className="bg-background min-h-screen text-text selection:bg-primary/20">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Terminal />
      <Projects />
      <Experience />
      <Contact />

      <footer className="py-8 text-center text-gray-600 text-sm font-mono border-t border-white/5 bg-black/50">
        <p>© {new Date().getFullYear()} Shourya Kakkar. All systems operational.</p>
      </footer>
    </main>
  );
}
