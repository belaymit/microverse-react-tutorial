import React, { useState } from 'react';
import '../styles/addtodo.scss';

const AddTodo = () => {
  const [todo, setTodo] = useState('');
  return (
    <sectionc className="add-todo-container">
      <form action="" className="todo-form">
        <input
          type="text"
          placeholder="Input task"
          id="task"
          name="task"
          value={todo}
          // eslint-disable-next-line no-undef
          onChange={() => setTodo(e.target.value)}
        />
        <button type="button">Add Task</button>
      </form>
    </sectionc>
  );
};

export default AddTodo;
