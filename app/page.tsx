"use client";

import React, { useState } from "react";
import { NeuralCanvas } from "@/components/NeuralCanvas";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { BeyondCode } from "@/components/BeyondCode";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CvModal } from "@/components/CvModal";

export default function Home() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#05070f] text-slate-100 selection:bg-blue-500 selection:text-white overflow-hidden">
      {/* Background Interactive Neural Particle Network */}
      <NeuralCanvas />

      {/* Navigation Header */}
      <Navbar onOpenCvModal={() => setCvModalOpen(true)} />

      {/* Main Sections */}
      <Hero onOpenCvModal={() => setCvModalOpen(true)} />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Certifications />
      <BeyondCode />
      <Contact onOpenCvModal={() => setCvModalOpen(true)} />

      {/* Footer */}
      <Footer />

      {/* CV Interactive Modal & Print Export */}
      <CvModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </main>
  );
}
