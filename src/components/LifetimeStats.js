import React from "react";
import styled from "styled-components";

const LifetimeStats = ({ segments }) => {
  console.log("Lifetime", segments);

  return (
    <Wrapper>
      {/* <Lifetime>
        <LifetimeOverview>
          <LifetimeText>Lifetime Overview</LifetimeText>
          <Matches>
            {segments[0].stats.matchesPlayed.displayValue} Matches
          </Matches>
          <Rank>
            <RankPic src={segments[0].stats.rankScore.metadata.iconUrl} />
            <RankName>{segments[0].stats.rankScore.metadata.rankName}</RankName>
            <RankScore>{segments[0].stats.rankScore.displayName}:</RankScore>
            <RankRP>{segments[0].stats.rankScore.displayValue}</RankRP>
          </Rank>
          <Level></Level>
          <TotalKills></TotalKills>
        </LifetimeOverview>
      </Lifetime> */}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const LifetimeText = styled.p`
  color: white;
  font-size: 25px;
  font-family: "roboto";
  position: relative;
  top: 18px;
  left: 20px;
`;

const LifetimeOverview = styled.div`
  height: 70px;
  width: 900px;
  background-color: #232323;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 670px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const Lifetime = styled.div`
  display: flex;
  justify-content: center;
  z-index: 1;
`;

const Matches = styled.p`
  color: white;
  font-family: "roboto";
  font-weight: bold;
  font-size: 13px;
  position: relative;
  top: -2px;
  left: 250px;
`;

const Rank = styled.div`
  height: 300px;
  width: 900px;
  background-color: #303030;
  position: relative;
  top: 21px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.8);
`;

const RankPic = styled.img`
  position: relative;
  top: 80px;
  left: 10px;
`;

const RankName = styled.p`
  color: white;
  font-family: "roboto";
  position: relative;
  left: 140px;
  top: -20px;
`;

const RankScore = styled.p`
  color: white;
  font-family: "roboto";
  position: relative;
  left: 140px;
  top: -10px;
`;

const RankRP = styled.p`
  color: white;
  font-family: "roboto";
  position: relative;
  left: 158px;
  top: -5px;
`;

const Level = styled.p``;

const TotalKills = styled.p``;

export default LifetimeStats;
