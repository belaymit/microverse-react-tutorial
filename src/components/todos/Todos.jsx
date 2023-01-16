import React from 'react';
import AddTodo from '../../reusableComponent/AddTodo';
import Items from '../../reusableComponent/Items';
import ToDoSection from '../../reusableComponent/ToDoSection';
import '../../styles/todos.scss';

const Todos = () => (
  <section className="todo-container">
    <div className="todos">
      <div className="header">
        <Items title="Todo List" />
      </div>
      <div>
        <AddTodo />
      </div>
      <ToDoSection />
    </div>
  </section>
);

export default Todos;
