import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IphoneBand from "@/components/IphoneBand";
import Shoots from "@/components/Shoots";
import Services from "@/components/Services";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import Clients from "@/components/Clients";
import About from "@/components/About";
import HowWeWork from "@/components/HowWeWork";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import InstagramBlock from "@/components/InstagramBlock";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main id="main-content" className="flex-grow">
        <Hero />
        <IphoneBand />
        <Shoots />
        <Services />
        <WhoWeWorkWith />
        <Clients />
        <About />
        <HowWeWork />
        <Pricing />
        <FAQ />
        <InstagramBlock />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
