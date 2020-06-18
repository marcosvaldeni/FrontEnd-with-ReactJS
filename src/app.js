import React from 'react';

import Header from './components/header/header'

function App() {
  return (
    <>
    <Header title="title one">
      <ul>
        <li>1</li>
        <li>2</li>
      </ul>
    </Header>
    <Header title="title two">
      <ul>
        <li>1</li>
        <li>2</li>
      </ul></Header>
    </>
  );
}

export default App;
