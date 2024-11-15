// Initial state
const initialState = {
    tally: 0,
  };
  
  // Action Types
  const ADD = 'ADD';
  const SUBTRACT = 'SUBTRACT';
  const RESET = 'RESET';
  
  // Create Store Function
  function createStore(reducer, initialState) {
    let state = initialState;
    const listeners = [];
  
    // Get the current state
    function getState() {
      return state;
    }
  
    // Dispatch an action to update the state
    function dispatch(action) {
      state = reducer(state, action);
      listeners.forEach(listener => listener());
    }
  
    // Subscribe to state changes
    function subscribe(listener) {
      listeners.push(listener);
      // Return a function to unsubscribe
      return () => {
        const index = listeners.indexOf(listener);
        if (index >= 0) {
          listeners.splice(index, 1);
        }
      };
    }
  
    return {
      getState,
      dispatch,
      subscribe,
    };
  }
  
