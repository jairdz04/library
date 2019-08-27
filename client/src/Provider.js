import React, { useState, useReducer, useEffect } from 'react';
import StoreContext from './store/Context';

const Provider = ({ reducer, children }) => {
  const [store, dispatch] = useReducer(reducer);
  const [state, setState] = useState({ isLoaded: false });

  useEffect(() => {
    dispatch({ type: '@init' });
    setState({ isLoaded: true });
  }, []);

  return (
    <StoreContext.Provider value={[store, dispatch]}>
      {state.isLoaded ? children : false}
    </StoreContext.Provider>
  );
};

export default Provider;