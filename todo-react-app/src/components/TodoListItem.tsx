import React from 'react';
import { Todo, ToggleTodo } from '../types';

interface TodoListItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo;
}


export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => (
  <li className={todo.complete ? 'complete' : undefined}>
    <label>
      <input type="checkbox" checked={todo.complete} onChange={() => toggleTodo(todo)} />
      {todo.text}
    </label>
    <button onClick={deleteTodo}>Del</button>
  </li>
);
