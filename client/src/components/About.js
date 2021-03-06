import React from "react";
import styled from "styled-components";
import myself from "../Media/me.jpg";

const About = () => {
  return (
    <>
      <Head>
        <Title>About Me</Title>
      </Head>
      <Body>
        <Picture src={myself} />
        <Wrapper>
          <AboutMe>
            Hello, my name is Christian Bosse, I am a Full-stack web developer
            that graduated from Concordia University Web Development Bootcamp on
            June 16th, 2021. This website is an amazing website that I did for
            my final project. I got inspired to do this since I do love playing
            games and this is one of my favorite. Apex Legend is an awesome
            battle royale game that I love and have over 500+ hours.
          </AboutMe>
          <AboutMe>
            This website was made using React, Node, MongoDB, and Express. I am
            very glad of my passion for web development and am happy to commit
            to helping people enjoy a better environment for user experience.
            This website uses API and so many other things to get the data
            requested to the user as fast as possible and in an awesome user
            experience way.
          </AboutMe>
          <AboutMe>
            This project is also open-source to anybody who wishes to use it and
            all documentation can be found on my GitHub. I am glad that you took
            the time to read this and explore my website and hope you had an
            excellent experience.
          </AboutMe>
          <AboutMe>
            i'm currently looking for a web development role that will use my
            full-stack skills. if you've enjoyed this project i would love to
            chat!
          </AboutMe>
        </Wrapper>
      </Body>
      <ApexLegend>
        <Video
          width="560"
          height="315"
          src="https://www.youtube.com/embed/oshvcDjEKZc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></Video>
        <Wrap>
          <Play>
            If you want to play Apex Legend here is a link to the official
            website.
          </Play>
          <Download href="https://www.ea.com/games/apex-legends">
            OFFICIAL WEBSITE
          </Download>
        </Wrap>
      </ApexLegend>
    </>
  );
};

//All styles are down below.
const Play = styled.p`
  color: white;
  /* font-family: "roboto"; */
  font-size: 30px;
  margin-top: 170px;
  margin-bottom: 50px;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Download = styled.a`
  background-color: #da292a;
  border: none;
  padding: 20px 80px;
  color: white;
  font-size: 30px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  max-width: 200px;

  &:focus {
    border: none;
  }
  &:hover {
    background-color: #da393a;
  }
`;

const Video = styled.iframe`
  margin-top: 70px;
`;

const ApexLegend = styled.div`
  max-width: 100vw;
  min-height: 450px;
  background: linear-gradient(to right, #541010, #a81b1b);
  display: flex;
  justify-content: space-evenly;
`;

const Head = styled.div`
  height: 70px;
  max-width: 100vw;
  background-color: #161616;
`;

const Wrapper = styled.div`
  max-width: 60vw;
`;

const Title = styled.p`
  color: white;
  font-family: "roboto";
  font-size: 25px;
  text-align: center;
  padding-top: 16px;
`;

const Body = styled.div`
  height: 600px;
  max-width: 100vw;
  background-color: #282828;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Picture = styled.img`
  height: 320px;

  border-radius: 20%;
`;

const AboutMe = styled.p`
  color: lightgray;
  font-family: "roboto";
  font-size: 25px;
  margin-bottom: 30px;
`;
export default About;
