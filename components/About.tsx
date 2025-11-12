import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="order-2 lg:order-1">
            <img 
              src="./images/Empilhadeira.png" 
              alt="Capacete de segurança" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
              style={{ maxHeight: '45090px' }}
            />
          </div>
          {/* Text Column */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sobre a Vertente
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Fundada sobre o princípio de que a <strong className="text-vertente-orange">segurança real</strong> vem do conhecimento prático, a Vertente Treinamentos Profissionais se dedica a capacitar trabalhadores para os desafios diários do ambiente industrial.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nossa missão é ir além da simples conformidade. Criamos experiências de aprendizado que são envolventes, relevantes e, acima de tudo, eficazes, garantindo que cada colaborador retorne ao seu posto mais preparado e seguro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;