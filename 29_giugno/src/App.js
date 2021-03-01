import './App.css';
import React, {createContext, useReducer} from "react";
import Reducer, {InitialState} from "./Reducer";
import Router from "./Router";
import 'bootstrap/dist/css/bootstrap.min.css';

export const StateContext = createContext();

function App() {
  return (
      <StateContext.Provider value={useReducer(Reducer, InitialState)}>
          <Router></Router>
      </StateContext.Provider>
  );
}

export default App;
