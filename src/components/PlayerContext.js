import React, { createContext, useState } from "react";

export const PlayerContext = createContext(null);

export const PlayerContextProvider = ({ children }) => {
  const [playerData, setPlayerData] = useState([]);
  const [platform, setPlatform] = useState("origin");
  const [username, setUsername] = useState("");

  //   console.log("PlayerContext", platform, username.length);

  return (
    <PlayerContext.Provider
      value={{
        playerData,
        setPlayerData,
        platform,
        setPlatform,
        username,
        setUsername,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
