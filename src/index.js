import React from 'react';
import ReactDOM from 'react-dom/client';
// component file
import TodoContainer from './components/TodoContainer';

// stylesheet
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
);