import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import Clients from "@/components/Clients";
import Affordable from "@/components/Affordable";
import Services from "@/components/Services";
import Shoots from "@/components/Shoots";
import About from "@/components/About";
import Founders from "@/components/Founders";
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
        <WhatWeDo />
        <WhoWeWorkWith />
        <Clients />
        <Affordable />
        <Services />
        <Shoots />
        <About />
        <Founders />
        <Pricing />
        <FAQ />
        <InstagramBlock />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
