import React, { createContext, useState } from "react";

export const PlayerContext = createContext(null);

export const PlayerContextProvider = ({ children }) => {
  //Context to set the playerData from the API and also set Username and platform
  const [playerData, setPlayerData] = useState([]);
  const [platform, setPlatform] = useState("origin");
  const [username, setUsername] = useState("");

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
