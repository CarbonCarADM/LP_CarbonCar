import React, { useEffect, Suspense, lazy } from "react";
import { useMotionValue, useMotionTemplate, motion } from "framer-motion";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Logos3 from "./components/Logos";

// Lazy load components below the fold to boost initial load speed
const Comparison = lazy(() => import("./components/Comparison"));
const HowItWorks = lazy(() => import("./components/HowItWorks"));
const Differentiator = lazy(() => import("./components/Differentiator"));
const OperatingSystem = lazy(() => import("./components/OperatingSystem"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Pricing = lazy(() => import("./components/Pricing"));
const FAQ = lazy(() => import("./components/FAQ"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  // PERFORMANCE OPTIMIZATION: 
  // Use MotionValues instead of useState. This prevents the entire App component tree
  // from re-rendering on every single mouse movement, drastically reducing CPU usage.
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      // Using requestAnimationFrame to debounce mouse events for smoother performance on low-end devices
      requestAnimationFrame(() => {
        mouseX.set(ev.clientX);
        mouseY.set(ev.clientY);
      });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [mouseX, mouseY]);

  // Create the gradient template directly tied to motion values
  const maskImage = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, black, transparent)`;
  const webkitMaskImage = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#050505] to-black text-white selection:bg-white/20 selection:text-white relative">
       {/* Global Noise Overlay - Static & Optimized with will-change */}
       <div 
        className="fixed inset-0 z-20 pointer-events-none opacity-[0.03] mix-blend-overlay will-change-transform"
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'0 0 2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' 
        }}
      />

      {/* Dynamic Spotlight Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Base Grid (Dim) - Reduced opacity for darker feel */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }} 
        />
        
        {/* Spotlight Grid (Revealed by mouse via GPU mask) - Reduced opacity */}
        <motion.div 
          className="absolute inset-0 opacity-[0.08] transition-opacity duration-300 will-change-[mask-image]"
          style={{ 
            backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            maskImage,
            WebkitMaskImage: webkitMaskImage,
          }} 
        />
      </div>

      <div className="relative z-10">
        <Navigation />
        <Hero />
        {/* Logos loads eagerly as it is near the fold, but images inside are lazy */}
        <Logos3 />
        
        {/* Sections Wrapper - Transparent to let global gradient show */}
        <div className="relative">
          <Suspense fallback={<div className="h-96 w-full flex items-center justify-center text-white/20">Carregando...</div>}>
            <Comparison />
            <HowItWorks />
            <Differentiator />
            <OperatingSystem />
            <Testimonials />
            <Pricing />
            <FAQ />
            <Footer />
          </Suspense>
        </div>
      </div>
    </main>
  );
}