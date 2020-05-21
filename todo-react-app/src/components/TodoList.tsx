import React from 'react';
import { TodoListItem } from './TodoListItem';
import { Todo, ToggleTodo } from '../types';


interface TodoListProps {
    todos: Array<Todo>;
    toggleTodo: ToggleTodo;
}


export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => (
  <div>
    {todos.length ? (
      <ul>
        {todos.map((todo) => <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />)}
      </ul>
    ) : (
      <div className="no-task">Sem Tarefas</div>
    )}
  </div>
);
