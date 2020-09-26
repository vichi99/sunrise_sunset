import React from 'react';
import { Route, Switch } from "react-router-dom";

// styles
import './App.scss';

// views
import Sun from "./views/Sun";

function App() {
  return (
    <div className="App">

      <Switch>
        <Route path="/" component={Sun} exact />
      </Switch>

    </div>
  );
}

export default App;
