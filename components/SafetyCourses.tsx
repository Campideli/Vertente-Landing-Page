import React, { useState } from 'react';
import { Users2, Zap, Container, Flame, Settings, CheckCircle, Antenna, FireExtinguisher, HardHat } from 'lucide-react';
import { HIGHLIGHTED_SAFETY_COURSES, FULL_SAFETY_COURSES } from '../constants';

// --- Icon Components ---
const HeightIcon = () => (
    <Antenna className="w-12 h-12 text-vertente-orange" strokeWidth={1.5} />
);
const ConfinedSpaceIcon = () => (
    <HardHat className="w-12 h-12 text-vertente-orange" strokeWidth={1.5} />
);
const ElectricityIcon = () => (
    <Zap className="w-12 h-12 text-vertente-orange" strokeWidth={1.5} />
);
const EquipmentIcon = () => (
    <Container className="w-12 h-12 text-vertente-orange" strokeWidth={1.5} />
);
const FireBrigadeIcon = () => (
    <FireExtinguisher className="w-12 h-12 text-vertente-orange" strokeWidth={1.5} />
);
const MachineryIcon = () => (
    <Settings className="w-12 h-12 text-vertente-orange" strokeWidth={1.5} />
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {FULL_SAFETY_COURSES.map((course, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-vertente-orange flex-shrink-0" />
                    <span className="text-gray-800 font-semibold">{course}</span>
                  </div>
                ))}
              </div>
          </div>
      )}
    </div>
  );
};

export default SafetyCourses;
