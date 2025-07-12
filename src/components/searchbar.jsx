// src/components/SearchBar.jsx
import React, { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Searching for: ${query}`);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-10">
      <input
        type="text"
        placeholder="Search questions or topics..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-3 rounded-lg bg-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
    </form>
  );
}
