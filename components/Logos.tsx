import React from "react";
import SectionBadge from "./SectionBadge";

// --- CONFIGURAÇÃO DOS LOGOS ---
// Substitua as URLs abaixo pelas imagens das empresas que utilizam seu sistema.
// Recomendado: Imagens em formato SVG ou PNG com fundo transparente.
const CLIENT_LOGOS = [
  {
    id: "client-1",
    description: "Elite Detailing - Estética Automotiva Parceira",
    image: "https://i.postimg.cc/DwCtWDWB/ELITE-DETAILING.jpg",
    className: "h-16 md:h-20 w-auto",
  },
  {
    id: "client-2",
    description: "Company Detail - Centro de Estética Automotiva",
    image: "https://i.postimg.cc/B619fgnm/COMPANY-DETAIL.jpg",
    className: "h-16 md:h-20 w-auto",
  },
  {
    id: "client-3",
    description: "Garage Detail - Lavagem e Polimento",
    image: "https://i.postimg.cc/c4hzjjcG/GARAGE-DETAIL.jpg",
    className: "h-16 md:h-20 w-auto",
  },
  {
    id: "client-4",
    description: "Car Wash Premium - Lava Rápido",
    image: "https://i.postimg.cc/SRrgB2CX/CAR-WASH.jpg",
    className: "h-16 md:h-20 w-auto",
  },
  {
    id: "client-5",
    description: "Genesis Auto Spa - Detailing Automotivo",
    image: "https://i.postimg.cc/DZDvq08g/GENESIS-AUTO-SPA.jpg",
    className: "h-16 md:h-20 w-auto",
  },
  {
    id: "client-6",
    description: "Quality Auto Detailing - Vitrificação e Proteção",
    image: "https://i.postimg.cc/ThvT4sjy/QUALITY-AUTO-DETAILING.jpg",
    className: "h-16 md:h-20 w-auto",
  },
  {
    id: "client-7",
    description: "Auto Detail - Estética Automotiva Profissional",
    image: "https://i.postimg.cc/BnQv9r9j/AUTO-DETAIL.jpg",
    className: "h-16 md:h-20 w-auto",
  },
  {
    id: "client-8",
    description: "Orbital - Centro de Detalhamento Automotivo",
    image: "https://i.postimg.cc/NFcgNVkG/ORBITAL.jpg",
    className: "h-16 md:h-20 w-auto",
  },
];

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  logos = CLIENT_LOGOS,
}: Logos3Props) => {
  return (
    // Aumentado padding para py-32 para dar mais destaque
    <section className="py-32 bg-transparent overflow-hidden border-t border-white/5 relative z-20">
      
      {/* Título Padronizado igual às outras seções */}
      <div className="container mx-auto px-6 flex flex-col items-center text-center mb-20">
        <SectionBadge title="Market Share" className="mb-6" />
        
        <h2 className="font-display text-4xl md:text-6xl font-medium text-white tracking-tight leading-[1.05]">
          Confiado por grandes <br/> <span className="text-neutral-500">estéticas automotivas</span>
        </h2>
      </div>
      
      <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
        {/* Premium Fade Masks - matched to transparent/dark theme */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-48 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 md:w-48 bg-gradient-to-l from-black/90 via-black/50 to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-max animate-scroll [will-change:transform] hover:[animation-play-state:paused]">
          {/* First set of logos */}
          <div className="flex items-center gap-24 px-12">
            {logos.map((logo) => (
              <div key={logo.id} className="group flex items-center justify-center transition-all duration-300">
                <img
                  src={logo.image}
                  alt={logo.description}
                  className={`${logo.className} opacity-80 group-hover:opacity-100 transition-all duration-500 mix-blend-screen object-contain hover:scale-110`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center gap-24 px-12">
            {logos.map((logo) => (
              <div key={`${logo.id}-duplicate`} className="group flex items-center justify-center transition-all duration-300">
                <img
                  src={logo.image}
                  alt={logo.description}
                  className={`${logo.className} opacity-80 group-hover:opacity-100 transition-all duration-500 mix-blend-screen object-contain hover:scale-110`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
          
           {/* Triplicate set for wide screens */}
           <div className="flex items-center gap-24 px-12">
            {logos.map((logo) => (
              <div key={`${logo.id}-triplicate`} className="group flex items-center justify-center transition-all duration-300">
                <img
                  src={logo.image}
                  alt={logo.description}
                  className={`${logo.className} opacity-80 group-hover:opacity-100 transition-all duration-500 mix-blend-screen object-contain hover:scale-110`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logos3;