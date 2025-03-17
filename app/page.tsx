"use client";

import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";
import "./globals.css";

export default function Home() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      lenisOptions: {
        wrapper: window,
        content: document.documentElement,
        lerp: 0.1,
      },
    });
  }, []);
  return (
    <main id="main">
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
