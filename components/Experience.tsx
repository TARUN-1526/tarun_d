import React from 'react';
import { useContent } from '../context/ContentContext';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  const { experiences } = useContent();

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
           <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
             My <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">Journey</span>
           </h2>
           <p className="text-slate-500 max-w-xl mx-auto">
             Building impactful solutions and gaining experience at top-tier organizations.
           </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 via-teal-300 to-slate-200 md:-translate-x-1/2 rounded-full opacity-60"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`flex flex-col md:flex-row gap-8 md:gap-0 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Glowing Node */}
                <div className="absolute left-[28px] md:left-1/2 w-6 h-6 bg-white rounded-full border-4 border-emerald-500 z-10 md:-translate-x-1/2 mt-8 shadow-[0_0_15px_rgba(16,185,129,0.4)] box-content transform -translate-x-1/2"></div>
                
                <div className="hidden md:block md:w-1/2"></div>
                
                <div className="w-full md:w-1/2 pl-20 md:pl-0">
                  <div className={`relative ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                    
                    <div className="group relative">
                      {/* Card Background & Shadow */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl opacity-0 group-hover:opacity-40 transition duration-500 blur-sm"></div>
                      
                      <div className="relative bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-white shadow-xl hover:shadow-2xl transition-all">
                        
                        <div className={`flex flex-col gap-2 mb-4 ${index % 2 !== 0 ? 'md:items-end' : ''}`}>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100 w-fit">
                            <Calendar size={12} /> {exp.period}
                          </span>
                          
                          <h3 className="text-2xl font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">
                            {exp.role}
                          </h3>
                          
                          <div className="text-lg text-teal-600 font-medium flex items-center gap-2">
                            {exp.company}
                          </div>
                          
                          <div className="text-xs text-slate-500 flex items-center gap-1 font-semibold">
                             <MapPin size={12} /> {exp.location} • {exp.type}
                          </div>
                        </div>

                        <ul className="space-y-3">
                          {exp.description.map((item, idx) => (
                            <li key={idx} className={`text-slate-600 text-sm leading-relaxed flex gap-3 ${index % 2 !== 0 ? 'md:justify-end md:text-right' : ''}`}>
                               {index % 2 === 0 && <span className="mt-1.5 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>}
                               <span>{item}</span>
                               {index % 2 !== 0 && <span className="hidden md:block mt-1.5 w-1.5 h-1.5 bg-teal-500 rounded-full flex-shrink-0"></span>}
                               {index % 2 !== 0 && <span className="md:hidden mt-1.5 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0 order-first"></span>}
                            </li>
                          ))}
                        </ul>

                      </div>
                    </div>

                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};