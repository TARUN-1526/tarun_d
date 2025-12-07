import React from 'react';
import { useContent } from '../context/ContentContext';
import { CheckCircle, ExternalLink, Trophy, GraduationCap, Medal } from 'lucide-react';

/**
 * Convert common Google Drive share links to a direct URL that can be used in <a> or <img>.
 * Supported forms:
 * - https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 * - https://drive.google.com/open?id=FILE_ID
 * - https://drive.google.com/uc?export=view&id=FILE_ID  (passed through)
 */
const toDriveDirectUrl = (url: string) => {
  if (!url) return url;
  try {
    // If already a uc?export link, return as-is
    if (url.includes('drive.google.com') && url.includes('uc?export')) return url;

    // Match /d/FILE_ID/
    const m1 = url.match(/\/d\/([a-zA-Z0-9_-]{10,})/);
    if (m1 && m1[1]) {
      return `https://drive.google.com/uc?export=view&id=${m1[1]}`;
    }

    // Match ?id=FILE_ID
    const m2 = url.match(/[?&]id=([a-zA-Z0-9_-]{10,})/);
    if (m2 && m2[1]) {
      return `https://drive.google.com/uc?export=view&id=${m2[1]}`;
    }

    // Otherwise, return original URL (works for regular https links)
    return url;
  } catch {
    return url;
  }
};

export const Awards: React.FC = () => {
  const { education, certifications, awards } = useContent();

  return (
    <section id="awards" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          <div className="space-y-16">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600"><GraduationCap size={24} /></div>
                Education
              </h3>
              <div className="space-y-8 pl-4 border-l border-emerald-200">
                {education.map((edu, idx) => (
                  <div key={idx} className="relative pl-8 group">
                    <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-white shadow-sm"></div>
                    <h4 className="text-xl font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">{edu.school}</h4>
                    <div className="text-slate-500 font-medium mb-1">{edu.degree}</div>
                    <div className="flex justify-between text-slate-500 text-sm max-w-md">
                      <span className="bg-slate-100 px-2 py-0.5 rounded text-xs border border-slate-200">{edu.period}</span>
                      <span className="text-emerald-600 font-bold font-mono">{edu.score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <div className="p-2 bg-teal-100 rounded-lg text-teal-600"><CheckCircle size={24} /></div>
                Certifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, idx) => {
                  const link = cert.link ? toDriveDirectUrl(cert.link) : undefined;
                  return (
                    <div key={idx} className="p-5 rounded-xl bg-white border border-slate-200 hover:border-teal-400 hover:shadow-lg transition-all group hover:-translate-y-1">
                      <div className="flex justify-between items-start mb-3">
                        <CheckCircle size={18} className="text-teal-500" />
                        {link && (
                          <a href={link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-600 transition-colors flex items-center gap-1">
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>

                      {link ? (
                        <a href={link} target="_blank" rel="noopener noreferrer" className="font-bold text-slate-800 text-sm leading-snug mb-1 hover:text-teal-600 transition-colors block">
                          {cert.name}
                        </a>
                      ) : (
                        <div className="font-bold text-slate-800 text-sm leading-snug mb-1">{cert.name}</div>
                      )}

                      <div className="text-xs text-slate-500 mt-2 font-medium">{cert.issuer}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Honors & Awards */}
          <div>
            <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-200 h-full relative overflow-hidden shadow-xl">
              {/* Decoration */}
              <div className="absolute top-0 right-0 p-12 bg-emerald-100/50 blur-[60px] rounded-full"></div>

              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3 relative z-10">
                <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600"><Trophy size={24} /></div>
                Honors & Awards
              </h3>

              <div className="space-y-4 relative z-10">
                {awards.map((award, idx) => {
                  const link = (award as any).link ? toDriveDirectUrl((award as any).link) : undefined;
                  return (
                    <div key={idx} className="flex gap-4 group bg-white/60 p-4 rounded-xl hover:bg-white transition-colors border border-transparent hover:border-emerald-100 shadow-sm hover:shadow-md">
                      <div className="flex-shrink-0 mt-1 text-emerald-500">
                        <Medal size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4">
                          {link ? (
                            <a href={link} target="_blank" rel="noopener noreferrer" className="font-bold text-slate-800 group-hover:text-emerald-600 transition-colors hover:underline">
                              {award.title}
                            </a>
                          ) : (
                            <h4 className="text-base font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">{award.title}</h4>
                          )}
                          {link && (
                            <a href={link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-600 transition-colors ml-3">
                              <ExternalLink size={16} />
                            </a>
                          )}
                        </div>
                        <p className="text-slate-500 text-sm mt-1 leading-relaxed font-medium">{award.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
