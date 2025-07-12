// src/sections/HowItWorksSteps.jsx
import React from "react";

export default function HowItWorksSteps() {
  const steps = [
    {
      title: "1. Create an Account",
      desc: "Sign up securely using your email or connect your wallet. All users are required to pass KYC (Know Your Customer) for compliance and to enable asset ownership."
    },
    {
      title: "2. Explore Real Estate Opportunities",
      desc: "Browse a curated list of high-end properties in Oman. Each property is legally structured for fractional ownership using the ERC-3643 standard on the AVAX blockchain."
    },
    {
      title: "3. Fractional Ownership via Tokens",
      desc: "You don’t need to buy an entire property. With tokenized shares, you can own a portion (e.g., 1%, 10%) and earn rental yield and potential resale value proportional to your stake."
    },
    {
      title: "4. Government & Legal Backing",
      desc: "All properties listed are reviewed and approved by governmental bodies. Ownership is recognized under Oman property law and visible on-chain for transparency."
    },
    {
      title: "5. Earnings & Yield Distribution",
      desc: "Rental income is collected and distributed periodically in USDC directly to your connected wallet based on your percentage of ownership. Transparent logs are available."
    },
    {
      title: "6. Sell or Transfer Your Shares",
      desc: "At any time, you can list your shares for sale on the marketplace or transfer them to another verified user. The smart contract ensures compliance via role-based permissions."
    },
    {
      title: "7. Security & Compliance",
      desc: "Built on Avalanche (AVAX) for speed, cost-efficiency, and reliability. The ERC-3643 standard allows for updatable metadata, whitelisted transfers, and on-chain KYC enforcement."
    }
  ];

  return (
    <section className="max-w-5xl mx-auto space-y-8">
      {steps.map((step, idx) => (
        <div key={idx} className="bg-slate-800 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-bold text-emerald-400 mb-2">{step.title}</h2>
          <p className="text-slate-300">{step.desc}</p>
        </div>
      ))}
    </section>
  );
}
