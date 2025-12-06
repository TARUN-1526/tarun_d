
import React, { useState, useEffect } from 'react';
import { useContent } from '../context/ContentContext';
import { X, Save, RotateCcw, Plus, Trash2, Download, Lock, ExternalLink, Settings, Key, Image } from 'lucide-react';

export const EditModal: React.FC = () => {
  const { 
    isEditModeOpen, setEditModeOpen, 
    personalInfo, experiences, projects, education, skillCategories, awards, certifications, chartData,
    editPassword, updateContent, resetContent 
  } = useContent();

  const [activeTab, setActiveTab] = useState('profile');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Clear auth state when modal closes
  useEffect(() => {
    if (!isEditModeOpen) {
      setPasswordInput('');
      setErrorMsg('');
      // Optional: setIsAuthenticated(false); // Uncomment if you want to force login every time modal opens
    }
  }, [isEditModeOpen]);

  if (!isEditModeOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === editPassword) {
      setIsAuthenticated(true);
      setErrorMsg('');
    } else {
      setErrorMsg('Incorrect Password');
    }
  };

  const handleExport = () => {
    const data = `import { ExperienceItem, ProjectItem, EducationItem, SkillCategory, Certification, Award } from './types';

export const EDIT_PASSWORD = "${editPassword}";

export const PERSONAL_INFO = ${JSON.stringify(personalInfo, null, 2)};

export const EXPERIENCES: ExperienceItem[] = ${JSON.stringify(experiences, null, 2)};

export const PROJECTS: ProjectItem[] = ${JSON.stringify(projects, null, 2)};

export const EDUCATION: EducationItem[] = ${JSON.stringify(education, null, 2)};

export const SKILL_CATEGORIES: SkillCategory[] = ${JSON.stringify(skillCategories, null, 2)};

export const CHART_DATA = ${JSON.stringify(chartData, null, 2)};

export const CERTIFICATIONS: Certification[] = ${JSON.stringify(certifications, null, 2)};

export const AWARDS: Award[] = ${JSON.stringify(awards, null, 2)};
`;

    const blob = new Blob([data], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'constants.ts';
    a.click();
  };

  const tabs = [
    { id: 'profile', label: 'Profile' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'awards', label: 'Awards' },
    { id: 'settings', label: 'Settings' },
  ];

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-4">
        <div className="bg-[#1e293b] w-full max-w-md p-8 rounded-3xl border border-slate-700 shadow-2xl relative">
          <button onClick={() => setEditModeOpen(false)} className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors">
            <X size={24} />
          </button>
          <div className="text-center mb-8">
             <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-400">
               <Lock size={32} />
             </div>
             <h2 className="text-2xl font-bold text-white">Admin Access</h2>
             <p className="text-slate-400 text-sm mt-2">Enter the admin password to edit content.</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
             <input 
               type="password" 
               value={passwordInput} 
               onChange={(e) => setPasswordInput(e.target.value)} 
               placeholder="Enter Password" 
               className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 text-white focus:border-emerald-400 focus:outline-none text-center tracking-widest"
               autoFocus
             />
             {errorMsg && <p className="text-red-400 text-sm text-center">{errorMsg}</p>}
             <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl transition-colors">
               Unlock Editor
             </button>
          </form>
          <div className="mt-6 text-center">
             <p className="text-xs text-slate-500">Default: admin123</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
      <div className="bg-[#0f172a] w-full max-w-5xl h-[85vh] rounded-3xl border border-slate-700 shadow-2xl flex flex-col overflow-hidden text-slate-200">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-700 flex justify-between items-center bg-slate-900">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-emerald-400">CMS</span> Content Manager
            </h2>
            <p className="text-slate-400 text-sm">Edit your portfolio content live.</p>
          </div>
          <div className="flex gap-2">
             <button onClick={handleExport} className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg flex items-center gap-2 text-sm font-medium transition-colors">
               <Download size={16} /> Export Code
             </button>
             <button onClick={() => { if(confirm('Reset all changes to default?')) resetContent(); }} className="px-4 py-2 bg-slate-800 hover:bg-red-900/50 hover:text-red-400 text-slate-300 rounded-lg flex items-center gap-2 text-sm font-medium transition-colors">
               <RotateCcw size={16} /> Reset
             </button>
             <button onClick={() => setEditModeOpen(false)} className="p-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors">
               <X size={20} />
             </button>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar Tabs */}
          <div className="w-48 bg-slate-900/50 border-r border-slate-700 overflow-y-auto hidden md:block">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left px-6 py-4 text-sm font-medium border-l-2 transition-colors
                  ${activeTab === tab.id ? 'border-emerald-400 bg-emerald-400/10 text-emerald-400' : 'border-transparent text-slate-400 hover:text-white hover:bg-slate-800'}
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-[#0b1121]">
            
            {/* Mobile Tabs */}
            <div className="md:hidden flex gap-2 overflow-x-auto pb-4 mb-4 border-b border-slate-800">
               {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap
                      ${activeTab === tab.id ? 'bg-emerald-500 text-black' : 'bg-slate-800 text-slate-400'}
                    `}
                  >
                    {tab.label}
                  </button>
               ))}
            </div>

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="space-y-6 max-w-2xl">
                <h3 className="text-xl font-bold text-white mb-4">Personal Information</h3>
                
                {/* Avatar Field */}
                <div>
                   <label className="block text-xs font-mono text-slate-500 uppercase mb-1">Avatar Image URL</label>
                   <div className="relative">
                      <input 
                        type="text" 
                        value={personalInfo.avatar || ''} 
                        onChange={(e) => updateContent('personalInfo', { ...personalInfo, avatar: e.target.value })} 
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 pl-10 text-white focus:border-emerald-400 focus:outline-none"
                        placeholder="https://..."
                      />
                      <Image size={16} className="absolute left-3 top-3.5 text-slate-500" />
                   </div>
                   <p className="text-xs text-slate-600 mt-1">Paste a URL for your profile photo.</p>
                </div>

                {Object.entries(personalInfo).map(([key, value]) => {
                  if (key === 'avatar') return null; // Handled above
                  return (
                    <div key={key}>
                      <label className="block text-xs font-mono text-slate-500 uppercase mb-1">{key}</label>
                      {key === 'summary' ? (
                        <textarea
                          value={value as string}
                          onChange={(e) => updateContent('personalInfo', { ...personalInfo, [key]: e.target.value })}
                          className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-emerald-400 focus:outline-none min-h-[100px]"
                        />
                      ) : (
                        <input
                          type="text"
                          value={value as string}
                          onChange={(e) => updateContent('personalInfo', { ...personalInfo, [key]: e.target.value })}
                          className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-emerald-400 focus:outline-none"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Experience Tab */}
            {activeTab === 'experience' && (
               <div className="space-y-8">
                 <div className="flex justify-between">
                   <h3 className="text-xl font-bold text-white">Experience Timeline</h3>
                   <button 
                     onClick={() => updateContent('experiences', [{ id: Date.now(), role: 'New Role', company: 'Company', period: '2024', location: 'Remote', type: 'Full-time', description: ['Did something cool'] }, ...experiences])}
                     className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-sm flex items-center gap-1"
                   >
                     <Plus size={14} /> Add Job
                   </button>
                 </div>
                 {experiences.map((exp, idx) => (
                   <div key={exp.id} className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 relative group">
                      <button 
                        onClick={() => { const n = [...experiences]; n.splice(idx, 1); updateContent('experiences', n); }}
                        className="absolute top-4 right-4 text-slate-600 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <input value={exp.role} onChange={(e) => { const n = [...experiences]; n[idx].role = e.target.value; updateContent('experiences', n); }} className="input-field" placeholder="Role" />
                        <input value={exp.company} onChange={(e) => { const n = [...experiences]; n[idx].company = e.target.value; updateContent('experiences', n); }} className="input-field" placeholder="Company" />
                        <input value={exp.period} onChange={(e) => { const n = [...experiences]; n[idx].period = e.target.value; updateContent('experiences', n); }} className="input-field" placeholder="Period" />
                        <input value={exp.location} onChange={(e) => { const n = [...experiences]; n[idx].location = e.target.value; updateContent('experiences', n); }} className="input-field" placeholder="Location" />
                      </div>
                      <label className="block text-xs text-slate-500 mb-2">Description Points (One per line)</label>
                      <textarea 
                        value={exp.description.join('\n')} 
                        onChange={(e) => { const n = [...experiences]; n[idx].description = e.target.value.split('\n'); updateContent('experiences', n); }} 
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white text-sm h-32"
                      />
                   </div>
                 ))}
               </div>
            )}

            {/* Projects Tab */}
            {activeTab === 'projects' && (
               <div className="space-y-8">
                 <div className="flex justify-between">
                   <h3 className="text-xl font-bold text-white">Projects</h3>
                   <button 
                     onClick={() => updateContent('projects', [{ id: Date.now(), title: 'New Project', tech: 'React, TS', category: 'Full Stack', description: ['Project description'] }, ...projects])}
                     className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-sm flex items-center gap-1"
                   >
                     <Plus size={14} /> Add Project
                   </button>
                 </div>
                 {projects.map((proj, idx) => (
                   <div key={proj.id} className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 relative">
                      <button 
                        onClick={() => { const n = [...projects]; n.splice(idx, 1); updateContent('projects', n); }}
                        className="absolute top-4 right-4 text-slate-600 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <input value={proj.title} onChange={(e) => { const n = [...projects]; n[idx].title = e.target.value; updateContent('projects', n); }} className="input-field" placeholder="Title" />
                        <input value={proj.tech} onChange={(e) => { const n = [...projects]; n[idx].tech = e.target.value; updateContent('projects', n); }} className="input-field" placeholder="Technologies" />
                        <select 
                          value={proj.category} 
                          onChange={(e) => { const n = [...projects]; n[idx].category = e.target.value as any; updateContent('projects', n); }} 
                          className="input-field bg-slate-800"
                        >
                          <option value="Salesforce">Salesforce</option>
                          <option value="Full Stack">Full Stack</option>
                          <option value="AI/ML">AI/ML</option>
                        </select>
                        <div className="relative">
                           <input value={proj.link} onChange={(e) => { const n = [...projects]; n[idx].link = e.target.value; updateContent('projects', n); }} className="input-field pl-9" placeholder="Project Link" />
                           <ExternalLink size={16} className="absolute left-3 top-3 text-slate-500" />
                        </div>
                      </div>
                      <textarea 
                        value={proj.description.join('\n')} 
                        onChange={(e) => { const n = [...projects]; n[idx].description = e.target.value.split('\n'); updateContent('projects', n); }} 
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white text-sm h-24"
                        placeholder="Description (one per line)"
                      />
                   </div>
                 ))}
               </div>
            )}

            {/* Skills Tab */}
            {activeTab === 'skills' && (
              <div className="space-y-8">
                 <h3 className="text-xl font-bold text-white">Skill Categories</h3>
                 {skillCategories.map((cat, idx) => (
                    <div key={idx} className="bg-slate-900/50 p-4 rounded-xl border border-slate-700">
                       <input 
                         value={cat.name} 
                         onChange={(e) => { const n = [...skillCategories]; n[idx].name = e.target.value; updateContent('skillCategories', n); }} 
                         className="input-field mb-2 font-bold text-emerald-400" 
                       />
                       <input 
                         value={cat.skills.join(', ')} 
                         onChange={(e) => { const n = [...skillCategories]; n[idx].skills = e.target.value.split(',').map(s => s.trim()); updateContent('skillCategories', n); }} 
                         className="input-field" 
                         placeholder="Skills separated by commas"
                       />
                    </div>
                 ))}

                 <h3 className="text-xl font-bold text-white mt-8">Chart Data (Radar)</h3>
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {chartData.map((data, idx) => (
                      <div key={idx} className="bg-slate-900/50 p-3 rounded-lg border border-slate-700">
                         <input 
                           value={data.subject} 
                           onChange={(e) => { const n = [...chartData]; n[idx].subject = e.target.value; updateContent('chartData', n); }} 
                           className="w-full bg-transparent text-slate-300 text-sm mb-1 border-none focus:outline-none"
                         />
                         <div className="flex items-center gap-2">
                            <input 
                              type="range" min="0" max="100" 
                              value={data.A} 
                              onChange={(e) => { const n = [...chartData]; n[idx].A = parseInt(e.target.value); updateContent('chartData', n); }} 
                              className="w-full"
                            />
                            <span className="text-xs text-emerald-400 font-mono w-8">{data.A}</span>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
            )}

            {/* Education Tab */}
            {activeTab === 'education' && (
               <div className="space-y-8">
                 <h3 className="text-xl font-bold text-white">Education History</h3>
                 {education.map((edu, idx) => (
                    <div key={idx} className="bg-slate-900/50 p-6 rounded-xl border border-slate-700">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input value={edu.school} onChange={(e) => { const n = [...education]; n[idx].school = e.target.value; updateContent('education', n); }} className="input-field" placeholder="School" />
                          <input value={edu.degree} onChange={(e) => { const n = [...education]; n[idx].degree = e.target.value; updateContent('education', n); }} className="input-field" placeholder="Degree" />
                          <input value={edu.period} onChange={(e) => { const n = [...education]; n[idx].period = e.target.value; updateContent('education', n); }} className="input-field" placeholder="Period" />
                          <input value={edu.score} onChange={(e) => { const n = [...education]; n[idx].score = e.target.value; updateContent('education', n); }} className="input-field" placeholder="Score/GPA" />
                        </div>
                    </div>
                 ))}
               </div>
            )}

            {/* Awards & Certs Tab */}
            {activeTab === 'awards' && (
              <div className="space-y-8">
                 <div className="flex justify-between">
                   <h3 className="text-xl font-bold text-white">Certifications</h3>
                   <button 
                     onClick={() => updateContent('certifications', [{ name: 'New Cert', issuer: 'Issuer', details: '', link: '' }, ...certifications])}
                     className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-sm flex items-center gap-1"
                   >
                     <Plus size={14} /> Add Cert
                   </button>
                 </div>
                 <div className="space-y-4">
                   {certifications.map((cert, idx) => (
                      <div key={idx} className="bg-slate-900/50 p-4 rounded-xl border border-slate-700 relative group">
                          <button 
                            onClick={() => { const n = [...certifications]; n.splice(idx, 1); updateContent('certifications', n); }}
                            className="absolute top-2 right-2 text-slate-600 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <input value={cert.name} onChange={(e) => { const n = [...certifications]; n[idx].name = e.target.value; updateContent('certifications', n); }} className="input-field" placeholder="Certification Name" />
                            <input value={cert.issuer} onChange={(e) => { const n = [...certifications]; n[idx].issuer = e.target.value; updateContent('certifications', n); }} className="input-field" placeholder="Issuer" />
                            <input value={cert.details || ''} onChange={(e) => { const n = [...certifications]; n[idx].details = e.target.value; updateContent('certifications', n); }} className="input-field" placeholder="Details (ID, Date)" />
                            <div className="relative">
                               <input value={cert.link || ''} onChange={(e) => { const n = [...certifications]; n[idx].link = e.target.value; updateContent('certifications', n); }} className="input-field pl-9" placeholder="Link (Optional)" />
                               <ExternalLink size={16} className="absolute left-3 top-3 text-slate-500" />
                            </div>
                          </div>
                      </div>
                   ))}
                 </div>
                 
                 <div className="h-px bg-slate-800 my-8"></div>

                 <div className="flex justify-between">
                   <h3 className="text-xl font-bold text-white">Awards & Honors</h3>
                   <button 
                     onClick={() => updateContent('awards', [{ title: 'New Award', description: 'Description' }, ...awards])}
                     className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-sm flex items-center gap-1"
                   >
                     <Plus size={14} /> Add Award
                   </button>
                 </div>
                 <div className="space-y-4">
                   {awards.map((award, idx) => (
                      <div key={idx} className="bg-slate-900/50 p-4 rounded-xl border border-slate-700 relative group">
                          <button 
                            onClick={() => { const n = [...awards]; n.splice(idx, 1); updateContent('awards', n); }}
                            className="absolute top-2 right-2 text-slate-600 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                          <div className="space-y-2">
                             <input value={award.title} onChange={(e) => { const n = [...awards]; n[idx].title = e.target.value; updateContent('awards', n); }} className="input-field" placeholder="Award Title" />
                             <input value={award.description} onChange={(e) => { const n = [...awards]; n[idx].description = e.target.value; updateContent('awards', n); }} className="input-field" placeholder="Description" />
                          </div>
                      </div>
                   ))}
                 </div>
              </div>
            )}
            
            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="space-y-8 max-w-xl">
                 <div>
                   <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
                     <Settings className="text-emerald-400" /> Security Settings
                   </h3>
                   <p className="text-slate-400 text-sm mb-6">
                     Update the password used to access this admin panel. 
                     <strong> Note:</strong> You must click "Export Code" and replace your file to save this permanently.
                   </p>
                   
                   <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700">
                     <label className="block text-xs font-mono text-slate-500 uppercase mb-2">New Admin Password</label>
                     <div className="relative">
                        <input 
                          type="text" 
                          value={editPassword} 
                          onChange={(e) => updateContent('editPassword', e.target.value)} 
                          className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 pl-10 text-white focus:border-emerald-400 focus:outline-none font-mono"
                        />
                        <Key size={16} className="absolute left-3 top-3.5 text-slate-500" />
                     </div>
                     <p className="mt-4 text-xs text-yellow-500/80 bg-yellow-500/10 p-3 rounded border border-yellow-500/20">
                       After changing this, please click the <strong>Export Code</strong> button at the top and replace your <code>constants.ts</code> file.
                     </p>
                   </div>
                 </div>
              </div>
            )}

          </div>
        </div>
      </div>
      <style>{`
        .input-field {
          width: 100%;
          background: #1e293b;
          border: 1px solid #334155;
          border-radius: 0.5rem;
          padding: 0.75rem;
          color: white;
          font-size: 0.875rem;
        }
        .input-field:focus {
          border-color: #10b981;
          outline: none;
        }
      `}</style>
    </div>
  );
};