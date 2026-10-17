import React from "react";
import Navbar from "@/components/Navbar";
import HeroAgency from "@/components/HeroAgency";
import AboutCompany from "@/components/AboutCompany";
import TeamPortfolio from "@/components/TeamPortfolio";
import ClientsSection from "@/components/ClientsSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import FooterClean from "@/components/FooterClean";

export default function HomePage() {
  return (
    <>
      {/* Modern Frosted Glass Navigation with Purple Tint & Gold Accents */}
      <Navbar />

      <main id="main-content" className="flex-grow">
        {/* Opening First Face: Intro + Creative Services (Left) & Get Quote Card + Muted Intro Video (Right) */}
        <HeroAgency />

        {/* About Us (The Company): 3-Founder Story & Skill-First Philosophy */}
        <AboutCompany />

        {/* Team Portfolio: Naveen (Loop Videos), Nidhith (Posters), Hemanth (Web Designs) */}
        <TeamPortfolio />

        {/* Clients Section: Previous & Current Clients (Authentic, No Fake Metrics) */}
        <ClientsSection />

        {/* Services Section: Complete Breakdown of Every Creative & Digital Service */}
        <ServicesSection />

        {/* Our Prices: Customized to Budget, Small Team Advantage, Separate Meta Ad Spend & SEO */}
        <PricingSection />

        {/* Contact Section: All 3 Founders' Direct Numbers, WhatsApp routes to Nidhith */}
        <ContactSection />
      </main>

      {/* Clean Studio Footer */}
      <FooterClean />
    </>
  );
}
