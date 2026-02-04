import React, { useState } from "react";
import { Instagram, WhatsApp, Mail } from "./Icons";
import LegalModal from "./LegalModal";

const Footer = () => {
  const [activeModal, setActiveModal] = useState<'terms' | 'privacy' | null>(null);

  const termsContent = (
    <div className="space-y-6">
      <p><strong>Última atualização: Outubro de 2024</strong></p>
      
      <section>
        <h4 className="text-white font-bold mb-2 text-base">1. Aceitação dos Termos</h4>
        <p>Ao acessar e usar o CarbonCar, você concorda em cumprir e ficar vinculado aos seguintes termos e condições de uso. Se você não concordar com estes termos, não deverá utilizar nossos serviços.</p>
      </section>

      <section>
        <h4 className="text-white font-bold mb-2 text-base">2. Descrição do Serviço</h4>
        <p>O CarbonCar é uma plataforma de gestão SaaS (Software as a Service) projetada para estéticas automotivas. Fornecemos ferramentas para agendamento, gestão financeira e comunicação com clientes.</p>
      </section>

      <section>
        <h4 className="text-white font-bold mb-2 text-base">3. Contas e Segurança</h4>
        <p>Você é responsável por manter a confidencialidade de sua senha e conta. O CarbonCar não se responsabiliza por qualquer perda ou dano decorrente do não cumprimento desta obrigação de segurança.</p>
      </section>

      <section>
        <h4 className="text-white font-bold mb-2 text-base">4. Pagamentos e Cancelamento</h4>
        <p>Os serviços são oferecidos mediante assinatura (mensal ou anual). O cancelamento pode ser feito a qualquer momento, interrompendo a renovação automática para o ciclo seguinte. Não oferecemos reembolsos parciais para períodos não utilizados.</p>
      </section>

      <section>
        <h4 className="text-white font-bold mb-2 text-base">5. Propriedade Intelectual</h4>
        <p>Todo o conteúdo, design, gráficos e códigos relacionados ao CarbonCar são protegidos por direitos autorais e propriedade intelectual. A reprodução ou redistribuição não autorizada é estritamente proibida.</p>
      </section>
      
      <section>
        <h4 className="text-white font-bold mb-2 text-base">6. Limitação de Responsabilidade</h4>
        <p>O CarbonCar não será responsável por quaisquer danos indiretos, incidentais ou consequentes decorrentes do uso ou da incapacidade de usar o serviço, incluindo perda de lucros ou dados.</p>
      </section>
    </div>
  );

  const privacyContent = (
    <div className="space-y-6">
      <p><strong>Última atualização: Outubro de 2024</strong></p>
      
      <section>
        <h4 className="text-white font-bold mb-2 text-base">1. Coleta de Informações</h4>
        <p>Coletamos informações que você nos fornece diretamente ao se registrar, como nome da empresa, e-mail, telefone e dados de pagamento. Também coletamos dados de uso automaticamente através de cookies e logs do servidor.</p>
      </section>

      <section>
        <h4 className="text-white font-bold mb-2 text-base">2. Uso das Informações</h4>
        <p>Utilizamos seus dados para operar e manter o serviço, processar pagamentos, enviar comunicações importantes sobre a conta e melhorar a funcionalidade da plataforma. Não vendemos seus dados pessoais a terceiros.</p>
      </section>

      <section>
        <h4 className="text-white font-bold mb-2 text-base">3. Dados dos Seus Clientes</h4>
        <p>Os dados dos clientes finais que você insere no CarbonCar pertencem a você. Nós atuamos apenas como processadores desses dados. Garantimos a confidencialidade e segurança dessas informações, acessando-as apenas quando estritamente necessário para suporte técnico.</p>
      </section>

      <section>
        <h4 className="text-white font-bold mb-2 text-base">4. Segurança de Dados</h4>
        <p>Implementamos medidas de segurança robustas, incluindo criptografia SSL, firewalls e controles de acesso rigorosos para proteger suas informações contra acesso não autorizado.</p>
      </section>

      <section>
        <h4 className="text-white font-bold mb-2 text-base">5. Seus Direitos (LGPD)</h4>
        <p>Você tem o direito de acessar, corrigir ou excluir seus dados pessoais armazenados em nossos sistemas. Para exercer esses direitos, entre em contato com nosso suporte.</p>
      </section>
    </div>
  );

  return (
    <>
      <footer className="relative z-20 bg-transparent border-t border-white/5 pt-16 pb-8">
        {/* Background Gradient Effect - White/Gray */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[100px] bg-white/5 blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-12">
            
            {/* Logo & Description */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-2">
                 {/* SUBSTITUA O LINK ABAIXO PELA URL DA SUA LOGO */}
                 <img 
                   src="https://i.postimg.cc/pdKBVMwL/carboncarlogo.png" 
                   alt="CarbonCar - Software de Gestão para Estética Automotiva" 
                   className="h-8 w-auto object-contain"
                 />
              </div>
              <p className="text-neutral-500 text-sm text-center md:text-left max-w-xs font-light">
                Elevando o padrão de gestão para estéticas automotivas em todo o Brasil.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                aria-label="Instagram"
                className="w-12 h-12 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-800 hover:border-white/30 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-white/10"
              >
                <Instagram size={20} />
              </a>
              
              <a 
                href="#" 
                aria-label="WhatsApp"
                className="w-12 h-12 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-800 hover:border-white/30 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-white/10"
              >
                <WhatsApp size={20} />
              </a>

              <a 
                href="mailto:contato@carboncar.com" 
                aria-label="Email"
                className="w-12 h-12 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-800 hover:border-white/30 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-white/10"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Separator */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

          {/* Copyright & Links */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600 font-medium">
            <p>© 2024 CarbonCar Tecnologia. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <button 
                onClick={() => setActiveModal('terms')}
                className="hover:text-neutral-400 transition-colors focus:outline-none"
              >
                Termos de Uso
              </button>
              <button 
                onClick={() => setActiveModal('privacy')}
                className="hover:text-neutral-400 transition-colors focus:outline-none"
              >
                Privacidade
              </button>
            </div>
          </div>
        </div>
      </footer>

      <LegalModal 
        isOpen={activeModal === 'terms'} 
        onClose={() => setActiveModal(null)} 
        title="Termos de Uso"
        content={termsContent}
      />

      <LegalModal 
        isOpen={activeModal === 'privacy'} 
        onClose={() => setActiveModal(null)} 
        title="Política de Privacidade"
        content={privacyContent}
      />
    </>
  );
};

export default Footer;