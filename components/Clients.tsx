import React, { useState } from 'react';

const Clients: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  const clientLogos = [
    { name: 'USINA SANTA TEREZINHA', logo: '/images/Usina-logo.png' },
    { name: 'SPRAYTEC', logo: '/images/Spraytec-logo.png' },
    { name: 'FORTGREEN', logo: '/images/Fortgreen-logo.png' },
    { name: 'PERFILEVE', logo: '/images/Perfileve-logo.png' },
    { name: 'RODOFAIXA', logo: '/images/Rodofaixa-logo.webp' },
    { name: 'CPA ARMAZÉNS GERAIS', logo: '/images/Cpa-logo.webp' },
    { name: 'PASSAFARO', logo: '/images/Passafaro-logo.png' },
    { name: 'SÍNTESE AGRO SCIENCE', logo: '/images/Sintese-logo.png' },
    { name: 'SURYA DENTAL', logo: '/images/Surya-logo.jpg' },
    { name: 'POSTELUZ', logo: '/images/Posteluz-logo.png' },
    { name: 'SUPERBAC', logo: '/images/Superbac-logo.webp' },
  ];

  const enlargedLogos = [
    'USINA SANTA TEREZINHA',
    'SPRAYTEC',
    'FORTGREEN',
    'CPA ARMAZÉNS GERAIS',
    'SURYA DENTAL',
  ];

  const LogoCard: React.FC<{ client: { name: string; logo: string } }> = ({ client }) => (
    <div className="flex-shrink-0 mx-4">
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 h-32 w-48 flex items-center justify-center hover:shadow-lg transition-shadow duration-300">
        <img 
          src={client.logo} 
          alt={client.name}
          className={
            `${enlargedLogos.includes(client.name) ? 'max-h-30' : 'max-h-20'} max-w-full w-auto object-contain`
          }
          title={client.name}
        />
      </div>
    </div>
  );

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

      <div
        className="relative w-full overflow-hidden"
        style={{
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0px, black 64px, black calc(100% - 64px), transparent 100%)',
          maskImage:
            'linear-gradient(to right, transparent 0px, black 64px, black calc(100% - 64px), transparent 100%)',
        }}
      >
        <div 
          className="flex"
          style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Primeiro conjunto - animado */}
          <div className="flex animate-infinite-scroll">
            {clientLogos.map((client, index) => (
              <LogoCard key={`original-${index}`} client={client} />
            ))}
          </div>
          {/* Segundo conjunto - animado (clone para continuidade) */}
          <div className="flex animate-infinite-scroll" aria-hidden="true">
            {clientLogos.map((client, index) => (
              <LogoCard key={`duplicate-${index}`} client={client} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
