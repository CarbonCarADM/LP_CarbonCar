import React from "react";
import { motion } from "framer-motion";
import SectionBadge from "./SectionBadge";
import Button from "./Button";

// Inline Icons
const CheckIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const StarIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
    </svg>
);

// Extracted Phone Component to reuse in both Mobile (inline) and Desktop (side) layouts
const PhoneMockup = () => (
  <div className="relative mx-auto border-[#111] bg-[#050505] border-[14px] rounded-[3.5rem] h-[600px] w-[300px] md:h-[720px] md:w-[360px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.9)] flex flex-col justify-between overflow-hidden ring-1 ring-white/10 z-10 transform transition-transform duration-1000 ease-out will-change-transform">
      
      {/* Screen Container */}
      <div className="w-full h-full bg-black relative overflow-hidden rounded-[2.6rem]">
          
          {/* Dynamic Island */}
          <div className="absolute top-0 inset-x-0 h-14 z-50 flex justify-center pointer-events-none">
                <div className="mt-3 h-[36px] w-[120px] bg-black rounded-full relative z-50 flex items-center justify-center shadow-md">
                  <div className="absolute right-4 w-2 h-2 rounded-full bg-[#111] opacity-50" />
                  <div className="absolute right-8 w-1.5 h-1.5 rounded-full bg-[#050505] opacity-80" />
                </div>
          </div>

          {/* Video Container - Full Screen, No Watermark, Looping */}
          <div className="w-full h-full bg-black relative z-10">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                preload="metadata" 
                className="w-full h-full object-cover"
                poster="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=600"
              >
                {/* High quality vertical automotive detailing video */}
                <source src="https://image2url.com/r2/default/videos/1769354844835-1c6f1586-83ab-4e6b-8806-081391e950ca.mp4" type="video/mp4" />
              </video>
              
              {/* Optional dark overlay to ensure the dynamic island blends if video is very bright at the top */}
              <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black/60 to-transparent pointer-events-none"></div>
              
              {/* Bottom gradient for better integration */}
              <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
          </div>

      </div>
      
      {/* Buttons on side */}
      <div className="h-[32px] w-[3px] bg-[#333] absolute -left-[17px] top-[140px] rounded-l-md border-r border-[#111]"></div>
      <div className="h-[60px] w-[3px] bg-[#333] absolute -left-[17px] top-[200px] rounded-l-md border-r border-[#111]"></div>
      <div className="h-[60px] w-[3px] bg-[#333] absolute -left-[17px] top-[270px] rounded-l-md border-r border-[#111]"></div>
      <div className="h-[90px] w-[3px] bg-[#333] absolute -right-[17px] top-[220px] rounded-r-md border-l border-[#111]"></div>
  </div>
)

const Differentiator = () => {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden" id="differentiator">
        {/* Background from Section 3 (Comparison) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/10 blur-[160px] rounded-full pointer-events-none transform-gpu" />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
            
            {/* Left Column: Premium Typography & Glass Cards */}
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6 }}
               className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
            >
                <SectionBadge title="Experiência do Cliente" className="mb-8 w-fit" />
                
                <h2 className="text-4xl md:text-6xl font-medium text-white mb-8 leading-[1.05] tracking-tight">
                    Seu cliente agenda <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-600">sozinho pelo</span> <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500 font-bold">Link Exclusivo</span>
                </h2>
                
                <p className="text-neutral-400 text-lg mb-12 leading-relaxed max-w-lg font-light lg:pl-6 lg:border-l lg:border-white/10">
                    Transforme seu WhatsApp em uma máquina de vendas. O CarbonCar oferece uma vitrine <span className="text-white font-medium">Apple-level</span> onde seu cliente escolhe serviços sem te perguntar nada.
                </p>

                <div className="space-y-4 mb-12 w-full max-w-lg">
                    {[
                        { title: "Zero Download", desc: "Seu cliente não precisa instalar nada." },
                        { title: "Sincronização Real", desc: "Apenas horários livres aparecem na tela." },
                        { title: "Domínio Próprio", desc: "carboncar.com/sua-oficina" },
                    ].map((item, i) => (
                        <div key={i} className="group relative flex items-center gap-6 p-6 rounded-2xl bg-[#050505]/60 backdrop-blur-xl border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden shadow-lg text-left">
                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            
                            <div className="relative w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                                <CheckIcon className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:text-white transition-all" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-base mb-1 tracking-tight group-hover:text-white transition-colors">{item.title}</h4>
                                <p className="text-neutral-400 text-sm font-medium tracking-wide">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* MOBILE ONLY: Phone appears here (between cards and button) */}
                <div className="lg:hidden w-full flex justify-center py-6 mb-8 perspective-1000">
                    <PhoneMockup />
                </div>

                <Button
                  href="https://app.carboncar.com.br/trialsingup"
                  variant="gradient"
                  size="lg"
                  className="rounded-xl px-12 h-14 text-base w-full sm:w-auto shadow-[0_0_50px_-5px_rgba(220,38,38,0.5)] border border-white/30"
                >
                  Criar meu link exclusivo
                </Button>
            </motion.div>

            {/* Right Column: High-Fidelity iPhone Mockup - DESKTOP ONLY */}
            <motion.div 
               initial={{ opacity: 0, x: 30, rotateY: -15 }}
               whileInView={{ opacity: 1, x: 0, rotateY: -10 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
               className="hidden lg:flex justify-end relative perspective-1000 py-10"
            >
                <PhoneMockup />

                 {/* Premium Glow under phone - White */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[700px] bg-gradient-to-tr from-white/5 to-white/10 blur-[100px] rounded-full pointer-events-none -z-10 transform-gpu" />
            </motion.div>

        </div>
    </section>
  );
};

export default Differentiator;