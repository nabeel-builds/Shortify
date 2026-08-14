"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="h-16 bg-purple-700 flex justify-between px-4 items-center text-white relative">
      
      {/* Logo */}
      <Link href="/">
        <button className="logo font-bold text-2xl cursor-pointer">
          Shortify
        </button>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-center items-center gap-4">
        <Link href="/"><li className="hover:text-purple-200 transition">Home</li></Link>
        <Link href="/about"><li className="hover:text-purple-200 transition">About</li></Link>
        <Link href="/shorten"><li className="hover:text-purple-200 transition">Shorten</li></Link>
        <Link href="/contact"><li className="hover:text-purple-200 transition">Contact Me</li></Link>
        <li className="flex gap-3">
          <Link href="/shorten">
            <button className="cursor-pointer bg-purple-500 shadow-lg p-3 rounded-lg font-bold py-1 hover:bg-purple-400 transition">
              Try Now
            </button>
          </Link>
          <Link target="_blank" href="https://github.com/nabeel-builds">
            <button className="cursor-pointer bg-purple-500 shadow-lg p-3 rounded-lg font-bold py-1 hover:bg-purple-400 transition">
              GitHub
            </button>
          </Link>
        </li>
      </ul>

      {/* Hamburger Button (mobile only) */}
      <button
        className="md:hidden flex flex-col gap-[5px] cursor-pointer z-50"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-[2px] bg-white rounded transition-all duration-300 ${
            menuOpen ? "rotate-45 translate-y-[7px]" : ""
          }`}
        />
        <span
          className={`block w-6 h-[2px] bg-white rounded transition-all duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-[2px] bg-white rounded transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
          }`}
        />
      </button>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-purple-700 px-4 pb-4 flex flex-col gap-3 transition-all duration-300 z-40 ${
          menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <Link href="/" onClick={() => setMenuOpen(false)}>
          <div className="py-2 border-b border-purple-500 hover:text-purple-200 transition">Home</div>
        </Link>
        <Link href="/about" onClick={() => setMenuOpen(false)}>
          <div className="py-2 border-b border-purple-500 hover:text-purple-200 transition">About</div>
        </Link>
        <Link href="/shorten" onClick={() => setMenuOpen(false)}>
          <div className="py-2 border-b border-purple-500 hover:text-purple-200 transition">Shorten</div>
        </Link>
        <Link href="/contact" onClick={() => setMenuOpen(false)}>
          <div className="py-2 border-b border-purple-500 hover:text-purple-200 transition">Contact Me</div>
        </Link>
       
      </div>

    </nav>
  );
};

export default Navbar;
