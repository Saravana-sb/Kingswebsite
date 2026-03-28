import Link from "next/link";
import { product } from "@/data/product";

export default function Footer() {
  return (
    <footer className="relative z-50 w-full bg-[#0a0a0a] border-t border-orange-500/20 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
        <div className="max-w-sm">
          <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-600">
            {product.name}
          </h2>
          <p className="text-white/60 text-sm leading-relaxed">
            {product.subName} <br />
            {product.description}
          </p>
        </div>
        
        <div className="flex flex-col gap-3 text-left">
          <h3 className="font-semibold text-white mb-2">Contact Us</h3>
          <p className="text-white/60 text-sm">Email: <a href="mailto:info@kings.com" className="hover:text-cyan-400 transition-colors">info@kings.com</a></p>
          <p className="text-white/60 text-sm">Phone: <a href="tel:+919999999999" className="hover:text-cyan-400 transition-colors">+91 9999999999</a></p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/40 text-xs text-center md:text-left">
          &copy; {new Date().getFullYear()} KINGS Iron Safe. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link href="#" className="text-white/40 hover:text-white text-xs transition-colors">Privacy Policy</Link>
          <Link href="#" className="text-white/40 hover:text-white text-xs transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
