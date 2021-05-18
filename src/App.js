import React from 'react';
import {useSelector} from 'react-redux';


const App = () => {
  const counter = useSelector(state => state.counterReducer);
  const isLogged = useSelector(state => state.loggedReducer)
  return (
    <div className="App">
    <h1>Counter {counter} </h1>
    <h3>Valuable information I shouldn't see</h3>
    <h4>{isLogged}</h4>
    </div>
  );
}

export default App;
