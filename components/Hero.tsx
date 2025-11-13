import React from 'react';
import { motion } from 'framer-motion';
import { WHATSAPP_LINK } from '../constants';
import { getImagePath } from '../utils';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center bg-white px-6">
       <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: `url('${getImagePath('Extintor.png')}')`, filter: "grayscale(100%) blur(7px)"}}></div>
       <motion.div
         initial={{ opacity: 0, y: 40 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1, ease: 'easeOut' }}
         className="relative z-10 max-w-4xl mx-auto"
       >
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
          Especialistas em Treinamentos de <span className="text-vertente-orange">Segurança do Trabalho.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Capacite sua equipe com treinamentos in company focados nas Normas Regulamentadoras (NRs). Oferecemos vivência prática para garantir o aprendizado real e a conformidade da sua operação.
        </p>
        <motion.a 
          href={WHATSAPP_LINK} 
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block bg-vertente-orange text-white font-bold text-lg py-4 px-10 rounded-lg shadow-lg hover:bg-orange-600 transition-transform"
        >
          Fale com um especialista
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
