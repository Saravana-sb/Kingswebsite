import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductScroll from "@/components/ProductScroll";
import ProductTextOverlays from "@/components/ProductTextOverlays";
import ProductGrid from "@/components/ProductGrid";
import { product } from "@/data/product";

export default function Page() {
  return (
    <main className="bg-black min-h-screen text-white overflow-x-hidden selection:bg-cyan-500 selection:text-white">
      <Navbar />

      {/* Hero Scroll Canvas + Text Overlays */}
      <section className="relative w-full bg-black h-[600vh] pointer-events-none">
        <ProductScroll />
        <ProductTextOverlays />
      </section>

      {/* About Us Section */}
      <section id="about" className="relative z-30 bg-[#000] py-16 px-4 border-t border-white/10 relative overflow-hidden flex items-center justify-center">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-full bg-gradient-to-b from-cyan-900/5 via-transparent to-transparent opacity-50 pointer-events-none"></div>
        
        <div className="max-w-2xl w-[95%] mx-auto text-center relative z-10 backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 shadow-2xl p-6 md:p-8 my-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight text-white drop-shadow-md">About Us</h2>
          <div className="space-y-5 text-xs md:text-sm text-white/80 leading-relaxed font-normal">
            <p>
              At Kings Almirah, craftsmanship meets innovation. With over 35 years of expertise in manufacturing steel wardrobes, we have built a strong reputation for delivering durability, reliability, and timeless design.
            </p>
            <p>
              Rooted in tradition and driven by excellence, we have established a solid presence in the B2B segment, serving clients across Kumbakonam, Thanjavur, Cuddalore, and Puducherry. Our commitment to quality and consistency has made us a trusted name in the industry.
            </p>
            <p>
              As we evolve with changing customer needs, we are proud to expand into the B2C space, bringing our expertise directly to homeowners. Today, Kings Almirah goes beyond conventional wardrobes - offering customized designs and high-definition image printing on wardrobe doors, allowing every customer to create a piece that reflects their personal style.
            </p>
            <p>
              Our manufacturing process has also been upgraded with advanced powder coating technology, ensuring a superior finish that is resistant to wear, corrosion, and time - delivering not just products, but long-lasting value.
            </p>
            <p className="text-sm md:text-base font-medium text-white/90 italic pt-2">
              At Kings Almirah, we don't just build wardrobes - we create secure, stylish, and enduring storage solutions designed for modern living.
            </p>
          </div>
        </div>
      </section>

      <ProductGrid />

      <Footer />
    </main>
  );
}

