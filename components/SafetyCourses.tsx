import React, { useState } from 'react';
import { HIGHLIGHTED_SAFETY_COURSES, FULL_SAFETY_COURSES } from '../constants';

// --- SVG Icons ---
const HeightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-vertente-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3v18M16 3v18M3 8h18M3 16h18"/></svg>
);
const ConfinedSpaceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-vertente-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 3H3v6M15 21h6v-6M9 21H3v-6"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/><path d="M12 20c-1.66 0-3-1.34-3-3v-4h6v4c0 1.66-1.34 3-3 3z"/></svg>
);
const ElectricityIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-vertente-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
);
const EquipmentIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-vertente-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 14c0 2.2-1.8 4-4 4-2.2 0-4-1.8-4-4 0-2.2 1.8-4 4-4"/><path d="M14 4v10h-4"/><path d="M4 14v2h16v-2"/></svg>
);
const FireBrigadeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-vertente-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
);
const MachineryIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-vertente-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
);


const courseIcons: { [key: string]: React.ReactNode } = {
  'NR 35 - Trabalho em Altura': <HeightIcon />,
  'NR 33 - Espaço Confinado (Trabalhador, Vigia e Supervisor)': <ConfinedSpaceIcon />,
  'NR 10 - Eletricidade (Básico e SEP)': <ElectricityIcon />,
  'NR 11 - Operação de Equipamentos (Pá Carregadeira, Empilhadeira, Guindauto, etc.)': <EquipmentIcon />,
  'NR 23 - Brigada de Incêndio': <FireBrigadeIcon />,
  'NR 12 - Máquinas e Equipamentos': <MachineryIcon />,
};

const CourseCard: React.FC<{ title: string; icon: React.ReactNode }> = ({ title, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 h-full flex flex-col items-center justify-start text-center space-y-4">
      {icon}
      <h3 className="text-lg font-semibold text-gray-800 flex-grow flex items-center">{title}</h3>
    </div>
);

const SafetyCourses: React.FC = () => {
  const [isListVisible, setIsListVisible] = useState(false);

  return (
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Principais Treinamentos de Segurança (NRs)
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Cobrimos um portfólio completo de NRs para formação e reciclagem. Veja alguns dos nossos destaques:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {HIGHLIGHTED_SAFETY_COURSES.map((course, index) => (
          <CourseCard key={index} title={course} icon={courseIcons[course]} />
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={() => setIsListVisible(!isListVisible)}
          className="border-2 border-vertente-orange text-vertente-orange font-bold py-3 px-8 rounded-lg hover:bg-vertente-orange hover:text-white transition-colors duration-300"
        >
          {isListVisible ? 'Ocultar portfólio completo' : 'Ver portfólio completo de Segurança'}
        </button>
      </div>

      {isListVisible && (
        <div className="mt-16 max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Portfólio Completo de Segurança</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 text-gray-600">
            {FULL_SAFETY_COURSES.map((course, index) => (
              <li key={index} className="flex items-start">
                 <svg className="w-5 h-5 text-vertente-orange mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                {course}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SafetyCourses;
