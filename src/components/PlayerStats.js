import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import bgForPlayer from "../Media/bgforplayer.png";
import LifetimeStats from "./LifetimeStats";
import { PlayerContext } from "./PlayerContext";
import UserHeaderStat from "./UserHeaderStat";

const PlayerStats = () => {
  const { username, platform, setPlayerData, playerData, setUsername } =
    useContext(PlayerContext);

  useEffect(() => {
    const defaultProfile = () => {
      if (username.length < 0) {
        setUsername("Limenage");
      }
    };
    fetch(`/api/v2/profile/${platform}/${username}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setPlayerData(data.data));

    return () => {
      defaultProfile();
    };
  }, []);

  console.log(platform, username, playerData);

  return (
    <Wrapper>
      <UserHeaderStat />
      <Bg src={bgForPlayer} />
      <LifetimeStats />
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

export default PlayerStats;
