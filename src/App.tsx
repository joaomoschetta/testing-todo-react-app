import React from 'react';

import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

export function App() {
  return (
    <div className="App">
      <h1>Testing Todo React App</h1>

      <TodoForm />
      <TodoList />
    </div>
  );
}

