import React, { useEffect, useState } from "react";

const PlayerStats = () => {
  const [playerData, setPlayerData] = useState();

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

  return (
    <>
      <div>{playerData}</div>
    </>
  );
};

export default PlayerStats;
