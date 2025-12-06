import React from 'react';
import { useContent } from '../context/ContentContext';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

export const Skills: React.FC = () => {
  const { skillCategories, chartData } = useContent();

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">Expertise</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Chart Section */}
          <div className="lg:col-span-5 order-2 lg:order-1">
             <div className="relative">
                {/* Glow behind chart */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-200 to-teal-200 blur-[60px] rounded-full opacity-60"></div>
                
                <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-6 border border-white shadow-2xl relative">
                  <div className="h-[350px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
                        <PolarGrid stroke="#cbd5e1" strokeDasharray="3 3" />
                        <PolarAngleAxis 
                          dataKey="subject" 
                          tick={{ fill: '#475569', fontSize: 12, fontWeight: 700, fontFamily: 'Space Grotesk' }} 
                        />
                        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                        <Radar
                          name="Skill Level"
                          dataKey="A"
                          stroke="#059669"
                          strokeWidth={3}
                          fill="#10b981"
                          fillOpacity={0.4}
                        />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0', color: '#0f172a', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                          itemStyle={{ color: '#059669', fontWeight: 'bold' }}
                          cursor={{ stroke: '#059669', strokeWidth: 1 }}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="text-center mt-2">
                     <span className="text-xs text-slate-400 font-mono tracking-widest uppercase">Proficiency Radar</span>
                  </div>
                </div>
             </div>
          </div>

          {/* Categories Grid */}
          <div className="lg:col-span-7 order-1 lg:order-2 grid grid-cols-1 md:grid-cols-2 gap-5">
             {skillCategories.map((category, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-emerald-200 hover:shadow-lg transition-all group shadow-sm">
                   <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-3">
                     <span className={`w-2 h-8 rounded-full ${
                        idx === 0 ? 'bg-gradient-to-b from-emerald-400 to-teal-500' : 
                        idx === 1 ? 'bg-gradient-to-b from-teal-400 to-cyan-500' : 
                        idx === 2 ? 'bg-gradient-to-b from-green-400 to-emerald-600' : 
                        'bg-gradient-to-b from-slate-400 to-slate-600'
                     }`}></span>
                     {category.name}
                   </h3>
                   <div className="flex flex-wrap gap-2">
                     {category.skills.map(skill => (
                       <span key={skill} className="px-3 py-1.5 bg-slate-50 text-slate-600 text-sm font-semibold rounded-lg border border-slate-200 group-hover:border-emerald-200 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors cursor-default">
                         {skill}
                       </span>
                     ))}
                   </div>
                </div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
};