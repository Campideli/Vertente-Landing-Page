
import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const Consulting: React.FC = () => {
  return (
    <div className="container mx-auto px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Soluções Completas em Assessoria e Consultoria
        </h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Além dos treinamentos, oferecemos soluções em Assessoria e Consultoria em Segurança do Trabalho, Qualidade e Meio Ambiente. Isso inclui elaboração de laudos, acompanhamento de perícias, especificações técnicas e demais temas pertinentes.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-vertente-orange text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition-transform transform hover:scale-105"
        >
          Fale conosco
        </a>
      </div>
    </div>
  );
};

export default Consulting;
