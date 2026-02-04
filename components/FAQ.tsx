import React, { useEffect, useState } from "react";
import SectionBadge from "./SectionBadge";
import Button from "./Button";

const faqs = [
  {
    question: "O CarbonCar é para qualquer estética?",
    answer: "Sim. O sistema CarbonCar foi feito exclusivamente para atender a demanda de estéticas automotivas. Tendo como objetivo principal aumentar o faturamento e sua base de clientes.",
    meta: "Público Alvo",
  },
  {
    question: "O que torna o CarbonCar diferente de agendas comuns?",
    answer: "O CarbonCar não é uma agenda. É um sistema operacional que conecta o agendamento do cliente à capacidade real da sua operação. Se não houver box ou tempo disponível, o horário simplesmente não aparece.",
    meta: "Diferencial",
  },
  {
    question: "O CarbonCar promete mais clientes?",
    answer: "Não. Ele promete ordem operacional. O ganho vem de parar de perder dinheiro com overbooking, atrasos e desorganização — e isso aparece rápido.",
    meta: "Resultado",
  },
  {
    question: "O plano Start é suficiente?",
    answer: "Só se você quiser apenas uma agenda. Ele não mostra lucro, não fideliza clientes e não constrói reputação.",
    meta: "Planos",
  },
  {
    question: "O cliente pode forçar encaixe ou agendar fora do limite?",
    answer: "Não. O sistema bloqueia qualquer tentativa de agendamento fora da capacidade definida pela estética. O CarbonCar foi criado para impedir erros, não para agradar todo cliente.",
    meta: "Controle",
  },
  {
    question: "Isso melhora a imagem da estética?",
    answer: "Muito. O cliente enxerga sua estética como uma operação profissional, organizada e premium.",
    meta: "Branding",
  },
];

const palettes = {
  softDark: {
    surface: "bg-transparent text-neutral-100", 
    panel: "bg-[#050505]/60 backdrop-blur-xl", // Darker panel with stronger blur
    border: "border-white/10",
    heading: "text-white",
    muted: "text-neutral-400",
    iconRing: "border-white/20",
    iconSurface: "bg-white/5",
    icon: "text-white",
    toggle: "border-white/20 text-white",
    toggleSurface: "bg-white/10",
    glow: "rgba(255, 255, 255, 0.1)", // White glow
    aurora: "radial-gradient(ellipse 50% 100% at 50% 0%, rgba(255, 255, 255, 0.05), transparent 70%)", // White aurora
    shadow: "shadow-[0_36px_140px_-60px_rgba(10,10,10,0.95)]",
    overlay: "linear-gradient(130deg, rgba(255,255,255,0.02) 0%, transparent 65%)",
  },
};

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    setHasEntered(true);
  }, []);

  const palette = palettes.softDark;
  const toggleQuestion = (index: number) => setActiveIndex((prev) => (prev === index ? -1 : index));

  const setCardGlow = (event: React.MouseEvent<HTMLLIElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--faq-x", `${event.clientX - rect.left}px`);
    target.style.setProperty("--faq-y", `${event.clientY - rect.top}px`);
  };

  const clearCardGlow = (event: React.MouseEvent<HTMLLIElement>) => {
    const target = event.currentTarget;
    target.style.removeProperty("--faq-x");
    target.style.removeProperty("--faq-y");
  };

  return (
    <div className={`relative w-full overflow-hidden transition-colors duration-700 ${palette.surface}`} id="faq">
      <div className="absolute inset-0 z-0" style={{ background: palette.aurora }} />
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-80"
        style={{ background: palette.overlay, mixBlendMode: "screen" }}
      />

      <section
        className={`relative z-10 mx-auto flex max-w-4xl flex-col gap-12 px-6 py-16 lg:max-w-5xl lg:px-12 transition-all duration-700 ${
          hasEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <SectionBadge title="Dúvidas Frequentes" className="w-fit" />

        <header className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            {/* SEO FIX: Changed h1 to h2. There should only be one h1 per page (in Hero). */}
            <h2 className={`text-4xl font-semibold leading-tight md:text-5xl ${palette.heading}`}>
              Tire suas dúvidas
            </h2>
            <p className={`max-w-xl text-base ${palette.muted}`}>
              Entenda como o CarbonCar se adapta ao seu negócio e transforma sua operação.
            </p>
          </div>
        </header>

        <ul className="space-y-4">
          {faqs.map((item, index) => {
            const open = activeIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-trigger-${index}`;

            return (
              <li
                key={item.question}
                className={`group relative overflow-hidden rounded-3xl border transition-all duration-500 hover:-translate-y-0.5 focus-within:-translate-y-0.5 ${palette.border} ${palette.panel} ${palette.shadow}`}
                onMouseMove={setCardGlow}
                onMouseLeave={clearCardGlow}
              >
                <div
                  className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
                    open ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                  style={{
                    background: `radial-gradient(240px circle at var(--faq-x, 50%) var(--faq-y, 50%), ${palette.glow}, transparent 70%)`,
                  }}
                />

                <button
                  type="button"
                  id={buttonId}
                  aria-controls={panelId}
                  aria-expanded={open}
                  onClick={() => toggleQuestion(index)}
                  style={{ "--faq-outline": "rgba(255,255,255,0.35)" } as React.CSSProperties}
                  className="relative flex w-full items-start gap-6 px-8 py-7 text-left transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--faq-outline)]"
                >
                  <span
                    className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-500 group-hover:scale-105 ${palette.iconRing} ${palette.iconSurface}`}
                  >
                    <span
                      className={`pointer-events-none absolute inset-0 rounded-full border opacity-30 ${
                        palette.iconRing
                      } ${open ? "animate-ping" : ""}`}
                    />
                    <svg
                      className={`relative h-5 w-5 transition-transform duration-500 ${palette.icon} ${open ? "rotate-45" : ""}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 5v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>

                  <div className="flex flex-1 flex-col gap-4">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                      <h3 className={`text-lg font-medium leading-tight sm:text-xl ${palette.heading}`}>
                        {item.question}
                      </h3>
                      {item.meta && (
                        <span
                          className={`inline-flex w-fit items-center rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.35em] transition-opacity duration-300 sm:ml-auto ${palette.border} ${palette.muted}`}
                        >
                          {item.meta}
                        </span>
                      )}
                    </div>

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={`overflow-hidden text-sm leading-relaxed transition-[max-height] duration-500 ease-out ${
                        open ? "max-h-64" : "max-h-0"
                      } ${palette.muted}`}
                    >
                      <p className="pr-2">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="flex justify-center mt-12">
           <Button
              href="https://app.carboncar.com.br/trialsingup"
              variant="gradient"
              size="lg"
              className="rounded-xl px-12 h-14 text-base shadow-[0_0_40px_-5px_rgba(220,38,38,0.5)]"
            >
              Começar teste grátis por 7 dias
            </Button>
        </div>
      </section>
    </div>
  );
}

export default FAQ;