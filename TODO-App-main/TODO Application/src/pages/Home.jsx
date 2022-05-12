import React from 'react';

import TodoList from '../components/TodoList';
import style from './home.module.css';

const Home = () => {
  console.log('==========> home')
  return (
    <div className={style.div}>
      <strong> <h1 style={{textShadow: "2px 2px red"}}> Strategic-Planning App </h1> </strong>
      <TodoList />
    </div>
  );
};

export default Home;
