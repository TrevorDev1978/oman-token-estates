// src/pages/HowItWorks.jsx
import React from "react";
import HowItWorksSteps from "../sections/HowItWorksSteps";
import FAQSection from "../sections/FAQSection";
import SearchBar from "../components/SearchBar";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-slate-900 text-white px-6 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">How Oman Token Estates Works</h1>
        <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-lg">
          A complete guide to understanding tokenized real estate ownership and earnings via AVAX + ERC-3643 compliance.
        </p>
      </header>

      <SearchBar />

      <HowItWorksSteps />

      <FAQSection />
    </div>
  );
}
