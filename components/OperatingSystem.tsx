import React from "react";
import { motion } from "framer-motion";
import SectionBadge from "./SectionBadge";

// --- UI MOCKUP COMPONENTS ---

// 1. Financeiro
const FinanceMockup = () => (
  <div className="w-full h-full bg-[#09090B] p-6 flex flex-col justify-between relative overflow-hidden font-sans select-none">
    {/* Background Grid */}
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

    {/* Header */}
    <div className="flex justify-between items-start relative z-10">
      <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500 shadow-[0_0_15px_-3px_rgba(34,197,94,0.3)]">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
      </div>
      <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded-full border border-white/5">Consolidado Hoje</span>
    </div>

    {/* Main Value */}
    <div className="relative z-10 mt-4">
      <div className="flex items-baseline gap-1">
        <span className="text-3xl text-neutral-500 font-medium tracking-tighter">R$</span>
        <span className="text-6xl font-bold text-white tracking-tighter drop-shadow-lg">1.280,00</span>
      </div>
    </div>

    {/* Footer Stats */}
    <div className="grid grid-cols-2 gap-4 mt-auto relative z-10">
        <div className="bg-[#121212] border border-white/5 rounded-2xl p-4 shadow-lg backdrop-blur-sm">
             <div className="flex items-center gap-2 mb-2">
                 <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                 <span className="text-[10px] text-neutral-400 uppercase font-bold tracking-wider">Fluxo</span>
             </div>
             <div className="text-xl font-bold text-white">4 <span className="text-sm text-neutral-500 font-normal">Veículos</span></div>
        </div>
        <div className="bg-[#121212] border border-white/5 rounded-2xl p-4 shadow-lg backdrop-blur-sm">
             <div className="flex items-center gap-2 mb-2">
                 <div className="w-2 h-2 rounded-full bg-neutral-600"></div>
                 <span className="text-[10px] text-neutral-400 uppercase font-bold tracking-wider">Ocupação</span>
             </div>
             <div className="text-xl font-bold text-white">85<span className="text-sm text-neutral-500 font-normal">%</span></div>
        </div>
    </div>
  </div>
);

// 2. Produção
const ProductionMockup = () => (
  <div className="w-full h-full bg-[#09090B] flex flex-col font-sans select-none relative">
      {/* Header */}
      <div className="p-5 border-b border-white/5 flex items-center justify-between bg-[#0F0F0F]">
          <div className="flex items-center gap-3">
              <div className="w-1.5 h-5 bg-red-600 rounded-full shadow-[0_0_10px_rgba(220,38,38,0.5)]"></div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Linha de Produção</h4>
          </div>
          <div className="px-2.5 py-1 bg-neutral-800 rounded-full text-[10px] text-neutral-300 font-mono border border-white/5">4 ATIVOS</div>
      </div>

      {/* List */}
      <div className="flex-1 p-5 space-y-4 overflow-hidden">
          {/* Item 1 */}
          <div className="flex items-center gap-4 p-4 bg-[#121212] border border-white/5 rounded-2xl group hover:border-white/10 transition-colors shadow-lg">
              <div className="flex flex-col items-center gap-1.5 min-w-[50px] border-r border-white/5 pr-4">
                  <div className="w-1.5 h-8 bg-red-500/20 rounded-full relative overflow-hidden">
                      <div className="absolute bottom-0 w-full h-3/4 bg-red-500"></div>
                  </div>
                  <span className="text-[10px] font-mono text-white font-bold">08:00</span>
              </div>
              <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-bold text-white truncate">M3 COMPETITION</span>
                      <span className="text-[9px] bg-neutral-800 text-neutral-500 px-1.5 py-0.5 rounded border border-white/5 font-mono">BMW-OM33</span>
                  </div>
                  <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-neutral-800 flex items-center justify-center text-[8px] text-neutral-400 border border-white/5">MO</div>
                      <span className="text-[10px] text-neutral-400 truncate">Marcos Oliveira</span>
                  </div>
              </div>
              <div className="flex flex-col items-end gap-1.5">
                   <span className="text-[9px] text-neutral-500 uppercase tracking-wide font-bold">Vitrificação</span>
                   <div className="bg-green-500/10 text-green-500 border border-green-500/20 text-[9px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 hover:bg-green-500/20 transition-colors cursor-pointer shadow-[0_0_10px_-2px_rgba(34,197,94,0.3)]">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      FINALIZAR
                   </div>
              </div>
          </div>

           {/* Item 2 */}
           <div className="flex items-center gap-4 p-4 bg-[#121212] border border-white/5 rounded-2xl group hover:border-white/10 transition-colors opacity-70 hover:opacity-100">
              <div className="flex flex-col items-center gap-1.5 min-w-[50px] border-r border-white/5 pr-4">
                  <div className="w-1.5 h-8 bg-neutral-800 rounded-full"></div>
                  <span className="text-[10px] font-mono text-neutral-500">09:00</span>
              </div>
              <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-bold text-white truncate">911 CARRERA S</span>
                      <span className="text-[9px] bg-neutral-800 text-neutral-500 px-1.5 py-0.5 rounded border border-white/5 font-mono">FLA-0911</span>
                  </div>
                  <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-neutral-800 flex items-center justify-center text-[8px] text-neutral-400 border border-white/5">FS</div>
                      <span className="text-[10px] text-neutral-400 truncate">Fernanda Souza</span>
                  </div>
              </div>
              <div className="flex flex-col items-end gap-1.5">
                   <span className="text-[9px] text-neutral-500 uppercase tracking-wide font-bold">Lavagem</span>
                   <div className="bg-white/5 text-neutral-300 border border-white/10 text-[9px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 cursor-pointer hover:bg-white/10">
                      INICIAR
                   </div>
              </div>
          </div>
      </div>
  </div>
);

