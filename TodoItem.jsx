import React, { useState } from 'react';

/**
 * componente que muestra una tarea individual de la lista
 */
export default function TodoItem({ task }) {
  const [completed, setCompleted] = useState(false);

  return (
    <li
      onClick={() => setCompleted(!completed)}
      className={completed ? 'completed' : undefined}
    >
      {task}
    </li>
  );
}