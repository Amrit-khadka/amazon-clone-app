import React, { createContext, useContext, useReducer } from 'react'


// Prepares the datalayer
export const StateContext = createContext();

//Warp our app and provide the Data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
  );

// allow to Pull information from the data layer
export const useStateValue = () => useContext(StateContext);  