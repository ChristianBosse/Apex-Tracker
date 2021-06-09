import React, { useState } from "react";
import bg from "../Media/bg.png";
import styled from "styled-components";
import wraith from "../Media/wraith.png";
import octane from "../Media/octane.png";
import lifeline from "../Media/lifeline.png";
import bloodhound from "../Media/bloodhound.png";
import originLogo from "../Media/originlogo.svg";
import playstationLogo from "../Media/PlayStationlogo.svg";
import xboxLogo from "../Media/Xboxlogo.svg";
import apexLogo from "../Media/apexlogo.svg";

const MainContent = () => {
  const [platform, setPlatform] = useState("Enter Origin Username");

  const originPlatform = () => {
    setPlatform("Enter Origin Username");
  };
  const psPlatform = () => {
    setPlatform("Enter Playstation Username");
  };
  const xboxPlatform = () => {
    setPlatform("Enter Xbox Username");
  };

  return (
    <Wrapper>
      <Image src={bg} alt="Kings Cayon" />
      <TrackWrapper>
        <SvgLogo src={apexLogo} />
        <TextWrapper>
          <MainText>APEX LEGEND STATS TRACKER.</MainText>
          <PlayerText>OVER 13 MILLION USER STATS TRACKED.</PlayerText>
        </TextWrapper>
      </TrackWrapper>
      <SearchWrapper>
        <Origin onClick={originPlatform} autoFocus>
          <Logo src={originLogo} />
        </Origin>
        <Playstation onClick={psPlatform}>
          <Logo src={playstationLogo} />
        </Playstation>
        <Xbox onClick={xboxPlatform}>
          <Logo src={xboxLogo} />
        </Xbox>
        <PlayerSearch type="text" placeholder={platform}></PlayerSearch>
      </SearchWrapper>
      <MetaWrapper>
        <MetaText>Legend Meta</MetaText>
        <MetaDesc>
          The Legend Meta Data is sampled from
          <MetaDesc>all tracked player, and is updated every monday.</MetaDesc>
        </MetaDesc>
        <ViewMeta>View All Legends</ViewMeta>
      </MetaWrapper>
      <LegendMeta>
        <TopLegend>
          <Wraith>
            <LegendImg src={wraith} />
            <WraithInfo>
              <LegendName>Wraith</LegendName>
              <Stat>Usage 14.2% KPM 3.5</Stat>
            </WraithInfo>
          </Wraith>
          <Octane>
            <LegendImg src={octane} />
            <OctaneInfo>
              <LegendName>Octane</LegendName>
              <Stat>Usage 12.4% KPM 2.5</Stat>
            </OctaneInfo>
          </Octane>
          <Lifeline>
            <LegendImg src={lifeline} />
            <LifelineInfo>
              <LegendName>Lifeline</LegendName>
              <Stat>Usage 13.7% KPM 3.1</Stat>
            </LifelineInfo>
          </Lifeline>
          <Bloodhound>
            <LegendImg src={bloodhound} />
            <BloodhoundInfo>
              <LegendName>Bloodhound</LegendName>
              <Stat>Usage 12% KPM 2.1</Stat>
            </BloodhoundInfo>
          </Bloodhound>
        </TopLegend>
      </LegendMeta>
    </Wrapper>
  );
};

const MetaWrapper = styled.div`
  position: absolute;
  top: 70vh;
  left: 20vh;
`;

const MetaText = styled.p`
  color: white;
  font-size: 35px;
  margin-bottom: 20px;
  font-family: "roboto";
`;

const MetaDesc = styled.p`
  color: white;
  font-size: 20px;
  font-family: "roboto";
  margin-bottom: 20px;
`;

const ViewMeta = styled.button`
  height: 40px;
  width: 175px;
  border-radius: 10px;
  border: none;
  font-size: 20px;
  background-color: #9e1a1a;
  color: white;
  font-family: "roboto";
  &:focus {
    border: none;
  }
`;

const TrackWrapper = styled.div`
  position: absolute;
  display: flex;
  top: 23vh;
  left: 9vw;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MainText = styled.p`
  color: white;
  font-size: 60px;
  margin-bottom: 10px;
  margin-left: 30px;
`;

const PlayerText = styled.p`
  margin-left: 30px;
  font-size: 30px;
  color: white;
`;

const SvgLogo = styled.img``;

const SearchWrapper = styled.div`
  position: absolute;
  top: 27vh;
  left: 60vw;
`;

const Logo = styled.img`
  height: 40px;
  width: 50px;
  fill: white:
`;

const Origin = styled.button`
  padding: 15px 16px;
  border: none;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  background-color: rgba(0, 0, 0, 0.4);

  &:focus {
    background-color: rgba(46, 49, 49, 1);
    border: none;
    outline: none;
  }
`;

const Playstation = styled.button`
  padding: 15px 20px;
  border: none;
  background-color: rgba(0, 0, 0, 0.4);
  &:focus {
    background-color: rgba(46, 49, 49, 1);
  }
`;

const Xbox = styled.button`
  padding: 15px 18px;
  border: none;
  background-color: rgba(0, 0, 0, 0.4);
  &:focus {
    background-color: rgba(46, 49, 49, 1);
  }
`;

const PlayerSearch = styled.input`
  position: absolute;
  border: none;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  height: 71px;
  width: 350px;
  font-size: 27px;
  /* padding-bottom: 8px; */

  &:focus {
    outline: none;
    border: none;
  }
`;

const Wrapper = styled.div`
  margin: 0;
`;

const Image = styled.img`
  display: block;
  min-width: 99.99%;
  max-width: 99.99%;
  height: 500px;
  object-fit: cover;
  z-index: 1;
  filter: brightness(0.6);
`;

const LegendMeta = styled.div`
  bottom: 0px;
  max-width: 100vw;
  height: 450px;
  background: linear-gradient(to right, #541010, #a81b1b);
`;

const TopLegend = styled.div``;

const Wraith = styled.div`
  position: absolute;
  top: 584px;
  left: 42vw;
`;

const Lifeline = styled.div`
  position: absolute;
  top: 584px;
  left: 70vw;
`;

const Octane = styled.div`
  position: absolute;
  top: 784px;
  left: 42vw;
`;

const Bloodhound = styled.div`
  position: absolute;
  top: 784px;
  left: 70vw;
`;

const LegendImg = styled.img`
  position: absolute;
  height: 200px;
  z-index: 2;
`;

const WraithInfo = styled.div`
  position: absolute;
  padding: 20px 110px;
  background-color: #541010;
  border-radius: 10px;
  top: 80px;
  z-index: 1;
`;
const LifelineInfo = styled.div`
  position: absolute;
  padding: 20px 110px;
  background-color: #541010;
  border-radius: 10px;
  top: 80px;
  z-index: 1;
`;
const OctaneInfo = styled.div`
  position: absolute;
  padding: 20px 110px;
  background-color: #541010;
  border-radius: 10px;
  top: 80px;
  z-index: 1;
`;
const BloodhoundInfo = styled.div`
  position: absolute;
  padding: 20px 110px;
  background-color: #541010;
  border-radius: 10px;
  top: 80px;
  z-index: 1;
`;

const LegendName = styled.p`
  color: white;
  font-family: "Roboto", sans-serif;
  display: block;
  padding-left: 45px;
  font-size: 23px;
`;

const Stat = styled.p`
  color: white;
  font-family: "Roboto", sans-serif;
  display: block;
  width: 200px;
  padding-left: 45px;
  font-size: 14px;
`;

export default MainContent;
