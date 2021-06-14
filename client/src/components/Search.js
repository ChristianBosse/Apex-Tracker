import React, { useContext, useState } from "react";
import styled from "styled-components";
import originLogo from "../Media/originlogo.svg";
import playstationLogo from "../Media/PlayStationlogo.svg";
import xboxLogo from "../Media/Xboxlogo.svg";
import bg from "../Media/bg.png";
import apexLogo from "../Media/apexlogo.svg";
import { PlayerContext } from "./PlayerContext";
import { useHistory } from "react-router-dom";

const Search = () => {
  const { setPlatform, setUsername } = useContext(PlayerContext);

  const [platformText, setPlatformText] = useState("Enter Origin Username");

  const originPlatform = () => {
    setPlatformText("Enter Origin Username");
    setPlatform("origin");
  };
  const psPlatform = () => {
    setPlatformText("Enter Playstation Username");
    setPlatform("psn");
  };
  const xboxPlatform = () => {
    setPlatformText("Enter Xbox Username");
    setPlatform("xbox");
  };
  const history = useHistory();

  return (
    <Wrapper>
      <Image src={bg} alt="Kings Cayon" />
      <TrackWrapper>
        <SvgLogo src={apexLogo} />
        <TextWrapper>
          <MainText>APEX LEGEND STATS TRACKER.</MainText>
          <PlayerText>OVER 13 MILLION USER STATS TRACKED.</PlayerText>
        </TextWrapper>
      </TrackWrapper>
      <SearchWrapper>
        <Origin onClick={originPlatform} autoFocus>
          <Logo src={originLogo} />
        </Origin>
        <Playstation onClick={psPlatform}>
          <Logo src={playstationLogo} />
        </Playstation>
        <Xbox onClick={xboxPlatform}>
          <Logo src={xboxLogo} />
        </Xbox>
        <PlayerSearch
          // onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder={platformText}
          onKeyDown={(ev) => {
            if (ev.target.value.length > 0) {
              if (ev.key === "Enter") {
                setUsername(ev.target.value);
                history.push("/playersearch");
              }
            }
          }}
        ></PlayerSearch>
      </SearchWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0;
`;

const TrackWrapper = styled.div`
  position: absolute;
  display: flex;
  top: 23vh;
  left: 9vw;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MainText = styled.p`
  color: white;
  font-size: 60px;
  margin-bottom: 10px;
  margin-left: 30px;
`;

const PlayerText = styled.p`
  margin-left: 30px;
  font-size: 30px;
  color: white;
`;

const SvgLogo = styled.img``;

const SearchWrapper = styled.div`
  position: absolute;
  top: 27vh;
  left: 60vw;
`;

const Logo = styled.img`
  height: 40px;
  width: 50px;
  fill: white:
`;

const Origin = styled.button`
  padding: 15px 16px;
  border: none;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  background-color: rgba(0, 0, 0, 0.4);

  &:focus {
    background-color: rgba(46, 49, 49, 1);
    border: none;
    outline: none;
  }
`;

const Playstation = styled.button`
  padding: 15px 20px;
  border: none;
  background-color: rgba(0, 0, 0, 0.4);
  &:focus {
    background-color: rgba(46, 49, 49, 1);
  }
`;

const Xbox = styled.button`
  padding: 15px 18px;
  border: none;
  background-color: rgba(0, 0, 0, 0.4);
  &:focus {
    background-color: rgba(46, 49, 49, 1);
  }
`;

const PlayerSearch = styled.input`
  position: absolute;
  border: none;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  height: 71px;
  width: 350px;
  font-size: 27px;
  /* padding-bottom: 8px; */

  &:focus {
    outline: none;
    border: none;
  }
`;

const Image = styled.img`
  display: block;
  min-width: 99.99%;
  max-width: 99.99%;
  height: 500px;
  object-fit: cover;
  z-index: 1;
  filter: brightness(0.6);
`;

export default Search;
