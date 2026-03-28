"use client";

import { useEffect, useRef } from "react";
import { product } from "@/data/product";

export default function ProductScroll() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const frameCount = product.totalFrames;
    const images: HTMLImageElement[] = [];
    let loadedImages = 0;

    // Preload images
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = `${product.folderPath}/ezgif-frame-${i.toString().padStart(3, "0")}.jpg`;
      img.onload = () => {
        loadedImages++;
        if (loadedImages === 1) {
          // Draw first frame immediately
          drawFrame(0);
        }
      };
      images.push(img);
    }

    // High resolution canvas logic
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      drawFrame(Math.floor(getCurrentFrameIndex()));
    };

    const drawFrame = (index: number) => {
      if (!images[index] || !context) return;
      
      const img = images[index];
      
      // Prevent drawing broken or incomplete images
      if (!img.complete || img.naturalHeight === 0) return;

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      // Calculate object-fit contain logic
      const scale = Math.min(canvasWidth / img.width, canvasHeight / img.height);
      const x = (canvasWidth / 2) - (img.width / 2) * scale;
      const y = (canvasHeight / 2) - (img.height / 2) * scale;

      context.clearRect(0, 0, canvasWidth, canvasHeight);
      context.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    const getCurrentFrameIndex = () => {
      if (!container) return 0;
      
      const maxScroll = container.scrollHeight - window.innerHeight;
      const scrollY = window.scrollY - container.offsetTop;
      
      // Clamp scroll progress between 0 and 1
      const progress = Math.max(0, Math.min(1, scrollY / maxScroll));
      
      return Math.min(
        frameCount - 1,
        Math.floor(progress * frameCount)
      );
    };

    let animationFrameId: number;
    let currentDrawnFrame = -1;

    const handleScroll = () => {
      const targetFrame = getCurrentFrameIndex();
      
      if (currentDrawnFrame !== targetFrame && images[targetFrame]) {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        
        animationFrameId = requestAnimationFrame(() => {
          drawFrame(targetFrame);
          currentDrawnFrame = targetFrame;
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateCanvasSize);
    
    updateCanvasSize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateCanvasSize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 top-0 h-[600vh] w-full z-0 pointer-events-none">
      <div className="fixed top-0 left-0 h-screen w-full flex items-center justify-center overflow-hidden pointer-events-none">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-contain mix-blend-screen opacity-90"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
        {/* Subtle cinematic grain overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
      </div>
    </div>
  );
}
