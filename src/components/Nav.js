import React from "react";
import styled from "styled-components";
import "../CSS/index.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Wrapper className="stickyHeader">
      <div>
        <Link to="/">
          <Home>HOME</Home>
        </Link>
      </div>
      <div>
        <Link to="/playersearch">
          <PlayerSearch>PLAYER LOOKUP</PlayerSearch>
        </Link>
      </div>
      <div>
        <Link to="/randomizer">
          <Randomizer>RANDOMIZER</Randomizer>
        </Link>
      </div>
      <div>
        <Link to="/about">
          <About>ABOUT</About>
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 45px;
  width: 100vw;
  background-color: black;
  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 3;
`;

const Home = styled.a`
  color: white;
  font-size: 22px;
  margin: 0px 20px;
  &:hover {
    color: #da292a;
  }
`;

const PlayerSearch = styled.a`
  color: white;
  font-size: 22px;
  margin: 0px 20px;
  &:hover {
    color: #da292a;
  }
`;

const Randomizer = styled.a`
  color: white;
  font-size: 22px;
  margin: 0px 20px;
  &:hover {
    color: #da292a;
  }
`;

const About = styled.a`
  color: white;
  font-size: 22px;
  margin: 0px 20px;
  &:hover {
    color: #da292a;
  }
`;

export default Nav;
