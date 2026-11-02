import React from 'react';
import { render } from '@testing-library/react';
import TodoList from './TodoList';

test('Genera un snapshot del componente (TodoList)', () => {
  const tasks = ['Tarea 1', 'Tarea 2'];
  
  // extrae el fragmento renderizado y lo compara con el snapshot
  const { asFragment } = render(<TodoList tasks={tasks} />);
  expect(asFragment()).toMatchSnapshot();
});