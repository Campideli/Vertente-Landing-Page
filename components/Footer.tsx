import React from 'react';
import { Mail, Phone } from 'lucide-react';

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
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:vertentetreinamentos@hotmail.com" className="hover:text-vertente-orange transition-colors duration-300 text-sm">
                  vertentetreinamentos@hotmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
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