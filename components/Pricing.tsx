import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import SectionBadge from "./SectionBadge";

// Inline Check Icon
const CheckIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// Border Beam Component for the PRO card
const BorderBeam = ({ 
  className = "", 
  size = 200, 
  duration = 15, 
  anchor = 90, 
  borderWidth = 1.5, 
  colorFrom = "#ffaa40", 
  colorTo = "#9c40ff", 
  delay = 0 
}: {
  className?: string;
  size?: number;
  duration?: number;
  anchor?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}) => (
  <div
    style={{
      "--size": size,
      "--duration": duration,
      "--anchor": anchor,
      "--border-width": borderWidth,
      "--color-from": colorFrom,
      "--color-to": colorTo,
      "--delay": `-${delay}s`,
    } as React.CSSProperties}
    className={`absolute inset-[0] rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent] 
      ![mask-clip:padding-box,border-box] ![mask-composite:intersect] 
      [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)] 
      after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] 
      after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] 
      after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))] ${className}`}
  />
);

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Carbon Start",
      price: 0,
      annualPrice: 0,
      description: "Essencial para novos hangares.",
      features: [
        "Até 5 Serviços no catálogo",
        "Agenda de Boxes Digital",
        "Link de Agendamento Público",
        "CRM de Clientes Básico",
        "Sem Gestão Financeira",
        "Sem Notificações WhatsApp"
      ],
      highlight: false,
      buttonText: "Começar Agora"
    },
    {
      name: "Carbon Elite",
      price: 147,
      annualPrice: 124.95,
      description: "Potência máxima e exclusividade.",
      features: [
        "Tudo do Plano PRO",
        "DRE Gerencial Avançado",
        "Consultoria de Fluxo",
        "Exportação para Contabilidade",
        "Suporte VIP Prioritário",
        "Selo de Hangar Certificado"
      ],
      highlight: true,
      buttonText: "Começar Agora"
    },
    {
      name: "Carbon Pro",
      price: 97,
      annualPrice: 83.2,
      description: "Gestão profissional e escala.",
      features: [
        "Serviços Ilimitados",
        "Gestão Financeira (DRE)",
        "Notificações WhatsApp Reais",
        "Galeria de Portfólio",
        "Programa de Fidelidade XP",
        "Suporte via Ticket"
      ],
      highlight: false,
      buttonText: "Começar Agora"
    }
  ];

  return (
    <section className="py-24 bg-transparent relative overflow-hidden" id="pricing">
      {/* Background Ambience - Slightly brighter ambient light for better contrast */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-950/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
        >
          <SectionBadge title="Planos & Preços" className="mb-6" />
          
          <h2 className="font-display text-4xl md:text-6xl font-medium text-white mb-6 tracking-tight leading-[1.05]">
            Encontre o plano perfeito para <br/> elevar sua estética
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto font-light">
            Explore nossos planos flexíveis para qualquer tamanho de negócio. Seja começando ou escalando, o CarbonCar tem o ajuste perfeito.
          </p>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-5 mt-10">
            <button 
              onClick={() => setIsAnnual(false)}
              className={`text-sm font-bold transition-colors ${!isAnnual ? 'text-white' : 'text-neutral-500'}`}
            >
              Mensal
            </button>
            
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-8 bg-neutral-900 rounded-full border border-white/10 transition-colors hover:border-red-500/30 focus:outline-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]"
            >
              <motion.div
                className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-lg"
                animate={{ x: isAnnual ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            
            <button 
              onClick={() => setIsAnnual(true)}
              className={`text-sm font-bold transition-colors flex items-center gap-2 ${isAnnual ? 'text-white' : 'text-neutral-500'}`}
            >
              Anual
              <span className="text-[10px] font-bold text-white bg-red-600 px-2 py-0.5 rounded-full uppercase tracking-wide shadow-[0_0_10px_rgba(220,38,38,0.4)]">
                Oferta
              </span>
            </button>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, index) => {
             // Use requested values for monthly vs annual
             const displayPrice = isAnnual ? plan.annualPrice : plan.price;

             return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col p-10 rounded-[2.5rem] border transition-all duration-500 group h-full backdrop-blur-3xl overflow-hidden ${
                  plan.highlight 
                    ? "bg-gradient-to-b from-red-950/[0.15] to-[#080808] border-red-500/20 shadow-2xl z-10 scale-[1.03] lg:scale-105" 
                    : "bg-gradient-to-b from-white/[0.08] to-transparent border-white/10 hover:border-white/20 hover:from-white/[0.12] hover:to-white/[0.02] scale-100 shadow-xl"
                }`}
              >
                {/* Top Inner Light Reflection */}
                <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-50 ${plan.highlight ? 'via-red-400/50' : ''}`} />

                {/* Noise Texture */}
                <div 
                  className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay z-0" 
                  style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'0 0 2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} 
                />

                {/* PRO CARD: Border Beam Animation */}
                {plan.highlight && (
                   <BorderBeam size={300} duration={10} delay={9} colorFrom="#dc2626" colorTo="#7f1d1d" borderWidth={2} />
                )}

                {/* Glowing Effects for Highlighted Card */}
                {plan.highlight && (
                    <div className="absolute inset-0 bg-gradient-to-b from-red-500/[0.05] to-transparent pointer-events-none rounded-[2.5rem]" />
                )}
                
                {/* Header */}
                <div className="flex justify-between items-start mb-8 relative z-10">
                    <h3 className={`font-display text-2xl font-semibold tracking-wide ${plan.highlight ? "text-white" : "text-white"}`}>{plan.name}</h3>
                    {plan.highlight && (
                        <span className="bg-red-500/20 backdrop-blur-md text-red-200 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest border border-red-500/30 shadow-[0_0_15px_-3px_rgba(220,38,38,0.4)]">
                            Mais Vendido
                        </span>
                    )}
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-6 relative z-10">
                  <span className="font-mono text-5xl lg:text-6xl font-medium text-white tracking-tighter shadow-black drop-shadow-lg">
                    {plan.price === 0 ? "Grátis" : <><span className="text-2xl align-top mr-1 text-neutral-400 font-sans">R$</span>{displayPrice}</>}
                  </span>
                  {plan.price > 0 && (
                    <span className="text-neutral-400 text-sm font-medium">/mês</span>
                  )}
                </div>

                <p className="text-sm text-neutral-300 mb-10 min-h-[40px] font-light leading-relaxed relative z-10">
                    {plan.description}
                </p>

                {/* Button Area */}
                <Button 
                  href="https://app.carboncar.com.br/trialsingup"
                  variant={plan.highlight ? "gradient" : "ghost"}
                  className={`w-full font-bold uppercase tracking-wider text-xs h-14 rounded-2xl mb-10 relative z-10 transition-all ${
                      !plan.highlight 
                      ? "bg-white/5 hover:bg-white/10 border border-white/10 text-white shadow-none" 
                      : "shadow-[0_0_30px_-5px_rgba(220,38,38,0.5)] border border-red-500/30"
                  }`}
                >
                  {plan.buttonText}
                </Button>

                {/* Features Divider */}
                <div className="flex items-center gap-4 mb-8 relative z-10">
                    <div className="h-px bg-white/10 flex-1 group-hover:bg-white/20 transition-colors" />
                    <span className="text-[9px] uppercase tracking-[0.2em] text-neutral-500 font-bold group-hover:text-neutral-400 transition-colors">Recursos</span>
                    <div className="h-px bg-white/10 flex-1 group-hover:bg-white/20 transition-colors" />
                </div>

                {/* Features List */}
                <div className="flex-1 relative z-10">
                  <ul className="space-y-5">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-4 text-sm">
                        <div className={`mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center transition-colors duration-300 ${plan.highlight ? "bg-red-600 text-white shadow-[0_0_10px_rgba(220,38,38,0.4)]" : "bg-white/10 text-white border border-white/10 group-hover:bg-white/20 group-hover:border-white/30"}`}>
                          <CheckIcon className="w-2.5 h-2.5" />
                        </div>
                        <span className="text-neutral-300 font-light tracking-wide group-hover:text-white transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Footer on PAID cards only */}
                {plan.price > 0 && (
                    <div className="mt-10 pt-6 border-t border-white/5 text-center relative z-10 group-hover:border-white/10 transition-colors">
                        <p className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold opacity-70 group-hover:opacity-100 group-hover:text-neutral-300 transition-all">Teste grátis de 7 dias • Sem cartão de crédito</p>
                    </div>
                )}
              </motion.div>
             );
          })}
        </div>

      </div>
    </section>
  );
};

export default Pricing;