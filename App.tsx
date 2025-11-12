
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ValueProposition from './components/ValueProposition';
import SafetyCourses from './components/SafetyCourses';
import Consulting from './components/Consulting';
import Clients from './components/Clients';
import OtherCourses from './components/OtherCourses';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <ValueProposition />
        <section id="treinamentos-seguranca" className="py-16 md:py-24 bg-gray-50 scroll-mt-20">
            <SafetyCourses />
        </section>
        <section id="consultoria" className="py-16 md:py-24 scroll-mt-20">
            <Consulting />
        </section>
        <section id="clientes" className="py-16 md:py-24 bg-gray-50 scroll-mt-20">
            <Clients />
        </section>
        <section id="outros-cursos" className="py-16 md:py-24 scroll-mt-20">
            <OtherCourses />
        </section>
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;