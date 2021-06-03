import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./MainPage";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
