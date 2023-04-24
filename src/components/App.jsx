// import { HomePage } from 'Page/HomePage/HomePage';
import { Routes, Route } from 'react-router-dom';
import { Projects } from 'Page/Projects/Projects';
import { Project } from './Project/Project';
import { HomePage } from 'Page/HomePage/HomePage';
import '../styles/main.css';
import { Skills } from 'Page/Skills/Skills';
import { Contacts } from 'Page/Contacts/Contacts';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<Projects />} />
        <Route path="project" element={<Project />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="skills" element={<Skills />} />
        <Route path="homePage" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
// dfbdfs?