// 3. CRM
const CRMMockup = () => (
    <div className="w-full h-full bg-[#09090B] p-6 flex flex-col font-sans select-none">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
             <div className="flex items-center gap-2.5">
                 <div className="w-8 h-8 rounded-lg bg-red-900/20 border border-red-500/20 flex items-center justify-center text-red-500">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                 </div>
                 <span className="text-xs font-bold text-white uppercase tracking-wider">Base de Ativos</span>
             </div>
             <div className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center font-bold text-lg leading-none hover:bg-neutral-200 transition-colors cursor-pointer shadow-lg hover:scale-105 active:scale-95 duration-200">+</div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4">
            {/* Client Card 1 */}
            <div className="bg-[#121212] border border-white/5 rounded-2xl p-4 flex flex-col gap-3 group hover:border-white/10 transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-white/5 flex items-center justify-center text-sm font-bold text-neutral-400 font-mono shadow-inner">m</div>
                    <div>
                        <div className="text-xs font-bold text-white mb-0.5">MARCOS</div>
                        <div className="text-[9px] text-neutral-500 bg-[#0F0F0F] px-1.5 py-0.5 rounded-md w-fit border border-white/5">STANDARD</div>
                    </div>
                </div>
                <div className="space-y-2 mt-1">
                    <div className="flex justify-between items-center border-b border-white/5 pb-2">
                        <span className="text-[9px] text-neutral-600 uppercase font-bold tracking-wide">Contato</span>
                        <span className="text-[9px] text-neutral-400 font-mono">(55) 999...</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-[9px] text-neutral-600 uppercase font-bold tracking-wide">LTV</span>
                        <span className="text-[10px] text-green-500 font-bold font-mono bg-green-500/5 px-1.5 rounded">R$ 500</span>
                    </div>
                </div>
                <div className="mt-auto pt-3 flex items-center gap-2">
                     <svg className="w-3 h-3 text-neutral-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4 1l-2.7 5C.4 14 1 15 2 15v2c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-2h8v2c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-2h1z"/><circle cx="6" cy="17" r="2"/><circle cx="18" cy="17" r="2"/></svg>
                     <span className="text-[10px] text-neutral-300 font-bold">UNO</span>
                     <span className="text-[9px] text-red-500 bg-red-500/10 px-1.5 py-0.5 rounded ml-auto border border-red-500/10 font-mono">UY6...</span>
                </div>
            </div>

            {/* Client Card 2 */}
            <div className="bg-[#121212] border border-white/5 rounded-2xl p-4 flex flex-col gap-3 group hover:border-white/10 transition-all hover:-translate-y-1 hover:shadow-xl opacity-80 hover:opacity-100">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-white/5 flex items-center justify-center text-sm font-bold text-neutral-400 font-mono shadow-inner">a</div>
                    <div>
                        <div className="text-xs font-bold text-white mb-0.5">ANA LIVIA</div>
                        <div className="text-[9px] text-neutral-500 bg-[#0F0F0F] px-1.5 py-0.5 rounded-md w-fit border border-white/5">STANDARD</div>
                    </div>
                </div>
                <div className="space-y-2 mt-1">
                    <div className="flex justify-between items-center border-b border-white/5 pb-2">
                        <span className="text-[9px] text-neutral-600 uppercase font-bold tracking-wide">Contato</span>
                        <span className="text-[9px] text-neutral-400 font-mono">(22) 222...</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-[9px] text-neutral-600 uppercase font-bold tracking-wide">LTV</span>
                        <span className="text-[10px] text-green-500 font-bold font-mono bg-green-500/5 px-1.5 rounded">R$ 150</span>
                    </div>
                </div>
                <div className="mt-auto pt-3 flex items-center gap-2">
                     <svg className="w-3 h-3 text-neutral-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4 1l-2.7 5C.4 14 1 15 2 15v2c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-2h8v2c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-2h1z"/><circle cx="6" cy="17" r="2"/><circle cx="18" cy="17" r="2"/></svg>
                     <span className="text-[10px] text-neutral-300 font-bold">CRETA</span>
                     <span className="text-[9px] text-red-500 bg-red-500/10 px-1.5 py-0.5 rounded ml-auto border border-red-500/10 font-mono">AGC...</span>
                </div>
            </div>
        </div>
    </div>
);

