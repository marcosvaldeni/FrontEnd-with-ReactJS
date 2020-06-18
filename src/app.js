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

  async function handleAddProject() {
    // setProjects([ ... projects, ]);

    const res = await api.post('repositories', {
        title: `New Project ${Date.now()}`, 
        url: `challenge-nodejs-and-expressjs`,
        techs: `['nodejs','reactjs']`
    });

    const project = res.data;

    setProjects([ ... projects, project ]);

  }

  return (
    <>
      <Header title="Projects" />

      <ul>
  {projects.map(project => <li key={project.id}>{project.title}; {project.url}; {project.techs}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Add Project</button>
    </>
  );
}

export default App;
