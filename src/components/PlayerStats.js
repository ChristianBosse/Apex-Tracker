import React, { useEffect, useState } from "react";
import styled from "styled-components";
import bgForPlayer from "../Media/bgforplayer.png";
import LifetimeStats from "./LifetimeStats";

const PlayerStats = () => {
  const [playerData, setPlayerData] = useState({});

  useEffect(() => {
    fetch(`/api/v2/profile/origin/Limenage`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setPlayerData(data.data));
  }, []);

  console.log(playerData);

  const { platformInfo, userInfo, segments } = playerData;

  return (
    <Wrapper>
      {/* <UserInfo>
        <ProfilePic src={platformInfo.avatarUrl} />
        <UserID>{platformInfo.platformUserId}</UserID>
        <Platform>Platform: {platformInfo.platformSlug}</Platform>
        <Views>Profile Views: {userInfo.pageviews}</Views>
      </UserInfo> */}
      <Bg src={bgForPlayer} />
      <LifetimeStats playerData={playerData} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Bg = styled.img`
  display: block;
  max-width: 99.99%;
  min-height: 500px;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
`;

const Platform = styled.p`
  color: white;
  font-size: 13px;
  font-family: "roboto";
  position: absolute;
  top: 645px;
  left: 55vw;
`;

const Views = styled.p`
  color: white;
  font-size: 13px;
  font-family: "roboto";
  position: absolute;
  top: 590px;
  left: 39vw;
`;

const UserInfo = styled.div`
  height: 80px;
  max-width: 100vw;
  background-color: #222222;
  z-index: 2;
`;

const ProfilePic = styled.img`
  height: 150px;
  border-radius: 50%;
  position: absolute;
  border: white 4px solid;
  top: 535px;
  left: 45.5vw;
  z-index: 2;
`;

const UserID = styled.p`
  position: absolute;
  color: white;
  top: 610px;
  left: 54vw;
  font-size: 30px;
  font-family: "roboto";
`;
export default PlayerStats;
