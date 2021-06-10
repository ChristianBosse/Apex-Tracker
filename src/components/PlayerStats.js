import React, { useEffect, useState } from "react";

const PlayerStats = () => {
  const [playerData, setPlayerData] = useState([]);

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

  const {
    platformInfo: { avatarUrl, platformSlug, platformUserId },
    userInfo: { pageviews },
  } = playerData;

  console.log("Avatar", avatarUrl, platformSlug, platformUserId);

  return (
    <>
      <img src={avatarUrl} />
    </>
  );
};

export default PlayerStats;
