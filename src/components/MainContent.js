import React from "react";
import bg from "../Media/bg.png";
import styled from "styled-components";
import wraith from "../Media/wraith.png";
import octane from "../Media/octane.png";
import lifeline from "../Media/lifeline.png";
import bloodhound from "../Media/bloodhound.png";

const MainContent = () => {
  return (
    <Wrapper>
      <ImageFilter />
      <Image src={bg} alt="Kings Cayon" />
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

const Wrapper = styled.div`
  margin: 0;
`;

const Image = styled.img`
  display: block;
  width: 100vw;
  height: 500px;
  object-fit: cover;
  z-index: 1;
`;

const ImageFilter = styled.div`
  width: 100vw;
  height: 500px;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  z-index: 2;
`;

const LegendMeta = styled.div`
  bottom: 0px;
  width: 100vw;
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
