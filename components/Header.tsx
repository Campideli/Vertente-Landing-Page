import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { WHATSAPP_LINK } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#treinamentos-seguranca', label: 'Treinamentos de Segurança' },
    { href: '#consultoria', label: 'Consultoria' },
    { href: '#outros-cursos', label: 'Outros Cursos' },
    { href: '#clientes', label: 'Clientes' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1); // remove '#'
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu on click
  };
  
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex flex-wrap items-center justify-between gap-y-2">
          <a href="#" onClick={handleLogoClick} className="text-lg sm:text-xl font-bold text-vertente-orange hover:text-orange-600 transition-colors whitespace-nowrap">
            Vertente Treinamentos
          </a>
          {/* Menu Desktop: só aparece em lg ou maior */}
          <nav className="hidden lg:flex flex-wrap items-center gap-x-4 xl:gap-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-600 hover:text-vertente-orange font-medium transition-colors whitespace-nowrap px-2 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-x-2">
            {/* Botão só aparece em lg ou maior */}
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:inline-block bg-vertente-orange text-white font-bold py-2 px-4 sm:px-6 rounded-lg hover:bg-orange-600 transition-transform transform hover:scale-105 whitespace-nowrap"
            >
              Solicite uma proposta
            </a>
            {/* Botão de menu mobile/tablet: aparece em telas menores que lg */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-700 focus:outline-none"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
              whileTap={{ scale: 0.85 }}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
        {/* Menu mobile/tablet: aparece em telas menores que lg */}
        <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop escurecido */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            {/* Menu lateral animado */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-80 max-w-full h-full bg-white z-50 shadow-2xl rounded-l-xl p-6 flex flex-col"
            >
              <button
                onClick={() => setIsMenuOpen(false)}
                className="self-end mb-6 text-gray-700 focus:outline-none"
                aria-label="Fechar menu"
              >
                <motion.span
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </motion.span>
              </button>
              <nav className="flex flex-col space-y-4 mt-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.href} 
                    href={link.href} 
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-gray-600 hover:text-vertente-orange font-medium transition-colors text-center"
                  >
                    {link.label}
                  </a>
                ))}
                 <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-vertente-orange text-white text-center font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-transform transform hover:scale-105"
                >
                  Solicite uma proposta
                </a>
              </nav>
            </motion.div>
          </>
        )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;