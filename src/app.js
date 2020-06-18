import React, { useState } from 'react';

import Header from './components/header/header'

function App() {
  const [projects, setProjects] = useState(['Apps development', 'Web Frontend']);

  function handleAddProject() {
    // projects.push();

    setProjects([ ... projects, `New Project ${Date.now()}`]);

    console.log(projects);
  }

  return (
    <>
      <Header title="Projects" />
      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Add Project</button>
    </>
  );
}

export default App;
