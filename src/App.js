import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";

import LyricState from "./context/LyricState";

import "./App.css";

const App = () => {
  return (
    <LyricState>
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </LyricState>
  );
};

export default App;
