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

                    {/* Action Buttons (conditional) */}
                    <div className="flex gap-3">
                      {/* GitHub Link — shows only if project.github exists */}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-slate-900 hover:text-white transition-all border border-slate-200"
                          title="View Source Code"
                        >
                          {/* GitHub Icon (SVG) */}
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 .5C5.649.5.5 5.649.5 12a11.5 11.5 0 0 0 7.835 10.933c.573.105.784-.249.784-.553 
                              0-.273-.01-1.183-.015-2.144-3.188.694-3.863-1.536-3.863-1.536-.52-1.322-1.27-1.674-1.27-1.674
                              -1.04-.71.079-.695.079-.695 1.15.081 1.754 1.18 1.754 1.18 1.022 1.753 2.68 1.247 
                              3.333.953.104-.74.4-1.247.727-1.536-2.546-.289-5.222-1.273-5.222-5.662 
                              0-1.251.446-2.272 1.176-3.073-.118-.29-.51-1.454.112-3.03 0 0 .96-.308 
                              3.147 1.175a10.86 10.86 0 0 1 2.866-.385c.972.004 1.95.131 2.867.385 
                              2.185-1.483 3.144-1.175 3.144-1.175.624 1.576.232 2.74.114 3.03.732.801 
                              1.174 1.822 1.174 3.073 0 4.4-2.681 5.369-5.236 5.653.41.353.775 1.047.775 2.111 
                              0 1.526-.015 2.754-.015 3.129 0 .307.208.663.79.551A11.503 11.503 0 0 0 23.5 12 
                              c0-6.351-5.149-11.5-11.5-11.5Z" />
                          </svg>
                        </a>
                      )}

                      {/* Demo Link — shows only if project.demo exists */}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-emerald-600 hover:text-white transition-all border border-slate-200"
                          title="Live Demo"
                        >
                          <ArrowUpRight size={18} />
                        </a>
                      )}
                    </div>
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
                     {project.tech.split(', ').map((t: string, i: number) => (
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
