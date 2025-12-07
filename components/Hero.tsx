  import React from 'react';
  import { useContent } from '../context/ContentContext';
  import { ArrowDown, Github, Linkedin, Mail, Zap } from 'lucide-react';

  export const Hero: React.FC = () => {
    const { personalInfo } = useContent();
    
    return (
      <section id="home" className="relative min-h-screen flex flex-col justify-center py-20 overflow-hidden">
        
        {/* Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-emerald-200/40 via-teal-200/40 to-cyan-200/40 rounded-full blur-[100px] -z-10 animate-pulse opacity-60"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex flex-col items-center text-center">
          
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-emerald-100 mb-12 backdrop-blur-sm animate-float shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-700 text-xs font-bold tracking-widest uppercase">Open to work</span>
          </div>

          {/* Avatar with Ring */}
          <div className="relative mb-12 group">
              {/* Spinning Rings */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-300 opacity-30 blur-sm group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-spin-slow"></div>
              <div className="absolute -inset-4 rounded-full border border-emerald-500/10 scale-90"></div>
              
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full p-1 bg-white overflow-hidden ring-4 ring-white shadow-2xl">
                <img 
                    src={personalInfo.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=500&h=500&q=80"} 
                    alt={personalInfo.name}
                    className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              <div className="absolute bottom-2 right-2 p-2 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full text-white shadow-lg border border-white">
                <Zap size={16} fill="white" />
              </div>
          </div>

          {/* Main Text */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 leading-[1.1] mb-6">
            Hello, I'm <br className="md:hidden" />
            <span className="neon-gradient-text">{personalInfo.name}</span>
          </h1>

          <p className="text-xl md:text-2xl font-light text-slate-600 mb-8 max-w-2xl font-mono">
            <span className="text-emerald-500">&lt;</span> {personalInfo.role} <span className="text-emerald-500">/&gt;</span>
          </p>

          <p className="text-slate-600 max-w-2xl text-base md:text-lg leading-relaxed mb-12 font-medium">
            {personalInfo.summary}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-5 items-center w-full justify-center">
            <a href="#projects" className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all transform hover:-translate-y-1 hover:shadow-lg flex items-center gap-2 group min-w-[160px] justify-center">
              View Work <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </a>
            
            <div className="flex gap-4 items-center">

    {/* LinkedIn */}
    <a
      href={personalInfo.linkedin}
      target="_blank"
      rel="noreferrer"
      className="p-3 rounded-xl bg-white border border-slate-200 hover:bg-[#0077b5] hover:text-white hover:border-transparent text-slate-500 transition-all hover:scale-110 shadow-sm hover:shadow-md"
    >
      <Linkedin size={20} />
    </a>

    {/* GitHub */}
    <a
      href={personalInfo.github}
      target="_blank"
      rel="noreferrer"
      className="p-3 rounded-xl bg-white border border-slate-200 hover:bg-[#333] hover:text-white hover:border-transparent text-slate-500 transition-all hover:scale-110 shadow-sm hover:shadow-md"
    >
      <Github size={20} />
    </a>

    {/* LeetCode */}
    <a
      href={personalInfo.leetcode}
      target="_blank"
      rel="noreferrer"
      className="p-3 rounded-xl bg-white border border-slate-200 hover:bg-black hover:text-white hover:border-transparent text-slate-500 transition-all hover:scale-110 shadow-sm hover:shadow-md flex items-center"
      title="LeetCode"
    >
      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/leetcode.svg" alt="LeetCode" className="w-5 h-5" />
    </a>

    {/* HackerRank */}
    <a
      href={personalInfo.hackerrank}
      target="_blank"
      rel="noreferrer"
      className="p-3 rounded-xl bg-white border border-slate-200 hover:bg-[#2EC866] hover:text-white hover:border-transparent text-slate-500 transition-all hover:scale-110 shadow-sm hover:shadow-md flex items-center"
      title="HackerRank"
    >
      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/hackerrank.svg" alt="HackerRank" className="w-5 h-5" />
    </a>

    {/* CodeChef */}
    <a
      href={personalInfo.codechef}
      target="_blank"
      rel="noreferrer"
      className="p-3 rounded-xl bg-white border border-slate-200 hover:bg-[#F7941E] hover:text-white hover:border-transparent text-slate-500 transition-all hover:scale-110 shadow-sm hover:shadow-md flex items-center"
      title="CodeChef"
    >
      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/codechef.svg" alt="CodeChef" className="w-5 h-5" />
    </a>

    {/* Trailhead */}
    <a
      href={personalInfo.trailhead}
      target="_blank"
      rel="noreferrer"
      className="p-3 rounded-xl bg-white border border-slate-200 hover:bg-[#00A1E0] hover:text-white hover:border-transparent text-slate-500 transition-all hover:scale-110 shadow-sm hover:shadow-md flex items-center"
      title="Trailhead"
    >
      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/salesforce.svg" alt="Trailhead" className="w-5 h-5" />
    </a>

    {/* MAIL — NOW LAST */}
    <a
      href={`mailto:${personalInfo.email}`}
      className="p-3 rounded-xl bg-white border border-slate-200 hover:bg-emerald-500 hover:text-white hover:border-transparent text-slate-500 transition-all hover:scale-110 shadow-sm hover:shadow-md"
    >
      <Mail size={20} />
    </a>

  </div>

          </div>

        </div>
      </section>
    );
  };
