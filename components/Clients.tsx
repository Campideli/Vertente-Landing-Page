
import React from 'react';
import { CLIENT_LOGOS } from '../constants';

const Clients: React.FC = () => {
  const logos = [...CLIENT_LOGOS, ...CLIENT_LOGOS]; // Duplicate for seamless loop

  return (
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Quem Confia na Vertente
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Algumas das empresas que já capacitaram suas equipes conosco.
        </p>
      </div>

      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {logos.map((client, index) => (
            <li key={index}>
              <div className="h-16 w-48 flex items-center justify-center">
                <span className="text-gray-500 font-semibold text-lg text-center">{client}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Clients;
