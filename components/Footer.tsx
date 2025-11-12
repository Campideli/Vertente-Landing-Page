import React from 'react';

// SVG Icons for better visual representation
const MailIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
);

const PhoneIcon = () => (
    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-vertente-dark text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Column 1: Brand Info - Spans 3 of 5 columns */}
          <div className="md:col-span-3">
            <h3 className="text-xl font-bold text-white mb-4">Vertente Treinamentos Profissionais</h3>
            <p className="text-gray-400 max-w-md mb-6">
              Capacitando equipes para um trabalho mais seguro e eficiente com treinamentos práticos e focados em conformidade.
            </p>
          </div>
          
          {/* Column 2: Contact - Spans 2 of 5 columns */}
          <div className="md:col-span-2">
            <h4 className="font-semibold text-white tracking-wider uppercase mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <MailIcon />
                <a href="mailto:vertentetreinamentos@hotmail.com" className="hover:text-vertente-orange transition-colors duration-300 text-sm">
                  vertentetreinamentos@hotmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon />
                <div className="text-sm">
                    <a href="https://wa.me/554491671166" className="block hover:text-vertente-orange transition-colors duration-300">(44) 99167-1166 (Marcia)</a>
                    <a href="https://wa.me/5544991657185" className="block hover:text-vertente-orange transition-colors duration-300">(44) 99165-7185 (José Carlos)</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Vertente Treinamentos Profissionais. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;