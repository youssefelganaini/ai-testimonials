import React from "react";
import { Navbar } from "./landing/Navbar";
import { Hero } from "./landing/Hero";
import { Features } from "./landing/Features";
import { HowItWorks } from "./landing/HowItWorks";
import { Testimonials } from "./landing/Testimonials";
import { CTA } from "./landing/CTA";

export function LandingPage() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      {/* <Testimonials /> */}
      <CTA />
    </div>
  );
}
