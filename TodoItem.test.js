import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoItem from './TodoItem';

test('Muestra la tarea correctamente', () => {
  // renderiza el componente con una tarea de prueba
  render(<TodoItem task="Aprender Jest" />);
  
  // busca el elemento y verifica que este en el DOM
  const taskElement = screen.getByText(/Aprender Jest/i);
  expect(taskElement).toBeInTheDocument();
});