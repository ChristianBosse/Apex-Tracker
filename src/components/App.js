import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./MainPage";
import styled from "styled-components";
import "../CSS/index.css";

const App = () => {
  return (
    <Router>
      <Main>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
        </Switch>
      </Main>
    </Router>
  );
};

const Main = styled.div``;

export default App;
