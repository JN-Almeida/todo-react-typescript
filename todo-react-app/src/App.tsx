import React, { useState } from 'react';
import { Todo, ToggleTodo, AddTodo } from './types';
import { TodoList } from './components/TodoList';
import { FormAddTodo } from './components/FormAddTodo';
import './app.css';


const listTodos: Array<Todo> = [];


const App: React.FC = () => {
  const [todos, setTodos] = useState(listTodos);

  const toggleTodo: ToggleTodo = (selected) => {
    const newTodo = todos.map((todo) => {
      if (todo === selected) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodo);
  };


  const addTodo: AddTodo = (newTodo) => {
    if (newTodo !== '') {
      setTodos([...todos, { text: newTodo, complete: false }]);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>To-do List</h1>
          <FormAddTodo addTodo={addTodo} />
        </header>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
      </div>
    </div>
  );
};

export default App;
