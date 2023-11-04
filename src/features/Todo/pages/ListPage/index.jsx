import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../components/TodoList';
import TodoForm from '../../components/TodoForm';

ListPage.propTypes = {};

function ListPage(props) {
   const initTodoList = [
      {
         id: 1,
         title: 'Eat',
         status: 'new',
      },
      {
         id: 2,
         title: 'Sleep',
         status: 'completed',
      },

      {
         id: 3,
         title: 'Code',
         status: 'new',
      },
   ];

   const [todoList, setTodoList] = useState(initTodoList);
   const [filterStatus, setFilterStatus] = useState('all');

   const handleTodoClick = (todo, idx) => {
      ///clone array,obj hiện tại
      const newTodoList = [...todoList];

      ///toggle item
      const newTodo = {
         ...newTodoList[idx],
         status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
      };

      /// update lại cái arr||obj
      newTodoList[idx] = newTodo;
      setTodoList(newTodoList);
   };

   const handleShowAll = () => {
      setFilterStatus('all');
   };

   const handleShowNew = () => {
      setFilterStatus('new');
   };

   const handleShowCompleted = () => {
      setFilterStatus('completed');
   };

   const rederTodoList = todoList.filter((todo) => filterStatus === 'all' || todo.status === filterStatus);

   const handleTodoFormSubmit = (valuesForm) => {
      console.log('valuesForm' + valuesForm);
      console.log('valuesForm title' + valuesForm.title);
      console.log('xyz');
      const newTodo = {
         id: todoList.length + 1,
         title: valuesForm.title,
         status: 'new',
      };

      const newTodoList = [...todoList, newTodo];
      setTodoList(newTodoList);
   };

   return (
      <div>
         <h3>What todo form</h3>
         {/* <TodoForm onSubmit={handleTodoFormSubmit} /> */}
         <TodoForm />

         <h3>Todo List</h3>
         <TodoList todoList={rederTodoList} onTodoClick={handleTodoClick} />

         <button onClick={handleShowAll}>Show All</button>
         <button onClick={handleShowNew}>Show new</button>
         <button onClick={handleShowCompleted}>Show Completed</button>
      </div>
   );
}

export default ListPage;
