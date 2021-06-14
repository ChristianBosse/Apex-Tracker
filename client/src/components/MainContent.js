import React from "react";
import styled from "styled-components";
import wraith from "../Media/wraith.png";
import octane from "../Media/octane.png";
import lifeline from "../Media/lifeline.png";
import bloodhound from "../Media/bloodhound.png";
import Search from "./Search";

const MainContent = () => {
  //Main content of the main page.
  return (
    <Wrapper>
      <Search />
      <MetaWrapper>
        <MetaText>Legend Meta</MetaText>
        <MetaDesc>
          The Legend Meta Data is sampled from
          <MetaDescTwo>
            all tracked player, and is updated every monday.
          </MetaDescTwo>
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

//style are below
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

const MetaDescTwo = styled.span`
  color: white;
  font-size: 20px;
  font-family: "roboto";
  margin-bottom: 20px;
  display: block;
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

const Wrapper = styled.div`
  margin: 0;
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
