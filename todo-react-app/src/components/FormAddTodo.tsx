import React, { useState, FormEvent, ChangeEvent } from 'react';
import { AddTodo } from '../types';


interface AddTodoFormProps {
    addTodo: AddTodo;
}

export const FormAddTodo: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleElement = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleNewTodo = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo('');
  };

  return (
    <form id="form-todo">
      <input
        type="text"
        placeholder="Digite a sua tarefa"
        value={newTodo}
        onChange={handleElement}
      />
      <button className="add-button" type="submit" onClick={handleNewTodo}>Adicionar</button>
    </form>
  );
};
