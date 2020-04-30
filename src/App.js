import React from 'react';
import './App.css';
import Todoentry from './components/todoentry.js'
import Todoitems from './components/todoitems.js'
import Todofooter from './components/todofooter.js'

function App() {
  return (
    <div id="todoapp" className="todoapp">
      <Todoentry />
      <Todoitems />
      <Todofooter />
      </div>
  );
}

export default App;
