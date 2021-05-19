import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions/actions';

const App = () => {
  const counter = useSelector((state) => state.counterReducer);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <h1>Counter {counter}</h1>
      {isLogged ? <h3>sensitive data leak</h3> : ''}
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(3))}>-</button>
    </div>
  );
};

export default App;
