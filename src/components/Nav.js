import React from "react";
import styled from "styled-components";
const Nav = () => {
  return (
    <Wrapper>
      <Home>HOME</Home>
      <PlayerSearch>PLAYER LOOKUP</PlayerSearch>
      <Randomizer>RANDOMIZER</Randomizer>
      <About>ABOUT</About>
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
`;

const Home = styled.a`
  font-size: 22px;
  margin: 0px 20px;
  &:hover {
    color: #da292a;
  }
`;

const PlayerSearch = styled.a`
  font-size: 22px;
  margin: 0px 20px;
  &:hover {
    color: #da292a;
  }
`;

const Randomizer = styled.a`
  font-size: 22px;
  margin: 0px 20px;
  &:hover {
    color: #da292a;
  }
`;

const About = styled.a`
  font-size: 22px;
  margin: 0px 20px;
  &:hover {
    color: #da292a;
  }
`;

export default Nav;
