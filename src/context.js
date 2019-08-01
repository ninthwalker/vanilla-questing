import React, { createContext, useReducer } from "react";
import reducer from "./reducers/global";

// DECLARE CONTEXT
const Context = createContext();

// CONTEXT PROVIDER
function Provider({ children }) {

   // ATTACH THE REDUCER
   const [state, dispatch] = useReducer(reducer, {
      data: null,
      current: 0,
      profiles: null,
      settings: null,
      request: null,
      loaded: null,
      messages: [],
      prompt: {
         visible: false,
         type: null
      }
   })

   return (
      <Context.Provider value={{ state, dispatch }}>
         { children }
      </Context.Provider>
   )
}

export {
   Context,
   Provider
}