// src/pages/PropertyDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { properties } from "./Home";

export default function PropertyDetail() {
  const { id } = useParams();
  const prop = properties.find((p) => p.id === Number(id));

  if (!prop)
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        Property not found – <a href="/" className="text-emerald-400 underline ml-2">back home</a>
      </div>
    );

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans pb-20">
      <header className="px-6 py-4 border-b border-slate-700 flex items-center justify-between">
        <h1 className="text-2xl font-bold">{prop.title}</h1>
        <Link to="/" className="text-emerald-400 hover:underline">
          ← Back to Marketplace
        </Link>
      </header>

      <div className="max-w-5xl mx-auto mt-8 grid md:grid-cols-2 gap-8 px-6">
        <img
          src={prop.image}
          alt={prop.title}
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />

        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-yellow-300">{prop.price}</h2>
          <p className="text-slate-300">{prop.description}</p>

          <ul className="list-disc list-inside text-slate-400 space-y-1">
            <li>Location: Muscat, Oman</li>
            <li>Ownership tokens: 1,000</li>
            <li>Expected rental yield: 7.2% p.a.</li>
            <li>Gov ID: OM-REA-2025-0001</li>
          </ul>

          <button className="mt-6 w-full py-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg text-xl font-bold shadow-lg">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
