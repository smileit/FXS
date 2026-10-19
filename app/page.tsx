"use client";

import Nav from "@/components/Nav";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Solutions from "@/sections/Solutions";
import Capabilities from "@/sections/Capabilities";
import Industries from "@/sections/Industries";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import { useReveal } from "@/hooks/useReveal";

export default function Page() {
  useReveal();

  return (
    <div className="min-h-screen bg-ink-950">
      <Nav />
      <main>
        <Hero />
        <About />
        <Solutions />
        <Capabilities />
        <Industries />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
