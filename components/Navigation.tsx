import React, { useState, useEffect, useRef } from 'react';

interface AnimatedNavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const AnimatedNavLink: React.FC<AnimatedNavLinkProps> = ({ href, children, onClick }) => {
  const defaultTextColor = 'text-gray-400';
  const hoverTextColor = 'text-white';
  const textSizeClass = 'text-sm font-medium';
  // Increased height to h-6 (24px) to prevent cutting off descenders (g, j, p, q, y)
  const heightClass = 'h-6';
  const leadingClass = 'leading-6';

  return (
    <a 
        href={href} 
        onClick={onClick}
        className={`group relative overflow-hidden ${heightClass} inline-block ${textSizeClass}`}
        aria-label={`Navegar para seção ${children}`}
    >
      <div className="flex flex-col transition-transform duration-300 ease-out transform group-hover:-translate-y-1/2 w-full">
        <span className={`${defaultTextColor} whitespace-nowrap ${leadingClass} block`}>{children}</span>
        <span className={`${hoverTextColor} whitespace-nowrap ${leadingClass} block`}>{children}</span>
      </div>
    </a>
  );
};

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [headerShapeClass, setHeaderShapeClass] = useState('rounded-full');
  const shapeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (shapeTimeoutRef.current) {
      clearTimeout(shapeTimeoutRef.current);
    }

    if (isOpen) {
      setHeaderShapeClass('rounded-3xl');
    } else {
      shapeTimeoutRef.current = setTimeout(() => {
        setHeaderShapeClass('rounded-full');
      }, 300);
    }

    return () => {
      if (shapeTimeoutRef.current) {
        clearTimeout(shapeTimeoutRef.current);
      }
    };
  }, [isOpen]);

  const logoElement = (
    <div className="flex items-center gap-2 select-none cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
       {/* SUBSTITUA O LINK ABAIXO PELA URL DA SUA LOGO */}
       <img 
         src="https://i.postimg.cc/pdKBVMwL/carboncarlogo.png" 
         alt="CarbonCar - Página Inicial" 
         className="h-6 w-auto object-contain" 
       />
    </div>
  );

  const navLinksData = [
    { label: 'Como funciona', href: '#how-it-works' },
    { label: 'Diferencial', href: '#differentiator' },
    { label: 'Planos', href: '#pricing' },
  ];

  const ctaButton = (
    <div className="relative group w-full sm:w-auto">
       <div className="absolute inset-0 -m-2 rounded-full
                     hidden sm:block
                     bg-red-600
                     opacity-20 filter blur-lg pointer-events-none
                     transition-all duration-300 ease-out
                     group-hover:opacity-30 group-hover:blur-xl group-hover:-m-3"></div>
       <a 
         href="https://app.carboncar.com.br/trialsingup"
         className="relative z-10 px-6 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-red-700 via-red-800 to-red-900 rounded-full hover:from-red-600 hover:to-red-800 transition-all duration-200 w-full sm:w-auto shadow-lg shadow-red-900/50 active:scale-95 inline-flex items-center justify-center"
         aria-label="Começar teste gratuito do CarbonCar"
       >
         Começar Teste Grátis
       </a>
    </div>
  );

  return (
    <header 
      role="banner"
      className={`absolute top-6 left-1/2 transform -translate-x-1/2 z-50
                       flex flex-col items-center
                       pl-6 pr-6 py-3 backdrop-blur-2xl
                       ${headerShapeClass}
                       border border-white/5 bg-[#121212]/75
                       w-[calc(100%-2rem)] max-w-4xl sm:w-auto
                       transition-[border-radius,height] duration-300 ease-in-out shadow-[0_8px_32px_rgba(0,0,0,0.5)]`}
    >

      <div className="flex items-center justify-between w-full gap-x-6 sm:gap-x-12">
        <div className="flex items-center shrink-0">
           {logoElement}
        </div>

        <nav role="navigation" aria-label="Menu Principal" className="hidden lg:flex items-center space-x-8">
          {navLinksData.map((link) => (
            <AnimatedNavLink 
                key={link.href} 
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
            >
              {link.label}
            </AnimatedNavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3 shrink-0">
          {ctaButton}
        </div>

        <button 
          className="lg:hidden flex items-center justify-center w-8 h-8 text-gray-300 focus:outline-none" 
          onClick={toggleMenu} 
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Fechar Menu' : 'Abrir Menu'}
        >
          {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          )}
        </button>
      </div>

      <div 
        id="mobile-menu"
        className={`lg:hidden flex flex-col items-center w-full transition-all ease-in-out duration-300 overflow-hidden
                       ${isOpen ? 'max-h-[1000px] opacity-100 pt-8 pb-4' : 'max-h-0 opacity-0 pt-0 pointer-events-none'}`}
      >
        <nav className="flex flex-col items-center space-y-6 text-base w-full mb-8">
          {navLinksData.map((link) => (
            <a 
                key={link.href} 
                href={link.href} 
                onClick={(e) => handleScroll(e, link.href)}
                className="text-gray-300 hover:text-white transition-colors w-full text-center font-medium text-lg"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col items-center space-y-4 w-full px-4">
          {ctaButton}
        </div>
      </div>
    </header>
  );
}