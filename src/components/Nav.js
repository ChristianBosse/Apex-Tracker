import React from "react";
import styled from "styled-components";
import "../CSS/index.css";
import { NavLink } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const Nav = () => {
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
      <LoginButton />
      <LogoutButton />
    </Wrapper>
  );
};

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

export default Nav;
