import React from "react";
import { motion } from "framer-motion";
import SectionBadge from "./SectionBadge";
import Button from "./Button";

// Inline Icons
const CheckCircle = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const ZapIcon = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const BellIcon = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
);

const SmartphoneIcon = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
    <path d="M12 18h.01" />
  </svg>
);

const WalletIcon = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
    <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
  </svg>
);

const DiamondIcon = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z" />
  </svg>
);

const HowItWorks = () => {
  return (
    <section className="py-20 bg-transparent relative overflow-hidden" id="how-it-works">
      {/* Ambient Glow - Stronger - White */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-white/5 blur-[130px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 md:text-center max-w-3xl mx-auto flex flex-col items-center"
        >
          <SectionBadge title="Como Funciona" className="mb-6" />
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-white tracking-tight text-center">
            Controle total em <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 font-bold">3 passos simples</span>
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed text-center font-light">
            Eliminamos a papelada e a complexidade. O CarbonCar transforma o fluxo da sua oficina em um processo linear, seguro e previsível.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[minmax(0,1fr)] mb-16">
          
          {/* Card 1: Menu Digital (Left Column) */}
          <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.6, delay: 0.1 }}
             className="lg:col-span-1 rounded-[2rem] bg-[#050505]/60 backdrop-blur-2xl border border-white/5 overflow-hidden relative group min-h-[540px] flex flex-col hover:border-white/10 transition-colors duration-500 shadow-2xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.03),transparent_50%)] pointer-events-none" />
            
            <div className="p-10 pb-0 relative z-10">
              <h3 className="text-2xl font-bold text-white mb-3">Menu Digital de Serviços 💎</h3>
              {/* Reduced margin-bottom to bring phone closer */}
              <p className="text-neutral-300 text-sm leading-relaxed mb-2">
                Apresente seu trabalho com profissionalismo. O cliente navega pelos seus pacotes, vê preços, descrições e fotos, sentindo confiança para agendar serviços de maior valor.
              </p>
            </div>

            {/* --- IMAGE AREA --- */}
            <div className="relative mt-8 mx-auto w-[85%] flex-1 flex items-end justify-center overflow-hidden">
               {/* Wrapper for the transition - increased height movement and smoother easing */}
               <div className="relative w-full transform transition-transform duration-1000 ease-out group-hover:-translate-y-10">
                  <img 
                    src="https://i.postimg.cc/cJNqQYxw/servicos.png" 
                    alt="Interface do Menu Digital de Serviços de Estética Automotiva no celular" 
                    className="w-full h-auto rounded-t-[2rem] border border-white/10 shadow-2xl object-cover object-top"
                  />
                  {/* Black Shadow Overlay at the bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none rounded-b-[2rem] z-20"></div>
               </div>
            </div>
          </motion.div>

          {/* Center Column: Stacked Cards */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            
            {/* Top: Performance */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="flex-1 rounded-[2rem] bg-[#050505]/60 backdrop-blur-2xl border border-white/5 p-10 relative overflow-hidden group hover:border-white/10 transition-colors duration-500 shadow-xl"
            >
               <div className="relative z-20">
                 <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white border border-white/10">
                        <ZapIcon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold text-white tracking-widest uppercase bg-white/5 px-2 py-1 rounded border border-white/10">Analytics</span>
                 </div>
                 <h3 className="text-xl font-bold text-white mb-2">Desempenho Real</h3>
                 <p className="text-neutral-300 text-sm font-light">
                   Crescimento em tempo real.
                 </p>
               </div>
               
               {/* --- CHART VISUAL (ANIMATED) --- */}
               <div className="absolute inset-0 pt-20 px-0 flex items-end opacity-60 group-hover:opacity-100 transition-opacity duration-700 mix-blend-screen">
                 <svg className="w-full h-48" viewBox="0 0 100 50" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <motion.path 
                        d="M0,50 L0,35 Q10,30 20,40 T40,25 T60,15 T80,20 T100,5 L100,50 Z" 
                        fill="url(#chartGradient)"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />
                    <motion.path 
                        d="M0,35 Q10,30 20,40 T40,25 T60,15 T80,20 T100,5" 
                        fill="none" 
                        stroke="#ffffff" 
                        strokeWidth="1.5" 
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                 </svg>
                 
                 {/* Floating Glass Metric */}
                 <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="absolute top-[45%] right-8 bg-neutral-900/80 border border-white/10 px-4 py-3 rounded-2xl shadow-2xl backdrop-blur-md"
                 >
                    <span className="text-[9px] text-neutral-400 block uppercase tracking-wider mb-1">Lucro Mensal</span>
                    <span className="text-lg font-bold text-white flex items-center gap-2">
                      R$ 42.500 <span className="text-green-400 bg-green-500/10 px-1.5 py-0.5 rounded text-[10px] border border-green-500/20">+12%</span>
                    </span>
                 </motion.div>
               </div>
            </motion.div>

            {/* Bottom: Real-Time Appointments (Previously Collaboration) */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6, delay: 0.3 }}
               className="flex-1 rounded-[2rem] bg-[#050505]/60 backdrop-blur-2xl border border-white/5 p-10 relative overflow-hidden group hover:border-white/10 transition-colors duration-500 shadow-xl"
            >
               <div className="relative z-20">
                 <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 border border-green-500/10">
                        <BellIcon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold text-green-500 tracking-widest uppercase bg-green-500/5 px-2 py-1 rounded border border-green-500/10">Notificações</span>
                 </div>
                 <h3 className="text-xl font-bold text-white mb-2">Agenda ao Vivo</h3>
                 <p className="text-neutral-300 text-sm font-light">
                   Receba agendamentos no painel.
                 </p>
               </div>

               {/* --- APPOINTMENTS UI (ANIMATED) --- */}
               <div className="absolute bottom-0 right-0 left-6 top-40 bg-[#0a0a0a] border-t border-l border-white/10 rounded-tl-3xl p-5 shadow-2xl flex flex-col gap-2.5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  
                  {/* Header inside UI */}
                  <div className="flex justify-between items-center mb-1 px-1">
                      <span className="text-[9px] font-bold text-neutral-500 uppercase tracking-wider">Recentes</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                  </div>

                  {/* Existing Item */}
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="w-8 h-8 rounded-lg bg-[#151515] flex items-center justify-center text-[9px] font-bold text-neutral-400 border border-white/5">BMW</div>
                      <div className="flex-1">
                          <div className="text-[10px] text-white font-bold leading-none mb-0.5">BMW 320i</div>
                          <div className="text-[9px] text-neutral-500">Lavagem Detalhada</div>
                      </div>
                      <span className="text-[9px] text-neutral-600 font-mono">14:00</span>
                  </div>

                   {/* Existing Item 2 (Faded) */}
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.03] border border-white/5 opacity-60">
                      <div className="w-8 h-8 rounded-lg bg-[#151515] flex items-center justify-center text-[9px] font-bold text-neutral-400 border border-white/5">JEEP</div>
                      <div className="flex-1">
                          <div className="text-[10px] text-white font-bold leading-none mb-0.5">Compass</div>
                          <div className="text-[9px] text-neutral-500">Polimento</div>
                      </div>
                      <span className="text-[9px] text-neutral-600 font-mono">15:30</span>
                  </div>

                  {/* New Incoming Item Animation */}
                  <motion.div 
                     initial={{ x: 50, opacity: 0 }}
                     whileInView={{ x: 0, opacity: 1 }}
                     transition={{ delay: 1, type: "spring", stiffness: 100 }}
                     className="flex items-center gap-3 p-2.5 rounded-xl bg-[#111] border-l-2 border-l-green-500 border-y border-r border-y-white/10 border-r-white/10 relative overflow-hidden shadow-lg"
                  >
                     {/* Flash effect */}
                     <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: [0, 0.5, 0] }}
                        transition={{ delay: 1, duration: 0.5 }}
                        className="absolute inset-0 bg-green-500/20"
                     />
                     
                     <div className="relative z-10 w-8 h-8 rounded-lg bg-black flex items-center justify-center text-[9px] font-bold text-white border border-white/10">POR</div>
                     <div className="relative z-10 flex-1">
                         <div className="text-[10px] text-white font-bold leading-none mb-0.5">Porsche 911</div>
                         <div className="text-[9px] text-green-400 font-medium">Novo Agendamento</div>
                     </div>
                     <div className="relative z-10 bg-green-500 text-black text-[8px] font-bold px-1.5 py-0.5 rounded shadow-[0_0_10px_rgba(34,197,94,0.4)]">AGORA</div>
                  </motion.div>

               </div>
            </motion.div>

          </div>

          {/* Card 3: Customer Journey (Right Column) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-1 rounded-[2rem] bg-gradient-to-b from-[#0a0a0a]/80 to-[#050505]/80 backdrop-blur-2xl border border-white/10 p-10 flex flex-col relative overflow-hidden shadow-[0_0_80px_-20px_rgba(255,255,255,0.02)] min-h-[600px] group"
          >
            {/* Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'0 0 2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
            
            <div className="relative z-10 flex-1 flex flex-col justify-center py-6">
               {/* Connected Line */}
              <div className="absolute left-[1.9rem] top-12 bottom-12 w-[2px] bg-white/10">
                <motion.div 
                    initial={{ height: "0%" }}
                    whileInView={{ height: "50%" }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-50" 
                />
              </div>
              
              {[
                { 
                    title: "Auto-Atendimento", 
                    desc: "O cliente agenda sozinho pelo link público, 24h por dia.",
                    icon: <SmartphoneIcon className="w-5 h-5 md:w-6 md:h-6" />
                },
                { 
                    title: "Acompanhamento Ao Vivo", 
                    desc: "Ele recebe atualizações automáticas quando o carro entra no box e quando fica pronto.",
                    icon: <BellIcon className="w-5 h-5 md:w-6 md:h-6" />
                },
                { 
                    title: "Pagamento e Retirada", 
                    desc: "Aviso no WhatsApp de 'Aguardando Retirada' e pagamento na Estética. Nenhum valor passa pelo sistema.",
                    icon: <WalletIcon className="w-5 h-5 md:w-6 md:h-6" />
                },
                { 
                    title: "Fidelização Automática", 
                    desc: "O sistema soma os pontos no cartão fidelidade digital. O cliente volta para ganhar o prêmio.",
                    icon: <DiamondIcon className="w-5 h-5 md:w-6 md:h-6" />
                }
              ].map((step, idx) => (
                <div key={idx} className="flex items-start gap-5 md:gap-6 mb-10 last:mb-0 relative z-10 group/step">
                  <div className="relative shrink-0">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white shadow-xl relative z-10 group-hover/step:scale-110 group-hover/step:bg-white group-hover/step:text-black transition-all duration-300">
                      {step.icon}
                    </div>
                  </div>
                  <div className="pt-2">
                    <h4 className="text-white font-bold text-lg md:text-xl leading-none mb-2 md:mb-1.5 tracking-tight">{step.title}</h4>
                    <p className="text-neutral-400 text-xs font-medium leading-relaxed opacity-90">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

             <div className="mt-auto relative z-10 pt-8 border-t border-white/10">
              <h3 className="text-2xl font-bold text-white mb-2">A Jornada do Cliente VIP</h3>
              <p className="text-gray-300 text-sm leading-relaxed opacity-80 font-light">
                Transforme a percepção do seu cliente. De uma simples lavagem para um serviço VIP organizado.
              </p>
            </div>
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
              className="rounded-xl px-12 h-14 text-base shadow-[0_0_50px_-5px_rgba(220,38,38,0.5)] border border-white/30"
            >
              Automatizar minha oficina hoje
            </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;