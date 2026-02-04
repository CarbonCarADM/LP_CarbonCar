import React from "react";
import { motion } from "framer-motion";
import SectionBadge from "./SectionBadge";
import Button from "./Button";

export interface Testimonial {
  text: string;
  highlight?: string;
  image: string;
  name: string;
  role: string;
}

interface TestimonialsRowProps {
  testimonials: Testimonial[];
  title?: string;
  speed?: number;
  direction?: "left" | "right";
  cardHeight?: number;
  className?: string;
}

export const TestimonialsRow: React.FC<TestimonialsRowProps> = ({
  testimonials,
  title,
  speed = 40,
  direction = "left",
  cardHeight = 320,
  className,
}) => {
  // Para o loop infinito funcionar sem "buracos", precisamos renderizar a lista duas vezes.
  // Assim, quando o primeiro conjunto sai da tela, o segundo já está visível, criando a ilusão de infinito.
  const content = [...testimonials, ...testimonials];

  return (
    <div className={`w-full ${className}`}>
       {title && (
          <div className="max-w-[1450px] mx-auto px-6 mb-8 text-center">
            <h3 className="text-xs font-bold text-white/40 uppercase tracking-[0.25em]">
              {title}
            </h3>
          </div>
       )}

      {/* Mask to fade edges */}
      <div className="w-full overflow-hidden mask-linear-fade relative">
          <motion.div
            className="flex gap-6 w-max pl-6"
            animate={{
              x: direction === "left" ? [0, "-50%"] : ["-50%", 0],
            }}
            transition={{
              duration: speed,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {content.map(({ text, highlight, image, name, role }, index) => (
              <div
                key={index}
                className="group relative bg-[#050505]/60 backdrop-blur-xl border border-white/5 rounded-2xl p-6 md:p-8 shadow-2xl flex-shrink-0 w-[280px] md:w-[340px] flex flex-col justify-between hover:border-white/10 transition-all duration-500 hover:shadow-[0_0_50px_-20px_rgba(255,255,255,0.02)] overflow-hidden"
                style={{ height: cardHeight }}
              >
                {/* Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'0 0 2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

                {/* Subtle Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

                {/* Quote Icon */}
                <div className="absolute top-4 right-6 text-6xl text-white/[0.02] font-serif pointer-events-none select-none group-hover:text-white/10 transition-colors duration-500">
                  ”
                </div>

                <p className="text-[15px] text-neutral-300 leading-relaxed font-light relative z-10 tracking-wide">
                  {highlight
                    ? text.split(highlight).map((part, idx, arr) => (
                        <React.Fragment key={idx}>
                          {part}
                          {idx !== arr.length - 1 && (
                            <span className="text-white font-medium bg-white/5 px-1 rounded shadow-sm">
                              {highlight}
                            </span>
                          )}
                        </React.Fragment>
                      ))
                    : text}
                </p>

                <div className="flex items-center gap-4 mt-6 pt-5 border-t border-white/5 relative z-10">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-white blur-[10px] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                    <img
                      src={image}
                      alt={name}
                      width={48}
                      height={48}
                      loading="lazy"
                      decoding="async"
                      className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover border border-white/10 group-hover:border-white/20 transition-colors relative z-10 grayscale group-hover:grayscale-0"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="font-bold text-white leading-tight text-sm md:text-base tracking-wide">
                        {name}
                    </div>
                    <div className="text-neutral-500 text-xs md:text-sm mt-0.5 font-medium tracking-wide">
                        {role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonialsData: Testimonial[] = [
    // --- ROW 1 (4 items) ---
    {
      text: "O sistema se pagou no primeiro mês. Antes eu não sabia meu lucro real, agora bato o olho no painel e tenho controle financeiro total da minha estética.",
      highlight: "oficina roda sozinha",
      image: "https://i.postimg.cc/B619fgnm/COMPANY-DETAIL.jpg",
      name: "Roberto Silva",
      role: "COMPANY DETAIL",
    },
    {
      text: "O link de agendamento virou meu secretário. Parei de perder horas no WhatsApp respondendo clientes e agora foco 100% em realizar os serviços.",
      highlight: "Faturamento aumentou 30%",
      image: "https://i.postimg.cc/DwCtWDWB/ELITE-DETAILING.jpg",
      name: "Lucas M.",
      role: "ELITE DETAILING",
    },
    {
      text: "Minha recorrência aumentou 30% com o Plano Fidelidade. Os clientes adoram acompanhar o progresso pelo celular e aposentei de vez os cartõezinhos de papel.",
      highlight: "controle total",
      image: "https://i.postimg.cc/c4hzjjcG/GARAGE-DETAIL.jpg",
      name: "Ana Julia",
      role: "GARAGE DETAIL",
    },
    {
      text: "Trabalho sozinho, mas o sistema fez minha estética parecer uma franquia. A organização e as notificações automáticas passam tanta confiança que consegui até aumentar meus preços.",
      highlight: "melhor sistema",
      image: "https://i.postimg.cc/SRrgB2CX/CAR-WASH.jpg",
      name: "Phelipe P.",
      role: "'CAR WASH",
    },
    // --- ROW 2 (4 items) ---
    {
      text: "Sensacional. Odiava ter que ficar enviando mensagem no WhatsApp para saber se tinha horário disponível. Nesse sistema entrei, escolhi o horário e pronto. Em 30 segundos estava resolvido. Se toda estética fosse assim, seria perfeito.",
      highlight: "notificação na hora",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
      name: "Gustavo H.",
      role: "Dono de um Corolla Cross",
    },
    {
      text: "Achei muito chique receber a notificação no WhatsApp avisando que meu carro estava pronto, já com a placa e modelo certinho. Mostra que o lugar é organizado. Virei cliente fiel.",
      highlight: "sistema faz tudo",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100&h=100",
      name: "Mariana S.",
      role: "Cliente recorrente",
    },
    {
      text: "Adorei acompanhar meu progresso no painel. Faltam só 2 lavagens para eu ganhar a próxima grátis. É muito prático não precisar guardar papel na carteira, fica tudo no celular.",
      highlight: "trazer clientes antigos",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=100&h=100",
      name: "Roberto Jr.",
      role: "Motorista de App",
    },
    {
      text: "Muito bom poder ver o histórico do que já fiz no carro. Passo confiança de deixar meu veículo porque vejo que eles têm controle de tudo. O link de agendamento funciona super bem no celular.",
      highlight: "pagou a si mesmo",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100",
      name: "Patricia Lima",
      role: "Dona de um Honda Civic",
    },
  ];

  // Split data into two unique rows
  const topRow = testimonialsData.slice(0, 4);
  const bottomRow = testimonialsData.slice(4, 8);

  return (
    <section className="py-24 bg-transparent relative overflow-hidden border-t border-white/5" id="testimonials">
        {/* Background from Section 4 (HowItWorks) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-white/5 blur-[130px] rounded-full pointer-events-none mix-blend-screen" />
        
        {/* Enhanced Side Vignettes - Reaching almost to the middle */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-[40vw] bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-[40vw] bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent z-20 pointer-events-none" />
        
        <div className="container mx-auto px-6 text-center mb-16 relative z-10">
          <SectionBadge title="Depoimentos" className="mb-6" />
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
            Quem usa, <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 font-bold">recomenda</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto font-light">
            Junte-se a centenas de oficinas que modernizaram sua operação e escalaram seus resultados.
          </p>
        </div>

        <div className="flex flex-col gap-12 relative z-10 mb-12">
            {/* First Row */}
            <TestimonialsRow 
                testimonials={topRow} 
                title="ESTÉTICAS PARCEIRAS"
                speed={50}
                direction="left"
            />
            
            {/* Second Row */}
            <TestimonialsRow 
                testimonials={bottomRow} 
                title="CLIENTES SATISFEITOS"
                speed={60}
                direction="right"
            />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center relative z-20"
        >
           <Button
              href="https://app.carboncar.com.br/trialsingup"
              variant="gradient"
              size="lg"
              className="rounded-xl px-12 h-14 text-base shadow-[0_0_50px_-5px_rgba(220,38,38,0.5)] border border-white/30"
            >
              Quero ter esses resultados
            </Button>
        </motion.div>
    </section>
  );
};

export default Testimonials;