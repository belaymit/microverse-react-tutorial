import React from 'react';
import { BsTrash } from 'react-icons/bs';
import { MdModeEditOutline } from 'react-icons/md';
import '../styles/todosection.scss';

const ToDoSection = () => (
  <section className="todo-section">
    <div className="todo-container">
      <div className="wrapper">
        <div className="user-info">
          <div className="check-box">
            <input type="checkbox" id="check-box" name="check-box" className="check-box-icon" />
          </div>
          <div className="todo-details">
            <h5>This is todo</h5>
            <p>01/16/2023</p>
          </div>
        </div>
        <div className="action-btns">
          <BsTrash className="trash-icon" />
          <MdModeEditOutline className="edit-icon" />
        </div>
      </div>
    </div>
  </section>
);

export default ToDoSection;
