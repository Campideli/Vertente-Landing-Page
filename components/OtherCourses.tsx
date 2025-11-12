import React from 'react';
import { CheckCircle, Users, Monitor } from 'lucide-react';
import { QUALITY_COURSES, MANAGEMENT_COURSES, IT_COURSES } from '../constants';

interface CourseCategoryProps {
  title: string;
  courses: string[];
  // Fix: Changed JSX.Element to React.ReactNode to resolve namespace error.
  icon: React.ReactNode;
}

const CourseCategory: React.FC<CourseCategoryProps> = ({ title, courses, icon }) => (
  <div className="bg-white/70 backdrop-blur-lg p-8 rounded-lg shadow-inner shadow-lg border border-gray-200 transition-all duration-300 transform hover:shadow-2xl hover:-translate-y-2 hover:scale-105">
    <div className="flex items-center mb-4">
        <div className="bg-orange-100 text-vertente-orange p-3 rounded-full mr-4">
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
    </div>
    <ul className="space-y-2 text-gray-600">
      {courses.map((course, index) => (
        <li key={index} className="flex">
          <span className="text-vertente-orange mr-2">✓</span>
          {course}
        </li>
      ))}
    </ul>
  </div>
);

const OtherCourses: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Soluções em Qualidade, Gestão e Informática
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CourseCategory 
            title="Qualidade" 
            courses={QUALITY_COURSES} 
            icon={<CheckCircle className="w-6 h-6" />}
        />
        <CourseCategory 
            title="Gestão" 
            courses={MANAGEMENT_COURSES} 
            icon={<Users className="w-6 h-6" />}
        />
        <CourseCategory 
            title="Informática" 
            courses={IT_COURSES} 
            icon={<Monitor className="w-6 h-6" />}
        />
      </div>
    </div>
  );
};

export default OtherCourses;