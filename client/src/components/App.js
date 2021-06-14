import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./MainPage";
import styled from "styled-components";
import "../CSS/index.css";
import StatPage from "./StatPage";
import RandomizerPage from "./RandomizerPage";
import AboutPage from "./AboutPage";
import { PlayerContextProvider } from "./PlayerContext";
import ProfilePage from "./ProfilePage";

//PlayerContext is used to give the API the username and platform value.
//Its wrapped around everything for ease of access trought the app.
const App = () => {
  return (
    <PlayerContextProvider>
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
            <Route exact path="/profile">
              <ProfilePage />
            </Route>
          </Switch>
        </Main>
      </Router>
    </PlayerContextProvider>
  );
};

const Main = styled.div``;

export default App;
