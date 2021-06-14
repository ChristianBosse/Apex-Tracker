import React from "react";
import styled from "styled-components";
import "../CSS/index.css";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Nav = () => {
  //Using Authentication to show the profile tab
  const { isAuthenticated } = useAuth0();

  return (
    <Wrapper className="stickyHeader">
      <Home exact to="/">
        HOME
      </Home>
      <Randomizer exact to="/randomizer">
        RANDOMIZER
      </Randomizer>
      <About exact to="/about">
        ABOUT
      </About>
      {isAuthenticated && (
        <Profile exact to="/profile">
          PROFILE
        </Profile>
      )}
    </Wrapper>
  );
};

//style is below
const Wrapper = styled.div`
  height: 45px;
  max-width: 100vw;
  background-color: black;
  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 3;
`;

const Home = styled(NavLink)`
  color: white;
  font-size: 22px;
  margin: 0px 20px;
  &:hover {
    color: #da292a;
  }
  &.active {
    color: #da292a;
  }
`;

const Randomizer = styled(NavLink)`
  color: white;
  font-size: 22px;
  margin: 0px 20px;
  &:hover {
    color: #da292a;
  }
  &.active {
    color: #da292a;
  }
`;

const About = styled(NavLink)`
  color: white;
  font-size: 22px;
  margin: 0px 20px;
  &:hover {
    color: #da292a;
  }
  &.active {
    color: #da292a;
  }
`;
const Profile = styled(NavLink)`
  color: white;
  font-size: 22px;
  margin: 0px 20px;
  &:hover {
    color: #da292a;
  }
  &.active {
    color: #da292a;
  }
`;

export default Nav;
