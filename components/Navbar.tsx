import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Code, Terminal, Award, Mail, Lock } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');
  const { setEditModeOpen } = useContent();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'projects', 'skills', 'awards', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home', icon: Home },
    { name: 'Exp', id: 'experience', icon: Briefcase },
    { name: 'Work', id: 'projects', icon: Code },
    { name: 'Skill', id: 'skills', icon: Terminal },
    { name: 'Award', id: 'awards', icon: Award },
    { name: 'Contact', id: 'contact', icon: Mail },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
      <div className="flex items-center gap-1 md:gap-2 px-3 py-3 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-[0_10px_30px_rgba(0,0,0,0.1)] ring-1 ring-slate-200/50">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;
          
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`relative p-3 rounded-xl transition-all duration-300 group flex items-center justify-center
                ${isActive ? 'bg-gradient-to-tr from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30 scale-110' : 'text-slate-500 hover:text-emerald-600 hover:bg-emerald-50'}
              `}
              aria-label={item.name}
            >
              <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              
              {/* Tooltip */}
              <span className="absolute -top-14 left-1/2 -translate-x-1/2 bg-white text-slate-800 text-xs font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap border border-slate-100 shadow-xl transform translate-y-2 group-hover:translate-y-0">
                {item.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Edit Trigger */}
      <button 
        onClick={() => setEditModeOpen(true)}
        className="p-3.5 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/50 text-slate-400 hover:text-emerald-600 hover:border-emerald-200 transition-all shadow-xl group relative ring-1 ring-slate-200/50"
        aria-label="Admin Access"
      >
        <Lock size={18} />
        <span className="absolute -top-14 left-1/2 -translate-x-1/2 bg-white text-slate-800 text-xs font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap border border-slate-100 shadow-xl transform translate-y-2 group-hover:translate-y-0">
           Admin
        </span>
      </button>
    </div>
  );
};