import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Awards } from './components/Awards';
import { Contact } from './components/Contact';
import { ContentProvider } from './context/ContentContext';
import { EditModal } from './components/EditModal';

function App() {
  return (
    <ContentProvider>
      <div className="min-h-screen text-slate-200 pb-20 md:pb-0">
        <Navbar />
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Awards />
        </main>
        <Contact />
        <EditModal />
      </div>
    </ContentProvider>
  );
}

export default App;