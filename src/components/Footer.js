import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <Copyright>
        2021 @{" "}
        <Link href="https://www.linkedin.com/in/christianbosse-/">
          Christian Bosse
        </Link>
      </Copyright>
      <Linkedin href="https://www.linkedin.com/in/christianbosse-/">
        My LinkedIn
      </Linkedin>
      <About>About</About>
      <DevAPI href="https://tracker.gg/developers">Tracker API</DevAPI>
      <GitHub href="https://github.com/ChristianBosse">GitHub Source</GitHub>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 75px;
  width: 100vw;
  background-color: #161616;
`;

const Copyright = styled.div`
  font-family: "Roboto", sans-serif;
  color: grey;
`;

const Linkedin = styled.a`
  font-family: "Roboto", sans-serif;
  color: grey;
  text-decoration: none;
  &:hover {
    color: #d9d9d9;
  }
`;

const About = styled.a`
  font-family: "Roboto", sans-serif;
  color: grey;
  text-decoration: none;
  &:hover {
    color: #d9d9d9;
  }
`;

const DevAPI = styled.a`
  font-family: "Roboto", sans-serif;
  color: grey;
  text-decoration: none;
  &:hover {
    color: #d9d9d9;
  }
`;

const Link = styled.a`
  font-family: "Roboto", sans-serif;
  color: grey;
  &:hover {
    color: #d9d9d9;
  }
`;

const GitHub = styled.a`
  font-family: "Roboto", sans-serif;
  color: grey;
  text-decoration: none;
  &:hover {
    color: #d9d9d9;
  }
`;

export default Footer;
