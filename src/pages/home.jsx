// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import logo from "../assets/oman-token-estates.png";
import {
  HomeIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

export const properties = [
  {
    id: 1,
    title: "Oasis Villa in Muscat",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    price: "$1,250,000",
    description: "5BR | 4BA | Pool | Sea View",
  },
  {
    id: 2,
    title: "Glass Horizon Villa",
    image:
      "https://images.unsplash.com/photo-1628745277862-bc0b2d68c50c?auto=format&fit=crop&w=800&q=80",
    price: "$1,050,000",
    description: "3BR | Panoramic Glass | Skyline View",
  },
  {
    id: 3,
    title: "Palm Coast Penthouse",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
    price: "$1,200,000",
    description: "3BR | Private Terrace | Sea Skyline",
  },
  {
    id: 4,
    title: "Beachfront Bungalow",
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
    price: "$1,750,000",
    description: "4BR | Private Beach | Infinity Pool",
  },
  {
    id: 5,
    title: "Mountain View Chalet",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    price: "$890,000",
    description: "3BR | Panoramic Terrace | Fireplace",
  },
  {
    id: 6,
    title: "Sahara Horizon Estate",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
    price: "$1,320,000",
    description: "4BR | Desert View | Solar Power",
  },
];

export default function Home() {
  /* ---------- state ---------- */
  const [search, setSearch] = useState("");
  const [purchased, setPurchased] = useState([]);
  const [user, setUser] = useState(
    () => JSON.parse(localStorage.getItem("otestate_user")) || null
  );
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  /* ---------- persist login ---------- */
  useEffect(() => {
    localStorage.setItem("otestate_user", JSON.stringify(user));
  }, [user]);

  /* ---------- filtering ---------- */
  const filtered = properties.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
  );

  /* ---------- buy handler ---------- */
  const handleBuy = (id) => {
    if (!user) return alert("Please login first");
    if (purchased.includes(id)) return;
    window.confirm("Do you want to purchase this property?") &&
      setPurchased([...purchased, id]);
  };

  /* ---------- auth helpers ---------- */
  const handleFormChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) return alert("Email & password required");
    const db = JSON.parse(localStorage.getItem("otestate_db") || "[]");
    if (db.find((u) => u.email === form.email))
      return alert("Email already registered");
    const newUser = { ...form, kyc: false };
    db.push(newUser);
    localStorage.setItem("otestate_db", JSON.stringify(db));
    setUser(newUser);
    setShowSignup(false);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const db = JSON.parse(localStorage.getItem("otestate_db") || "[]");
    const found = db.find(
      (u) => u.email === form.email && u.password === form.password
    );
    if (!found) return alert("Invalid credentials");
    setUser(found);
    setShowLogin(false);
  };

  const googleMock = () => {
    const googleUser = {
      name: "Google User",
      email: "google@user.com",
      kyc: false,
    };
    setUser(googleUser);
    setShowLogin(false);
    setShowSignup(false);
  };

  const handleLogout = () => setUser(null);

  /* ---------- UI ---------- */
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white font-sans">
      {/* HEADER */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-slate-700 bg-slate-900/80 backdrop-blur shadow-md sticky top-0 z-20">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Oman Token Estates" className="h-16 object-contain" />
          <h1 className="text-4xl font-signature text-yellow-400 italic whitespace-nowrap">
            Oman Token Estates
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
          <a href="#explore" className="menu-link flex items-center gap-1">
            <HomeIcon className="w-4 h-4" />
            Explore
          </a>
          <Link to="/how-it-works" className="menu-link flex items-center gap-1">
            <LightBulbIcon className="w-4 h-4" />
            How&nbsp;It&nbsp;Works
          </Link>
          <a href="#gov" className="menu-link flex items-center gap-1">
            <ShieldCheckIcon className="w-4 h-4" />
            Gov&nbsp;Approval
          </a>
          {user && (
            <a href="#dash" className="menu-link flex items-center gap-1">
              <ChartBarIcon className="w-4 h-4" />
              Dashboard
            </a>
          )}
        </nav>

        {/* AVATAR / LOGIN BUTTONS */}
        {user ? (
          <div className="relative group">
            <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-md text-sm">
              {user.name}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition p-2 space-y-1 z-10">
              <a href="#profile" className="dropdown-link">
                My Profile
              </a>
              <a href="#kyc" className="dropdown-link">
                KYC Status {user.kyc ? "✅" : "❌"}
              </a>
              <button onClick={handleLogout} className="dropdown-link text-red-400">
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={() => setShowLogin(true)}
              className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 rounded-md text-sm"
            >
              Login
            </button>
            <button
              onClick={() => setShowSignup(true)}
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-md text-sm"
            >
              Sign&nbsp;Up
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="text-center py-16 px-6" id="explore">
        <h2 className="text-4xl font-extrabold mb-4">
          Discover Tokenized Real Estate
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Explore premium properties in Oman backed by secure blockchain
          technology. Fractional ownership made simple.
        </p>
      </section>

      {/* SEARCH */}
      <div className="px-6 pb-6 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search properties…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
      </div>

      {/* GRID */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 pb-20">
        {filtered.map((p) => (
          <div key={p.id} className="group relative">
            {/* clickable card */}
            <Link to={`/property/${p.id}`} className="block">
              <div className="relative bg-slate-800 rounded-xl overflow-hidden shadow-lg transition hover:-translate-y-1 hover:shadow-gold/40">
                <span className="shine-pointer" />
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 space-y-2 relative z-10">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="text-slate-400 text-sm">{p.description}</p>
                  <div className="text-lg font-bold text-emerald-400">{p.price}</div>
                </div>
              </div>
            </Link>

            {/* buy button */}
            <div className="absolute bottom-4 right-4 z-20">
              {purchased.includes(p.id) ? (
                <span className="text-xs text-emerald-300 font-bold bg-slate-800/90 px-2 py-1 rounded-md">
                  ✔ Owned
                </span>
              ) : (
                <button
                  onClick={() => handleBuy(p.id)}
                  className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 rounded-md text-sm shadow-lg"
                >
                  Buy Now
                </button>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* LOGIN / SIGNUP MODALS */}
      {(showLogin || showSignup) && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-slate-900 p-8 rounded-lg w-full max-w-md shadow-lg relative">
            <h2 className="text-2xl font-bold mb-4">
              {showLogin ? "Login" : "Sign Up"}
            </h2>
            <form
              onSubmit={showLogin ? handleLoginSubmit : handleSignupSubmit}
              className="space-y-4"
            >
              {!showLogin && (
                <>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 rounded bg-slate-800"
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 rounded bg-slate-800"
                  />
                </>
              )}
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleFormChange}
                className="w-full px-4 py-2 rounded bg-slate-800"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleFormChange}
                className="w-full px-4 py-2 rounded bg-slate-800"
              />
              <button
                type="submit"
                className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 rounded text-white"
              >
                {showLogin ? "Login" : "Create Account"}
              </button>
              <button
                type="button"
                onClick={googleMock}
                className="w-full py-2 bg-white text-black rounded hover:bg-gray-200"
              >
                Login with Google
              </button>
            </form>
            <button
              onClick={() => {
                setShowLogin(false);
                setShowSignup(false);
              }}
              className="absolute top-2 right-4 text-slate-500 hover:text-white text-xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
