import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoApp from './TodoApp';

test('Permite agregar una tarea a la lista', () => {
  render(<TodoApp />);
  
  const input = screen.getByRole('textbox');
  const button = screen.getByRole('button', { name: /agregar tarea/i });

  // simuyla escribir dentro del input y hacer click
  fireEvent.change(input, { target: { value: 'Nueva tarea' } });
  fireEvent.click(button);

  // verifica que la tarea aparece en la lista mencionada
  const newTask = screen.getByText(/nueva tarea/i);
  expect(newTask).toBeInTheDocument();
});