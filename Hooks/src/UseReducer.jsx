import React, { useReducer } from 'react';

// Reducer function that defines how the state should be updated
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const initialState = { count: 0 }; // Initial state

function UseReducer() {
  // The useReducer hook takes the reducer function, initial state, and an optional init function.
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Counter Example Using useReducer Hooks</h1>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
}

export default UseReducer;
