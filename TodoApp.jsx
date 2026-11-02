import React, { useState } from 'react';
import TodoList from './TodoList';

/**
 * componente principal de la aplicacion
 * esta gestiona el estado de la lista de tareas
 */
export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddTask}>Agregar Tarea</button>
      <TodoList tasks={tasks} />
    </div>
  );
}