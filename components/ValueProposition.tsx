import React from 'react';
import { Users, Sparkles, ArrowLeftRight } from 'lucide-react';
import { motion } from 'framer-motion';

const PersonalizedIcon = () => (
    <div className="bg-orange-100 text-vertente-orange p-4 rounded-full inline-block">
        <Users className="w-8 h-8" />
    </div>
);

const QualityIcon = () => (
    <div className="bg-orange-100 text-vertente-orange p-4 rounded-full inline-block">
        <Sparkles className="w-8 h-8" />
    </div>
);

const FlexibilityIcon = () => (
    <div className="bg-orange-100 text-vertente-orange p-4 rounded-full inline-block">
        <ArrowLeftRight className="w-8 h-8" />
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
              <div className="bg-white/70 backdrop-blur-lg p-8 rounded-xl shadow-inner shadow-lg border border-gray-200 transition-all duration-300 transform hover:shadow-2xl hover:-translate-y-2 hover:scale-105">
                <PersonalizedIcon />
                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Atendimento Personalizado</h3>
                <p className="text-gray-600 leading-relaxed">
                  Entendemos a sua necessidade e montamos o treinamento ideal para a sua equipe e operação.
                </p>
              </div>
              {/* Card 2 */}
              <div className="bg-white/70 backdrop-blur-lg p-8 rounded-xl shadow-inner shadow-lg border border-gray-200 transition-all duration-300 transform hover:shadow-2xl hover:-translate-y-2 hover:scale-105">
                <QualityIcon />
                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Qualidade e Vivência Prática</h3>
                <p className="text-gray-600 leading-relaxed">
                  Instrutores experientes que trazem o dia a dia do mercado para a sala de aula.
                </p>
              </div>
              {/* Card 3 */}
              <div className="bg-white/70 backdrop-blur-lg p-8 rounded-xl shadow-inner shadow-lg border border-gray-200 transition-all duration-300 transform hover:shadow-2xl hover:-translate-y-2 hover:scale-105">
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
