import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";

// views
import Home from "./views/Home";

function App() {
  return (
    <div className="App">

      <main className="content" >
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </main>

    </div>
  );
}

export default App;
