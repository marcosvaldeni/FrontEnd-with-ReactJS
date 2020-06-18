import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/header/header'

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('repositories').then(res => {
      setProjects(res.data);
    });
  }, []);

  function handleAddProject() {
    setProjects([ ... projects, `New Project ${Date.now()}`]);
  }

  return (
    <>
      <Header title="Projects" />

      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Add Project</button>
    </>
  );
}

export default App;
