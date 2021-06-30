import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Routes from "./routing";
import Contexts from "./context";

/**
 * @author Davi Wegner
 * @email davi@wegn.dev
 * @created 26-06-2021
 */

const App: React.FC = () => {
  return (
    <div className="App">
      {Contexts.reduce(
        (acc, crr) => {
          acc = <crr.Provider>{acc}</crr.Provider>;
          return acc;
        },
        <Router>
          <Routes />
        </Router>
      )}
    </div>
  );
};

export default App;
