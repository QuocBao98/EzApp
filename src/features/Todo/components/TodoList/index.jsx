import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss';

TodoList.propTypes = {
   todoList: PropTypes.array,
   onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
   todoList: [],
   onTodoClick: null,
};

function TodoList({ todoList, onTodoClick }) {
   const handleTodoClick = (todo, idx) => {
      if (!onTodoClick) return;

      onTodoClick(todo, idx);
   };

   return (
      <ul className="todo-list">
         {todoList.map((todo, idx) => (
            <li
               className={classNames({
                  todoitem: true,
                  completed: todo.status === 'completed',
               })}
               key={todo.id}
               onClick={() => handleTodoClick(todo, idx)}
            >
               {todo.title}
            </li>
         ))}
      </ul>
   );
}

export default TodoList;
