import React, { useContext } from 'react';


const StoreContext = React.createContext();
export const useGlobalContext = () => useContext(StoreContext);

export default StoreContext;