import React from 'react';
import { useContent } from '../context/ContentContext';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  const { personalInfo } = useContent();

  return (
    <footer id="contact" className="py-24 relative overflow-hidden mt-20">
      
      {/* Massive Bottom Gradient Orb */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-200/50 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-block p-2 rounded-full bg-white border border-slate-200 mb-8 shadow-sm">
           <span className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-bold tracking-widest uppercase border border-slate-200">
             Contact Me
           </span>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight">
          Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">The Future</span>
        </h2>
        
        <p className="text-slate-500 text-lg mb-12 max-w-2xl mx-auto font-medium">
          I'm currently looking for new opportunities in Salesforce and Full Stack development.
        </p>

        <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-3 px-10 py-5 bg-slate-900 text-white font-bold rounded-2xl hover:scale-105 transition-transform duration-300 mb-20 shadow-xl hover:shadow-2xl hover:bg-emerald-700">
          Say Hello <ArrowRight size={20} />
        </a>

        <div className="backdrop-blur-xl bg-white/70 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center md:items-start gap-8 border border-white shadow-xl">
           <div className="text-center md:text-left">
              <h4 className="text-slate-900 font-bold text-2xl mb-1">{personalInfo.name}</h4>
              <p className="text-slate-500 font-medium">{personalInfo.role}</p>
           </div>

           <div className="flex gap-3">
              <a href={personalInfo.linkedin} className="p-3 rounded-xl bg-slate-100 text-slate-500 hover:bg-[#0077b5] hover:text-white transition-all shadow-sm">
                <Linkedin size={24} />
              </a>
              <a href={personalInfo.github} className="p-3 rounded-xl bg-slate-100 text-slate-500 hover:bg-[#333] hover:text-white transition-all shadow-sm">
                <Github size={24} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="p-3 rounded-xl bg-slate-100 text-slate-500 hover:bg-emerald-600 hover:text-white transition-all shadow-sm">
                <Mail size={24} />
              </a>
           </div>
        </div>
        
        <div className="mt-12 text-slate-400 text-sm font-semibold">
           © {new Date().getFullYear()} {personalInfo.name}. Designed & Built with ❤️
        </div>
      </div>
    </footer>
  );
};