import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./MainPage";
import styled from "styled-components";
import "../CSS/index.css";
import StatPage from "./StatPage";
import RandomizerPage from "./RandomizerPage";
import AboutPage from "./AboutPage";

const App = () => {
  return (
    <Router>
      <Main>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/playersearch">
            <StatPage />
          </Route>
          <Route exact path="/randomizer">
            <RandomizerPage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
        </Switch>
      </Main>
    </Router>
  );
};

const Main = styled.div``;

export default App;
