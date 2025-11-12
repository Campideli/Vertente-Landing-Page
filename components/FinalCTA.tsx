
import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const FinalCTA: React.FC = () => {
  return (
    <section className="bg-vertente-orange py-16 md:py-20 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Pronto para Garantir a Segurança da sua Equipe?
        </h2>
        <p className="text-lg md:text-xl text-orange-100 max-w-3xl mx-auto mb-8">
          Entre em contato conosco e vamos preparar o treinamento de acordo com a sua necessidade!
        </p>
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-vertente-orange font-bold text-lg py-4 px-10 rounded-lg shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105"
        >
          Solicite uma proposta agora
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;
