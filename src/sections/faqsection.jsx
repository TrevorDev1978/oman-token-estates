// src/sections/FAQSection.jsx
import React, { useState } from "react";

const faqs = [
  {
    question: "Is this a real property purchase?",
    answer: "Yes. Each token represents legal fractional ownership of a real-world property in Oman, approved by government entities and tied to legal title deeds."
  },
  {
    question: "What blockchain is used?",
    answer: "The platform is built on the Avalanche (AVAX) blockchain for high scalability, low fees, and robust developer support."
  },
  {
    question: "What is ERC-3643?",
    answer: "It’s a security token standard that allows for controlled transfers, identity-based permissions, and metadata updates. Perfect for regulated real estate tokenization."
  },
  {
    question: "What do I earn by investing?",
    answer: "You earn proportional rental yield and value appreciation. If a property is rented for $100,000 and you own 10%, you get $10,000 (minus fees)."
  },
  {
    question: "Can I cash out anytime?",
    answer: "Yes. You can sell your ownership tokens on the secondary marketplace or transfer them to another whitelisted user."
  },
  {
    question: "What if I lose access to my wallet?",
    answer: "Your identity and ownership are linked to your KYC profile, allowing recovery through identity verification."
  }
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);
  return (
    <section className="max-w-4xl mx-auto mt-16">
      <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-slate-800 rounded-lg p-4 shadow hover:shadow-md">
            <button
              className="w-full text-left text-lg font-medium text-white focus:outline-none"
              onClick={() => setOpen(open === idx ? null : idx)}
            >
              {faq.question}
            </button>
            {open === idx && (
              <p className="mt-2 text-slate-300">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
