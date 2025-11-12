import React from 'react';
import { QUALITY_COURSES, MANAGEMENT_COURSES, IT_COURSES } from '../constants';

interface CourseCategoryProps {
  title: string;
  courses: string[];
  // Fix: Changed JSX.Element to React.ReactNode to resolve namespace error.
  icon: React.ReactNode;
}

const CourseCategory: React.FC<CourseCategoryProps> = ({ title, courses, icon }) => (
  <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
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
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}
        />
        <CourseCategory 
            title="Gestão" 
            courses={MANAGEMENT_COURSES} 
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>}
        />
        <CourseCategory 
            title="Informática" 
            courses={IT_COURSES} 
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>}
        />
      </div>
    </div>
  );
};

export default OtherCourses;