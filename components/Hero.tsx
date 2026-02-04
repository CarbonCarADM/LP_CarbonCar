import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-start px-6 pt-32 pb-20 md:pt-48 md:pb-24 overflow-hidden"
    >
      {/* Background Ambient Glow - Gray/White Studio Effect - More subtle */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[550px] bg-white/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[500px] bg-gray-500/10 blur-[100px] rounded-full pointer-events-none mix-blend-overlay" />

      {/* REMOVED TOP BADGE AS REQUESTED */}

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-center max-w-6xl px-2 leading-[1.1] mb-8 tracking-tight relative z-10"
      >
        {/* Main Hook */}
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/70 block mb-4 md:mb-2">
          O sistema operacional das <br className="hidden md:block" /> estéticas profissionais.
        </span>
        
        {/* Subtitle / Value Prop */}
        <span className="block text-xl md:text-3xl text-neutral-400 font-normal leading-relaxed tracking-normal max-w-4xl mx-auto mt-4">
          Automatize agendamentos, elimine o caos do WhatsApp e gerencie sua operação com <span className="text-white">padrão de empresa grande.</span>
        </span>
      </motion.h1>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        // Reduced mb-20 to mb-8 to balance the top spacing
        className="flex flex-col items-center gap-6 relative z-10 mb-8"
      >
        <Button
          href="https://app.carboncar.com.br/trialsingup"
          variant="gradient"
          size="lg"
          className="rounded-full px-10 h-14 text-sm font-medium tracking-wide shadow-[0_0_40px_-10px_rgba(220,38,38,0.4)] border border-white/10"
          aria-label="Começar teste grátis"
        >
          Começar Teste Grátis
        </Button>
        
        {/* Trust/Risk Reversal - Improved Visibility */}
        <div className="flex items-center gap-2.5 text-xs text-neutral-200 font-medium bg-white/[0.08] px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm shadow-lg hover:bg-white/[0.12] transition-colors cursor-default">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-emerald-400">
             <rect width="20" height="14" x="2" y="5" rx="2" />
             <line x1="2" x2="22" y1="10" y2="10" />
             <line x1="7" x2="7.01" y1="15" y2="15" />
             <line x1="11" x2="13" y1="15" y2="15" />
           </svg>
           <span>Teste grátis de 7 dias • <strong className="text-white">Sem cartão de crédito</strong></span>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        // Changed -mt-10 to mt-12 to push dashboard down
        // Removed pb-20 so it doesn't push the next section too far away
        className="w-full max-w-[1400px] mt-12 relative z-10 perspective-1000"
      >
        {/* Pulsing Light Effect - White/Gray */}
        <div
          className="absolute left-1/2 -translate-x-1/2 -top-[90px] w-[80%] h-[200px] rounded-full pointer-events-none z-0"
          aria-hidden="true"
        >
          <div className="w-full h-full bg-white/10 blur-[100px] rounded-full animate-pulse-slow [will-change:transform,opacity]" />
        </div>
        
        <div className="relative z-10 group rounded-xl bg-black/40 p-2 ring-1 ring-white/10 shadow-2xl backdrop-blur-sm overflow-hidden">
          {/* Inner glass reflection */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-xl pointer-events-none z-20" />
          
          <img
            src="https://i.postimg.cc/xTP4N7ky/Dashboard00.png"
            alt="Painel de Controle do Sistema CarbonCar para Gestão de Estética Automotiva e Agendamento Online"
            width={1400}
            height={900}
            className="w-full h-auto rounded-lg shadow-2xl border border-white/5 transition-transform duration-700 group-hover:scale-[1.005]"
            loading="eager"
            // @ts-ignore
            fetchPriority="high"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default React.memo(Hero);