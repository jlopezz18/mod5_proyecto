import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoApp from './TodoApp';

test('Permite al usuario agregar y completar tareas', () => {
  render(<TodoApp />);
  
  const input = screen.getByRole('textbox');
  const button = screen.getByRole('button', { name: /agregar tarea/i });

  // el usuario escribe y agrega una tarea
  fireEvent.change(input, { target: { value: 'Tarea importante' } });
  fireEvent.click(button);

  const task = screen.getByText(/tarea importante/i);
  expect(task).toBeInTheDocument();

  // el usuario hace click en la tarea para marcarla como completada
  fireEvent.click(task);
  expect(task).toHaveClass('completed');
});