// 4. Cronograma/Timeline
const TimelineMockup = () => (
  <div className="w-full h-full bg-[#09090B] p-6 flex flex-col font-sans select-none relative">
     {/* Header */}
     <div className="flex justify-between items-center mb-8">
         <div className="flex flex-col gap-0.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Cronograma Mestre</h4>
            <span className="text-[9px] text-neutral-500 tracking-wide font-medium">GESTÃO TEMPORAL</span>
         </div>
         <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse shadow-[0_0_8px_rgba(220,38,38,0.8)]"></div>
            <span className="text-[10px] text-red-500 font-bold border border-red-500/20 bg-red-500/5 px-3 py-1 rounded-full">AO VIVO</span>
         </div>
     </div>

     {/* Timeline */}
     <div className="flex-1 relative pl-2">
         {/* Vertical Line */}
         <div className="absolute left-[3.5rem] top-0 bottom-0 w-[2px] bg-white/5 rounded-full"></div>

         <div className="space-y-6">
             {/* Item 1 */}
             <div className="flex items-start gap-6 relative group">
                 {/* Time */}
                 <div className="w-[2.5rem] flex flex-col items-end pt-1">
                    <span className="text-[11px] font-bold text-red-500 font-mono">10:00</span>
                    <span className="text-[8px] text-neutral-600 font-mono font-medium">240 MIN</span>
                 </div>
                 {/* Dot */}
                 <div className="absolute left-[3.5rem] top-3 w-2.5 h-2.5 bg-red-600 rounded-full -translate-x-[3.5px] ring-4 ring-[#09090B] z-10 shadow-[0_0_10px_rgba(220,38,38,0.5)]"></div>
                 {/* Card */}
                 <div className="flex-1 bg-[#121212] border border-white/5 border-l-2 border-l-red-600 rounded-r-2xl rounded-bl-2xl p-4 shadow-xl group-hover:bg-[#151515] transition-colors group-hover:-translate-y-0.5 duration-300">
                     <div className="flex justify-between items-start mb-2">
                         <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-white">UNO</span>
                            <span className="text-[9px] font-mono text-neutral-500 bg-white/5 px-1.5 py-0.5 rounded border border-white/5">UYE6E78</span>
                         </div>
                         <div className="text-[9px] text-red-400 border border-red-500/20 px-2 py-0.5 rounded-full uppercase bg-red-500/5 font-bold tracking-wide">Em Execução</div>
                     </div>
                     <div className="text-[11px] text-neutral-300 font-bold uppercase mb-2 tracking-wide">Enceramento Técnico</div>
                     <div className="flex items-center gap-2">
                         <div className="flex items-center gap-1.5 text-[9px] text-neutral-500 bg-white/5 px-2 py-1 rounded-lg">
                            <div className="w-1.5 h-1.5 bg-neutral-500 rounded-full"></div> Marcos
                         </div>
                         <span className="text-[10px] font-mono text-white font-bold ml-auto bg-green-500/5 text-green-500 px-2 py-0.5 rounded border border-green-500/10">R$ 300.00</span>
                     </div>
                 </div>
             </div>

             {/* Item 2 */}
             <div className="flex items-start gap-6 relative opacity-50 hover:opacity-80 transition-opacity">
                 {/* Time */}
                 <div className="w-[2.5rem] flex flex-col items-end pt-1">
                    <span className="text-[11px] font-bold text-white font-mono">12:00</span>
                    <span className="text-[8px] text-neutral-600 font-mono font-medium">180 MIN</span>
                 </div>
                 {/* Dot */}
                 <div className="absolute left-[3.5rem] top-3 w-2.5 h-2.5 bg-neutral-700 rounded-full -translate-x-[3.5px] ring-4 ring-[#09090B] z-10"></div>
                 {/* Card */}
                 <div className="flex-1 bg-[#121212] border border-white/5 rounded-2xl p-4">
                     <div className="flex justify-between items-start mb-2">
                         <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-white">X3</span>
                            <span className="text-[9px] font-mono text-neutral-500 bg-white/5 px-1.5 py-0.5 rounded border border-white/5">OIG3R44</span>
                         </div>
                     </div>
                     <div className="text-[11px] text-neutral-300 font-bold uppercase mb-2 tracking-wide">Higienização Interna</div>
                     <div className="flex items-center gap-2">
                         <div className="flex items-center gap-1.5 text-[9px] text-neutral-500 bg-white/5 px-2 py-1 rounded-lg">
                            <div className="w-1.5 h-1.5 bg-neutral-500 rounded-full"></div> Carol
                         </div>
                         <span className="text-[10px] font-mono text-white font-bold ml-auto">R$ 500.00</span>
                     </div>
                 </div>
             </div>
         </div>
     </div>
  </div>
);

