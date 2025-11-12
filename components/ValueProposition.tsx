
import React from 'react';

const PersonalizedIcon = () => (
    <div className="bg-orange-100 text-vertente-orange p-4 rounded-full inline-block">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm-9 5a2 2 0 100-4 2 2 0 000 4z"></path></svg>
    </div>
);

const QualityIcon = () => (
    <div className="bg-orange-100 text-vertente-orange p-4 rounded-full inline-block">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-12v4m-2-2h4m5 4v4m-2-2h4M17 3l-1.5 1.5M5 21l1.5-1.5M17 21l-1.5-1.5M5 3l1.5 1.5M9 4.5a.5.5 0 11-1 0 .5.5 0 011 0zM16 4.5a.5.5 0 11-1 0 .5.5 0 011 0zM16 19.5a.5.5 0 11-1 0 .5.5 0 011 0zM9 19.5a.5.5 0 11-1 0 .5.5 0 011 0z"></path></svg>
    </div>
);

const FlexibilityIcon = () => (
    <div className="bg-orange-100 text-vertente-orange p-4 rounded-full inline-block">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
    </div>
);


const ValueProposition: React.FC = () => {
  return (
    <>
      {/* Section 1: Our Differentiators (Cards) */}
      <section id="diferenciais" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a Vertente?
            </h2>
            <p className="text-lg text-gray-600">
              Nossa abordagem é focada em resultados, combinando expertise técnica com uma entrega flexível e personalizada.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 transform">
              <PersonalizedIcon />
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Atendimento Personalizado</h3>
              <p className="text-gray-600 leading-relaxed">
                Entendemos a sua necessidade e montamos o treinamento ideal para a sua equipe e operação.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 transform">
              <QualityIcon />
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Qualidade e Vivência Prática</h3>
              <p className="text-gray-600 leading-relaxed">
                Instrutores experientes que trazem o dia a dia do mercado para a sala de aula.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 transform">
              <FlexibilityIcon />
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Flexibilidade Total</h3>
              <p className="text-gray-600 leading-relaxed">
                Treinamentos in company, adaptados à sua agenda e local de preferência.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ValueProposition;
