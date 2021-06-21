import React, { useContext } from "react";
import styled from "styled-components";
import { PlayerContext } from "./PlayerContext";

const LifetimeStats = () => {
  //Get Data from PlayerContext to fetch the API
  const { playerData } = useContext(PlayerContext);
  //segments of a players Apex Legend Profile.
  const { segments } = playerData;

  return (
    <Wrapper>
      <Lifetime>
        <LifetimeOverview>
          <LifetimeText>Lifetime Overview</LifetimeText>
          {segments[0].stats.matchesPlayed && (
            <Matches>
              {segments[0].stats.matchesPlayed.displayValue} Matches
            </Matches>
          )}
          <Rank>
            <RankWrapper>
              <RankPic src={segments[0].stats.rankScore.metadata.iconUrl} />
              <RankName>
                {segments[0].stats.rankScore.metadata.rankName}
              </RankName>
            </RankWrapper>
            <RpWrapper>
              {segments[0].stats.rankScore ? (
                <RankScore>
                  {segments[0].stats.rankScore.displayName}:
                </RankScore>
              ) : (
                <RankScore> Rank Score:</RankScore>
              )}
              {segments[0].stats.rankScore ? (
                <RankRP>{segments[0].stats.rankScore.displayValue}</RankRP>
              ) : (
                <RankRP>No Data</RankRP>
              )}
            </RpWrapper>
          </Rank>
          <LevelWrapper>
            {segments[0].stats.level ? (
              <LevelText>{segments[0].stats.level.displayName}:</LevelText>
            ) : (
              <LevelText>Level</LevelText>
            )}
            {segments[0].stats.level ? (
              <Level>{segments[0].stats.level.displayValue}</Level>
            ) : (
              <Level>No Data</Level>
            )}
          </LevelWrapper>
          <KillWrapper>
            {segments[0].stats.kills ? (
              <KillText>{segments[0].stats.kills.displayName}</KillText>
            ) : (
              <KillText>Kills</KillText>
            )}
            {segments[0].stats.kills ? (
              <TotalKills>{segments[0].stats.kills.displayValue}</TotalKills>
            ) : (
              <TotalKills>No Data</TotalKills>
            )}
          </KillWrapper>
          <DamageWrapper>
            {segments[0].stats.damage ? (
              <DamageText>{segments[0].stats.damage.displayName}</DamageText>
            ) : (
              <DamageText>Damage</DamageText>
            )}
            {segments[0].stats.damage ? (
              <AllDamage>{segments[0].stats.damage.displayValue}</AllDamage>
            ) : (
              <AllDamage>No Data</AllDamage>
            )}
          </DamageWrapper>
        </LifetimeOverview>
      </Lifetime>
    </Wrapper>
  );
};

//All style are below.
const Wrapper = styled.div``;

const LevelText = styled.p`
  color: white;
  font-family: "roboto";
`;

const DamageText = styled.p`
  color: white;
  font-family: "roboto";
`;

const DamageWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: -264px;
  height: 60px;
  width: 130px;
  left: 740px;
  background-color: #222222;
  border-radius: 9px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.8);
`;

const KillWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: -204px;
  height: 60px;
  width: 130px;
  left: 550px;
  background-color: #222222;
  border-radius: 9px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.8);
`;

const KillText = styled.p`
  color: white;
  font-family: "roboto";
`;

const LevelWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: -145px;
  height: 60px;
  width: 130px;
  left: 350px;
  background-color: #222222;
  border-radius: 9px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.8);
`;

const AllDamage = styled.p`
  color: white;
  font-family: "roboto";
`;

const RankWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 50px;
  width: 140px;
`;

const RpWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: -55px;
  height: 60px;
  width: 130px;
  left: 150px;
  background-color: #222222;
  border-radius: 9px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.8);
`;

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
  height: 250px;
  width: 900px;
  background-color: #303030;
  position: relative;
  top: 21px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.8);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const RankPic = styled.img``;

const RankName = styled.p`
  color: white;
  font-family: "roboto";
`;

const RankScore = styled.p`
  color: white;
  font-family: "roboto";
`;

const RankRP = styled.p`
  color: white;
  font-family: "roboto";
`;

const Level = styled.p`
  color: white;
  font-family: "roboto";
`;

const TotalKills = styled.p`
  color: white;
  font-family: "roboto";
`;

export default LifetimeStats;
