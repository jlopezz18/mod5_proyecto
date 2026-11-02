import React from 'react';
import TodoItem from './TodoItem';

/**
 * componente que renderiza la lista completa de tareas
 */
export default function TodoList({ tasks }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} />
      ))}
    </ul>
  );
}