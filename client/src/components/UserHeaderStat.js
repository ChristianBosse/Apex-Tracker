import React, { useContext } from "react";
import styled from "styled-components";
import { PlayerContext } from "./PlayerContext";

const UserHeaderStat = () => {
  //using PlayerContext to render searched player info
  const { playerData } = useContext(PlayerContext);

  const { platformInfo, userInfo } = playerData;

  return (
    <UserInfo>
      <ProfilePic src={platformInfo.avatarUrl} />
      <UserID>{platformInfo.platformUserId}</UserID>
      <Platform>Platform: {platformInfo.platformSlug}</Platform>
      <Views>Profile Views: {userInfo.pageviews}</Views>
    </UserInfo>
  );
};

//style are below
const Platform = styled.p`
  color: white;
  font-size: 13px;
  font-family: "roboto";
  position: absolute;
  top: 645px;
  left: 54vw;
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

export default UserHeaderStat;
