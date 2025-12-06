import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  PERSONAL_INFO as DEFAULT_PERSONAL,
  EXPERIENCES as DEFAULT_EXPERIENCES,
  PROJECTS as DEFAULT_PROJECTS,
  EDUCATION as DEFAULT_EDUCATION,
  SKILL_CATEGORIES as DEFAULT_SKILLS,
  CHART_DATA as DEFAULT_CHART,
  CERTIFICATIONS as DEFAULT_CERTIFICATIONS,
  AWARDS as DEFAULT_AWARDS,
  EDIT_PASSWORD as DEFAULT_PASSWORD
} from '../constants';
import { ExperienceItem, ProjectItem, EducationItem, SkillCategory, Certification, Award } from '../types';

interface ContentContextType {
  personalInfo: typeof DEFAULT_PERSONAL;
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  skillCategories: SkillCategory[];
  chartData: typeof DEFAULT_CHART;
  certifications: Certification[];
  awards: Award[];
  editPassword: string;
  updateContent: (key: string, data: any) => void;
  resetContent: () => void;
  isEditModeOpen: boolean;
  setEditModeOpen: (open: boolean) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [personalInfo, setPersonalInfo] = useState(DEFAULT_PERSONAL);
  const [experiences, setExperiences] = useState(DEFAULT_EXPERIENCES);
  const [projects, setProjects] = useState(DEFAULT_PROJECTS);
  const [education, setEducation] = useState(DEFAULT_EDUCATION);
  const [skillCategories, setSkillCategories] = useState(DEFAULT_SKILLS);
  const [chartData, setChartData] = useState(DEFAULT_CHART);
  const [certifications, setCertifications] = useState(DEFAULT_CERTIFICATIONS);
  const [awards, setAwards] = useState(DEFAULT_AWARDS);
  const [editPassword, setEditPassword] = useState(DEFAULT_PASSWORD);
  
  const [isEditModeOpen, setEditModeOpen] = useState(false);

  // Load from LocalStorage on mount
  useEffect(() => {
    const load = (key: string, setter: any, def: any) => {
      const saved = localStorage.getItem(`portfolio_${key}`);
      if (saved) {
        try {
          setter(JSON.parse(saved));
        } catch (e) {
          console.error(`Failed to parse ${key}`, e);
        }
      }
    };

    load('personalInfo', setPersonalInfo, DEFAULT_PERSONAL);
    load('experiences', setExperiences, DEFAULT_EXPERIENCES);
    load('projects', setProjects, DEFAULT_PROJECTS);
    load('education', setEducation, DEFAULT_EDUCATION);
    load('skillCategories', setSkillCategories, DEFAULT_SKILLS);
    load('chartData', setChartData, DEFAULT_CHART);
    load('certifications', setCertifications, DEFAULT_CERTIFICATIONS);
    load('awards', setAwards, DEFAULT_AWARDS);
    load('editPassword', setEditPassword, DEFAULT_PASSWORD);
  }, []);

  const updateContent = (key: string, data: any) => {
    localStorage.setItem(`portfolio_${key}`, JSON.stringify(data));
    switch(key) {
      case 'personalInfo': setPersonalInfo(data); break;
      case 'experiences': setExperiences(data); break;
      case 'projects': setProjects(data); break;
      case 'education': setEducation(data); break;
      case 'skillCategories': setSkillCategories(data); break;
      case 'chartData': setChartData(data); break;
      case 'certifications': setCertifications(data); break;
      case 'awards': setAwards(data); break;
      case 'editPassword': setEditPassword(data); break;
    }
  };

  const resetContent = () => {
    localStorage.clear();
    setPersonalInfo(DEFAULT_PERSONAL);
    setExperiences(DEFAULT_EXPERIENCES);
    setProjects(DEFAULT_PROJECTS);
    setEducation(DEFAULT_EDUCATION);
    setSkillCategories(DEFAULT_SKILLS);
    setChartData(DEFAULT_CHART);
    setCertifications(DEFAULT_CERTIFICATIONS);
    setAwards(DEFAULT_AWARDS);
    setEditPassword(DEFAULT_PASSWORD);
    window.location.reload();
  };

  return (
    <ContentContext.Provider value={{
      personalInfo,
      experiences,
      projects,
      education,
      skillCategories,
      chartData,
      certifications,
      awards,
      editPassword,
      updateContent,
      resetContent,
      isEditModeOpen,
      setEditModeOpen
    }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};