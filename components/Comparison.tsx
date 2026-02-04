import React, { useCallback, useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import SectionBadge from "./SectionBadge";
import Button from "./Button";

// Utility for class merging
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Inline Icons
const CheckIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

// MagicCard Component with Enhanced Glow, Depth and Texture
export interface MagicCardProps {
  children?: React.ReactNode;
  className?: string;
  gradientSize?: number;
  gradientColor?: string;
  gradientOpacity?: number;
  spotlight?: boolean;
}

export function MagicCard({
  children,
  className,
  gradientSize = 350,
  gradientColor = "#262626",
  gradientOpacity = 0.4,
  spotlight = false,
}: MagicCardProps) {
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const { left, top } = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [mouseX, mouseY, gradientSize]);

  useEffect(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [mouseX, mouseY, gradientSize]);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative flex size-full overflow-hidden rounded-[2rem] bg-black/40 border border-white/5 text-white transition-all duration-500 backdrop-blur-3xl",
        // Inner shadow for depth (light coming from top)
        "shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),inset_0_-1px_1px_rgba(0,0,0,0.5)]",
        className
      )}
    >
      {/* Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay z-0" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'0 0 2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} 
      />

      <div className="relative z-10 w-full h-full">{children}</div>
      
      {/* Dynamic Gradient Follower */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)
          `,
          opacity: gradientOpacity,
        }}
      />
      
      {/* Spotlight Effect */}
      {spotlight && (
        <div className="absolute inset-0 z-0 bg-gradient-to-tr from-white/[0.07] via-transparent to-white/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay" />
      )}
    </div>
  );
}

// Comparison Section Component
const Comparison = () => {
  return (
    <section className="py-24 px-6 relative bg-transparent overflow-hidden" id="comparison">
      {/* Background ambient glow - much brighter/larger - White/Gray */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
        >
          <SectionBadge title="Comparativo Real" className="mb-6" />
          
          <h2 className="font-display text-4xl md:text-6xl font-medium mb-6 text-white tracking-tight leading-[1.05]">
            Pare de perder dinheiro <br/> <span className="text-neutral-500">na operação</span>
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            A diferença entre uma loja que sobrevive e uma que <span className="text-white font-medium">escala</span> está na gestão.
          </p>
        </motion.div>

        {/* Equal height grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch mb-16">
          
          {/* Card 1: Jeito Antigo */}
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="h-full"
          >
            <MagicCard 
                className="bg-[#050505]/40 border-white/5 h-full" 
                gradientColor="#333"
                gradientOpacity={0.2}
            >
                <div className="flex flex-col h-full p-8 lg:p-12 relative">
                
                <div className="flex flex-col gap-5 mb-8 border-b border-white/5 pb-8">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center size-14 rounded-2xl bg-white/5 border border-white/10 text-neutral-500 shadow-inner">
                            <XIcon className="w-6 h-6" />
                        </div>
                        <h3 className="font-display text-2xl font-medium text-neutral-500 tracking-tight">
                            O Jeito Antigo
                        </h3>
                    </div>
                    <p className="text-sm text-neutral-500 font-medium leading-relaxed">
                       Processos manuais, planilhas quebradas e informações perdidas no caos do dia a dia.
                    </p>
                </div>
                
                <ul className="space-y-2 flex-1">
                    {[
                    "Agenda de papel bagunçada",
                    "Furos de caixa e prejuízos",
                    "Clientes esquecidos no WhatsApp",
                    "Sem controle de lucro real"
                    ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 p-4 rounded-xl border border-transparent hover:border-white/5 hover:bg-white/[0.02] transition-colors group/item">
                        <div className="w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover/item:bg-neutral-500 transition-colors" />
                        <span className="text-neutral-500 group-hover/item:text-neutral-400 transition-colors font-medium">{item}</span>
                    </li>
                    ))}
                </ul>
                </div>
            </MagicCard>
          </motion.div>

          {/* Card 2: CarbonCar */}
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.6, delay: 0.4 }}
             className="h-full"
          >
            <MagicCard 
                className="bg-neutral-900/20 border-white/10 shadow-2xl relative overflow-hidden z-20 h-full" 
                gradientColor="#ffffff"
                gradientOpacity={0.08}
                spotlight={true}
            >
                {/* Glowing Top Border */}
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50" />
                
                <div className="flex flex-col h-full p-8 lg:p-12 relative z-10">
                <div className="flex flex-col gap-5 mb-8 border-b border-white/10 pb-8">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center size-14 rounded-2xl bg-gradient-to-br from-white to-neutral-300 text-black shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] border border-white/20">
                            <CheckIcon className="w-7 h-7" />
                        </div>
                        <h3 className="font-display text-3xl font-semibold text-white tracking-tight">
                            CarbonCar
                        </h3>
                    </div>
                    <p className="text-sm text-neutral-300 font-medium leading-relaxed">
                       Automação completa, segurança financeira e crescimento previsível para o seu negócio.
                    </p>
                </div>

                <ul className="space-y-3 flex-1">
                    {[
                    "Agenda digital inteligente & automática",
                    "DRE e controle financeiro preciso",
                    "Link de agendamento 24h",
                    "Relatórios de lucro em tempo real"
                    ].map((item, i) => (
                    <li key={i} className="group/item relative overflow-hidden rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                        
                        <div className="relative flex items-center gap-4 p-4 z-10">
                        <div className="flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-green-500/10 border border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.15)]">
                            <CheckIcon className="w-3 h-3 text-green-400" />
                        </div>
                        <span className="text-base font-medium text-neutral-200 group-hover/item:text-white transition-colors">
                            {item}
                        </span>
                        </div>
                    </li>
                    ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-3">
                    <div className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </div>
                    <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold">
                       Resultado comprovado
                    </p>
                </div>
                </div>
            </MagicCard>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
           <Button
              href="https://app.carboncar.com.br/trialsingup"
              variant="gradient"
              size="lg"
              className="rounded-xl px-12 h-14 text-base shadow-[0_0_50px_-10px_rgba(220,38,38,0.5)] border border-white/30"
            >
              Quero profissionalizar minha estética
            </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;