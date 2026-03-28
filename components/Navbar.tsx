"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { product } from "@/data/product";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="relative w-full z-50 bg-black py-2 pointer-events-auto transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-1 flex items-center justify-between backdrop-blur-md bg-white/5 rounded-xl border border-white/10 shadow-lg w-[98%] md:w-[95%] lg:w-full">
        <Link href="/" className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Logo/Logo.jpg" alt="Logo" className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 rounded bg-black/50 object-cover shadow-lg" />
          <span className="text-lg md:text-xl lg:text-2xl font-black tracking-tight drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-600">
            {product.name}
          </span>
        </Link>
        <div className="flex gap-2 md:gap-4 items-center">
          <button 
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white text-sm font-semibold tracking-wide transition-all border border-white/10 hidden md:block"
          >
            About Us
          </button>
          <button 
            onClick={() => {
              document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-3 py-1.5 md:px-5 md:py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.6)] hover:shadow-[0_0_30px_rgba(6,182,212,0.8)]"
          >
            Our Products
          </button>
        </div>
      </div>
    </nav>
  );
}
