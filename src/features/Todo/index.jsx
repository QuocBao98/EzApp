import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';
import { Route, Routes, useMatch } from 'react-router-dom';
import ListPage from './pages/ListPage';
import PageDetail from './pages/PageDetail';

TodoFeature.propTypes = {};

function TodoFeature(props) {
   const todoList = useMatch('/todo');
   const detailPage = useMatch('/todo/:todo-id');

   return (
      <div>
         <h3>todo page</h3>
         <ListPage />
      </div>
   );
}

export default TodoFeature;