const OperatingSystem = () => {
  const features = [
    {
      title: "Financeiro Automático",
      description: "DRE em tempo real. Saiba seu lucro líquido, custos e previsões sem planilhas.",
      visual: <FinanceMockup />,
      colSpan: "lg:col-span-1",
      gradient: "from-emerald-500/10 to-transparent",
    },
    {
      title: "Sua Estética com uma Gestão Mestre",
      description: "Veja em tempo real quais veículos estão na fila de lavagem e mantenha a organização do seu pátio.",
      visual: <TimelineMockup />, 
      colSpan: "lg:col-span-1",
      gradient: "from-red-500/10 to-transparent",
    },
    {
      title: "CRM Veicular Inteligente",
      description: "O sistema lembra o que cada carro já fez e te avisa quando vender novamente.",
      visual: <CRMMockup />,
      colSpan: "lg:col-span-1",
      gradient: "from-blue-500/10 to-transparent",
    },
    {
      title: "Checklist & Produção",
      description: "Controle cada etapa do serviço. Elimine erros e padronize a qualidade.",
      visual: <ProductionMockup />,
      colSpan: "lg:col-span-1",
      gradient: "from-purple-500/10 to-transparent",
    }
  ];

  return (
    <section className="py-24 bg-transparent relative overflow-hidden border-t border-white/5">
       {/* Background Light Effect */}
       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neutral-800/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

       <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
          >
             <div className="max-w-2xl">
                <SectionBadge title="Sistema Operacional" className="mb-6" />
                <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 leading-[1.05] tracking-tight">
                  O cérebro da sua <br/>
                  <span className="text-neutral-500">operação diária</span>
                </h2>
                <p className="text-neutral-400 text-lg font-light leading-relaxed">
                   Enquanto a "Experiência do Cliente" vende, o "Sistema Operacional" organiza. Controle absoluto sobre cada centavo e cada minuto.
                </p>
             </div>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[minmax(450px,auto)]">
             {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative rounded-[2.5rem] bg-[#050505]/60 backdrop-blur-2xl border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden shadow-2xl flex flex-col ${feature.colSpan}`}
                >
                   {/* Gradient Background */}
                   <div className={`absolute inset-0 bg-gradient-to-b ${feature.gradient} opacity-20 pointer-events-none`} />
                   
                   {/* Noise Texture */}
                   <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'0 0 2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />

                   {/* Content Top */}
                   <div className="relative z-10 p-10 pb-2">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-neutral-400 text-sm leading-relaxed font-light max-w-sm">
                        {feature.description}
                      </p>
                   </div>

                   {/* Visual Area - UI Mockup Container */}
                   <div className="relative flex-1 w-[90%] mx-auto mt-4 overflow-hidden flex items-end justify-center">
                      <div className="relative w-full transition-transform duration-700 group-hover:-translate-y-4 translate-y-6 ease-out">
                        {/* Mockup Window/Container */}
                        <div className="w-full relative rounded-t-[1.5rem] overflow-hidden border border-white/10 shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.8)] bg-[#09090B] h-[320px]">
                             {/* Render the specific visual component */}
                             {feature.visual}
                             
                             {/* Gloss Reflection Overlay */}
                             <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none mix-blend-overlay" />
                             
                             {/* Top Inner Highlight */}
                             <div className="absolute inset-x-0 top-0 h-px bg-white/20 opacity-40"></div>
                             
                             {/* Bottom Fade Overlay - Key for 'floating' look */}
                             <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#09090B] via-[#09090B]/80 to-transparent pointer-events-none z-20"></div>
                        </div>
                      </div>
                   </div>
                </motion.div>
             ))}
          </div>

       </div>
    </section>
  );
};

export default OperatingSystem;