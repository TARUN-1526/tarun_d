import React from 'react';
import { useContent } from '../context/ContentContext';
import { ArrowUpRight, Code2, Database, Brain, Rocket } from 'lucide-react';

export const Projects: React.FC = () => {
  const { projects } = useContent();

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Salesforce': return 'text-teal-700 bg-teal-50 border-teal-200';
      case 'AI/ML': return 'text-emerald-700 bg-emerald-50 border-emerald-200';
      case 'Full Stack': return 'text-slate-700 bg-slate-100 border-slate-200';
      default: return 'text-emerald-700 bg-emerald-50 border-emerald-200';
    }
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-slate-200 pb-8">
          <div>
            <div className="flex items-center gap-2 text-emerald-600 font-bold tracking-wider text-sm mb-3 uppercase">
              <Rocket size={16} /> Selected Works
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">Projects</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {projects.map((project) => {
            // Icon mapping
            let Icon = Code2;
            let gradient = 'from-emerald-400 to-teal-500';
            let shadowColor = 'hover:shadow-emerald-500/20';
            
            if (project.category === 'Salesforce') {
              Icon = Database;
              gradient = 'from-teal-400 to-cyan-500';
              shadowColor = 'hover:shadow-teal-500/20';
            } else if (project.category === 'AI/ML') {
              Icon = Brain;
              gradient = 'from-green-400 to-emerald-500';
              shadowColor = 'hover:shadow-emerald-500/20';
            }

            return (
              <div key={project.id} className={`group relative bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl transition-all duration-300 hover:-translate-y-2 ${shadowColor} hover:shadow-2xl`}>
                
                {/* Gradient Top Line */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${gradient}`}></div>
                
                <div className="p-8 h-full flex flex-col">
                  
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br ${gradient} text-white shadow-lg`}>
                       <Icon size={24} />
                    </div>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all border border-slate-100">
                        <ArrowUpRight size={20} />
                      </a>
                    )}
                  </div>

                  <span className={`inline-block px-3 py-1 rounded-lg text-xs font-bold mb-4 w-fit border ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-emerald-700 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm mb-8 leading-relaxed line-clamp-3 flex-grow font-medium">
                    {project.description[0]}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                     {project.tech.split(', ').map((t, i) => (
                        <span key={i} className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 border border-slate-200">
                           #{t.trim()}
                        </span>
                     ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};