import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions/index';

const App = () => {
  const counter = useSelector((state) => state.counterReducer);
  const isLogged = useSelector((state) => state.loggedReducer);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <h1>Counter {counter} </h1>
      {isLogged ? <h3>Valuable information I shouldn't see</h3> : ''}
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(3))}>-</button>
    </div>
  );
};

export default App;
