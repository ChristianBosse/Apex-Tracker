import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import bgForPlayer from "../Media/bgforplayer.png";
import LifetimeStats from "./LifetimeStats";
import { PlayerContext } from "./PlayerContext";
import UserHeaderStat from "./UserHeaderStat";
import UserNotFound from "./UserNotFound";
import Loading from "./Loading";

const PlayerStats = () => {
  //using PlayerContext for API Data
  const { username, platform, setPlayerData, playerData } =
    useContext(PlayerContext);
  //Telling the page to render on loaded
  const [isLoaded, setIsLoaded] = useState(false);

  //fetching backend API to get user data
  useEffect(() => {
    const api = async () => {
      await fetch(`/api/v2/profile/${platform}/${username}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setPlayerData(data.data);
          setIsLoaded(true);
        });
    };
    api();
  }, [username]);

  return (
    <>
      {isLoaded ? (
        <div>
          {playerData !== undefined ? (
            <Wrapper>
              <UserHeaderStat />
              <Bg src={bgForPlayer} />
              <LifetimeStats />
            </Wrapper>
          ) : (
            <UserNotFound />
          )}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

//style are below.
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
