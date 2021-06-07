import React from "react";
import Nav from "./Nav";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <Wrapper></Wrapper>
      <Nav />
    </>
  );
};

const Wrapper = styled.div`
  height: 40px;
  width: 100vw;
  background-color: #161616;
`;

export default Header;
