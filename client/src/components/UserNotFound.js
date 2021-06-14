import React from "react";
import styled from "styled-components";
import sadface from "../Media/sadface.png";

//when a user isn't found in the API show an error.
const UserNotFound = () => {
  return (
    <>
      <Wrapper />
      <Body>
        <SadUser src={sadface} />
        <Text>
          User not found. Make sure to put every character case sensitive and/or
          make sure the player exist.
        </Text>
      </Body>
    </>
  );
};

//style are below
const Wrapper = styled.div`
  height: 80px;
  max-width: 100vw;
  background-color: #222222;
`;

const Body = styled.div`
  height: 500px;
  max-width: 100vw;
  background-color: #303030;
  position: relative;
`;

const SadUser = styled.img`
  height: 300px;
  position: relative;
  left: 42.5vw;
  top: 30px;
`;

const Text = styled.p`
  font-family: "roboto";
  color: lightgray;
  font-size: 2rem;
  text-align: center;
  margin-top: 30px;
`;

export default UserNotFound;
