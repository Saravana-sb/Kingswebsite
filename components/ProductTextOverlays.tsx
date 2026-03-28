"use client";

import { motion } from "framer-motion";

const sections = [
  {
    id: 1,
    headline: "Precision-Engineered Steel",
    paragraph: '"Built Like a Fortress. Styled Like a Masterpiece."\nManufactured using precision-engineered steel to deliver uncompromising strength, reliability, and structural integrity.'
  },
  {
    id: 2,
    headline: "Customizable Design",
    paragraph: '"Designed Your Way"\nPersonalize your wardrobe with custom door designs and high-definition printed finishes—crafted to reflect your unique style and space.'
  },
  {
    id: 3,
    headline: "Advanced Powder Coating",
    paragraph: '"Finish That Lasts"\nMore than just paint - our premium powder-coated finish ensures superior resistance to scratches, corrosion, and everyday wear.'
  }
];

export default function ProductTextOverlays() {
  return (
    <div className="absolute inset-0 top-0 z-10 w-full pointer-events-none pb-[10vh] h-[600vh]">
      {/* Spacer to push first text section down */}
      <div className="h-[100vh]"></div>
      
      {sections.map((section, index) => (
        <div key={section.id} className="min-h-[150vh] flex items-center justify-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className="w-full px-6 lg:px-12"
          >
            <div className="flex flex-col md:flex-row justify-between items-center w-full h-[85vh] md:h-auto py-12 md:py-0 gap-6 md:gap-0">
              
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
                className="pointer-events-auto flex-1 flex items-start md:items-center justify-center md:justify-start z-20 w-full md:w-auto"
              >
                <div className="inline-block backdrop-blur-md bg-black/60 rounded-xl p-4 md:p-6 shadow-2xl max-w-[85vw] md:max-w-xs border border-white/5 text-center">
                  <h2 className="text-xl md:text-3xl font-bold tracking-tight text-white leading-tight">
                    {section.headline}
                  </h2>
                </div>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
                }}
                className="pointer-events-auto flex-1 flex items-end md:items-center justify-center md:justify-end z-20 w-full md:w-auto"
              >
                <div className="inline-block backdrop-blur-md bg-black/60 rounded-xl p-4 md:p-6 shadow-2xl max-w-[85vw] md:max-w-xs border border-white/5 text-center">
                  <p className="text-xs md:text-sm text-white/90 leading-relaxed font-medium whitespace-pre-line">
                    {section.paragraph}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
