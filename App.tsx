import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import { PageRoute, SkillCategory } from './types';
import { 
  CONTACT_INFO, 
  EDUCATION_DATA, 
  WORK_EXPERIENCE, 
  RESEARCH_EXPERIENCE, 
  PROJECTS, 
  PUBLICATIONS,
  SKILLS
} from './constants';
import Section from './components/Section';
import InfoCard from './components/InfoCard';
import { 
  Briefcase, 
  GraduationCap, 
  BookOpen, 
  Code, 
  Mail, 
  Phone, 
  Linkedin,
  MapPin,
  FileText,
  User,
  FlaskConical,
  ExternalLink
} from 'lucide-react';

// --- Page Components ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 mb-12 flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="shrink-0 relative">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-blue-50 shadow-xl">
             <img 
               src="profile.jpg"
               alt={CONTACT_INFO.name} 
               className="w-full h-full object-cover"
             />
          </div>
          <div className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md border border-slate-100">
             <User className="w-6 h-6 text-blue-600" />
          </div>
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Hello, I'm <span className="text-blue-600">{CONTACT_INFO.name}</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-6 max-w-2xl">
            {CONTACT_INFO.bio}
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors shadow-sm">
              <Mail className="w-4 h-4" />
              Email Me
            </a>
            <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-500">
             <div className="flex items-center gap-2 justify-center md:justify-start">
                <MapPin className="w-4 h-4 text-slate-400" />
                {CONTACT_INFO.location}
             </div>
             <div className="flex items-center gap-2 justify-center md:justify-start">
                <Phone className="w-4 h-4 text-slate-400" />
                {CONTACT_INFO.phone}
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
           <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
             <GraduationCap className="w-5 h-5 text-blue-600" />
             Current Status
           </h3>
           <p className="text-slate-700">
             Currently pursuing a <strong>Master of Mathematics in Statistics</strong> at the <strong>University of Waterloo</strong> (Expected 2026).
           </p>
        </div>
        <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-200">
           <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
             <Briefcase className="w-5 h-5 text-slate-600" />
             Specialization
           </h3>
           <p className="text-slate-700">
             Focusing on <strong>Data Analysis</strong>, <strong>Data modelling</strong> and <strong>Biostatistics</strong> for predictive analytics.
           </p>
        </div>
      </div>
    </div>
  );
};

const AcademicPage: React.FC = () => {
  return (
    <div className="animate-in slide-in-from-right-8 duration-500">
      <Section title="Education" icon={GraduationCap}>
        {EDUCATION_DATA.map((edu) => (
          <InfoCard
            key={edu.id}
            title={edu.institution}
            subtitle={edu.degree}
            location={edu.location}
            period={edu.period}
            points={edu.details}
          />
        ))}
      </Section>

      <Section title="Research Experience" icon={FlaskConical}>
        {RESEARCH_EXPERIENCE.map((res) => (
          <InfoCard
            key={res.id}
            title={res.role}
            subtitle={res.company}
            location={res.location}
            period={res.period}
            points={res.points}
          />
        ))}
      </Section>

      <Section title="Publications" icon={FileText}>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <ul className="space-y-4">
            {PUBLICATIONS.map((pub) => (
              <li key={pub.id} className="flex items-start gap-3">
                 <div className="mt-1.5 min-w-[24px]">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-xs font-bold">
                       {pub.id.split('-')[1]}
                    </span>
                 </div>
                 <div>
                   <p className="text-slate-800 italic leading-relaxed">{pub.citation}</p>
                   <a href={pub.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-2 text-sm text-blue-600 hover:text-blue-800 font-medium">
                     View Publication <ExternalLink className="w-3 h-3" />
                   </a>
                 </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </div>
  );
};

const WorkPage: React.FC = () => {
  return (
    <div className="animate-in slide-in-from-right-8 duration-500">
      <Section title="Work Experience" icon={Briefcase}>
        {WORK_EXPERIENCE.map((work) => (
          <InfoCard
            key={work.id}
            title={work.role}
            subtitle={work.company}
            location={work.location}
            period={work.period}
            points={work.points}
          />
        ))}
      </Section>

      <Section title="Selected Projects" icon={Code}>
        {PROJECTS.map((proj) => (
          <InfoCard
            key={proj.id}
            title={proj.title}
            subtitle={proj.techStack}
            period=""
            points={proj.description}
            tags={proj.techStack.split(', ')}
          />
        ))}
      </Section>

      <Section title="Technical Skills" icon={BookOpen}>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SKILLS.map((cat: SkillCategory, index) => (
              <div key={index} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
                 <h4 className="font-bold text-slate-800 mb-4 border-b pb-2 border-slate-100 min-h-[3rem] flex items-center">
                   {cat.category}
                 </h4>
                 <div className="flex flex-wrap gap-2">
                   {cat.skills.map((skill, sIdx) => (
                     <span key={sIdx} className="px-2.5 py-1 bg-slate-50 text-slate-700 text-xs font-medium rounded-md border border-slate-200">
                       {skill}
                     </span>
                   ))}
                 </div>
              </div>
            ))}
         </div>
      </Section>
    </div>
  );
};

// --- Main Layout ---

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
        <Navbar />
        
        <main className="flex-grow max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
           <Routes>
             <Route path={PageRoute.HOME} element={<HomePage />} />
             <Route path={PageRoute.ACADEMIC} element={<AcademicPage />} />
             <Route path={PageRoute.WORK} element={<WorkPage />} />
           </Routes>
        </main>

        <footer className="bg-white border-t border-slate-200 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
             <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
                <p>&copy; {new Date().getFullYear()} {CONTACT_INFO.name}. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                  <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-blue-600 transition-colors">Contact</a>
                  <a href={CONTACT_INFO.linkedin} className="hover:text-blue-600 transition-colors">LinkedIn</a>
                </div>
             </div>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;