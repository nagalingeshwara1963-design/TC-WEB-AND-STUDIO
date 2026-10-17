import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import About from "@/components/About";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main id="main-content" className="flex-grow">
        <Hero />
        <Clients />
        <About />
        <Services />
        <HowWeWork />
        <Pricing />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
