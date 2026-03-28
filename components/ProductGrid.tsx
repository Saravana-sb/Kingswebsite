"use client";

import { motion } from "framer-motion";
import { productsGrid } from "@/data/product";

export default function ProductGrid() {
  return (
    <section id="products" className="relative z-30 bg-[#050505] py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight drop-shadow-md">Our Collection.</h2>
          <p className="text-white/80 text-sm md:text-base">Engineered for perfection inside and out.</p>
        </div>

        {/* CSS Grid strictly mapped to 3 columns (3x3 grid for 9 items) */}
        <div className="grid grid-cols-3 gap-3 md:gap-8">
          {productsGrid.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] flex flex-col"
            >
              {/* Image Container with Hover Scale */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#111] relative flex items-center justify-center p-4 md:p-6">
                {/* Fallback pattern if image is missing later */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-contain filter drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback visual trick if product image isn't placed yet
                    (e.target as HTMLImageElement).style.display = 'none';
                    e.currentTarget.parentElement?.classList.add('flex-col');
                  }}
                />
              </div>

              {/* Product Info */}
              <div className="p-4 md:p-5 border-t border-white/5 flex flex-col relative z-10 bg-[#0a0a0a]">
                <h3 className="text-base font-semibold tracking-tight mb-2 group-hover:text-cyan-400 transition-colors">
                  {item.name}
                </h3>
                <div className="w-8 h-1 bg-cyan-500 rounded-full scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
