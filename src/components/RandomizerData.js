import React, { useEffect, useState } from "react";
import styled from "styled-components";
import bangalore from "../Media/bangalore.png";
import bloodhound from "../Media/bloodhound.png";
import caustic from "../Media/caustic.png";
import crypto from "../Media/crypto.png";
import fuse from "../Media/fuse.png";
import gibraltar from "../Media/gibraltar.png";
import horizon from "../Media/horizon.png";
import lifeline from "../Media/lifeline.png";
import loba from "../Media/loba.png";
import mirage from "../Media/mirage.png";
import octane from "../Media/octane.png";
import pathfinder from "../Media/pathfinder.png";
import rampart from "../Media/rampart.png";
import revenant from "../Media/revenant.png";
import valkyrie from "../Media/valkyrie.png";
import wattson from "../Media/wattson.png";
import wraith from "../Media/wraith.png";
import R99 from "../WeaponImage/R-99.png";
import alternator from "../WeaponImage/Alternator.png";
import charge from "../WeaponImage/ChargeRifle.png";
import devotion from "../WeaponImage/Devotion.png";
import eva8 from "../WeaponImage/EVA8.png";
import flatline from "../WeaponImage/Flatline.png";
import g7 from "../WeaponImage/G7.png";
import havoc from "../WeaponImage/Havoc.png";
import hemlok from "../WeaponImage/Hemlok.png";
import kraber from "../WeaponImage/Kraber.png";
import lstar from "../WeaponImage/L-Star.png";
import longbow from "../WeaponImage/Longbow.png";
import mastiff from "../WeaponImage/Mastiff.png";
import mozambique from "../WeaponImage/Mozambique.png";
import p2020 from "../WeaponImage/P2020.png";
import peacekeeper from "../WeaponImage/PeaceKeeper.png";
import prowler from "../WeaponImage/Prowler.png";
import r301 from "../WeaponImage/R-301.png";
import re45 from "../WeaponImage/RE-45.png";
import repeater from "../WeaponImage/Repeater.png";
import sentinel from "../WeaponImage/Sentinel.png";
import spitfire from "../WeaponImage/Spitfire.png";
import tripple from "../WeaponImage/Tripple.png";
import volt from "../WeaponImage/Volt.png";
import wingman from "../WeaponImage/Wingman.png";
import bocek from "../WeaponImage/Bocek.png";
import SaveLegend from "./SaveLegend";
import { useAuth0 } from "@auth0/auth0-react";

const RandomizerData = () => {
  const [legend, setLegend] = useState("");
  const [firstFirearm, setFirstFirearm] = useState("");
  const [secondFirearm, setSecondFirearm] = useState("");
  const [legendPic, setLegendPic] = useState();
  const [randomize, setRandomize] = useState(false);
  const [primaryPic, setPrimaryPic] = useState();
  const [secondaryPic, setSecondaryPic] = useState();
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    fetch("/random/legend")
      .then((res) => res.json())
      .then((data) => setLegend(data.data));
  }, [randomize]);

  useEffect(() => {
    fetch("/random/firearmone")
      .then((res) => res.json())
      .then((data) => setFirstFirearm(data));
  }, [legend]);

  useEffect(() => {
    fetch("/random/firearmtwo")
      .then((res) => res.json())
      .then((data) => setSecondFirearm(data));

    switch (legend) {
      case "Wraith":
        setLegendPic(wraith);
        break;
      case "Bangalore":
        setLegendPic(bangalore);
        break;
      case "Bloodhound":
        setLegendPic(bloodhound);
        break;
      case "Caustic":
        setLegendPic(caustic);
        break;
      case "Crypto":
        setLegendPic(crypto);
        break;
      case "Fuse":
        setLegendPic(fuse);
        break;
      case "Gibraltar":
        setLegendPic(gibraltar);
        break;
      case "Horizon":
        setLegendPic(horizon);
        break;
      case "Lifeline":
        setLegendPic(lifeline);
        break;
      case "Loba":
        setLegendPic(loba);
        break;
      case "Mirage":
        setLegendPic(mirage);
        break;
      case "Octane":
        setLegendPic(octane);
        break;
      case "Pathfinder":
        setLegendPic(pathfinder);
        break;
      case "Rampart":
        setLegendPic(rampart);
        break;
      case "Revenant":
        setLegendPic(revenant);
        break;
      case "Valkyrie":
        setLegendPic(valkyrie);
        break;
      case "Wattson":
        setLegendPic(wattson);
        break;
    }
  }, [legend]);

  useEffect(() => {
    switch (firstFirearm.Firearm) {
      case "Havoc":
        setPrimaryPic(havoc);
        break;
      case "Flatline":
        setPrimaryPic(flatline);
        break;
      case "Hemlok":
        setPrimaryPic(hemlok);
        break;
      case "R301":
        setPrimaryPic(r301);
        break;
      case "Alternator":
        setPrimaryPic(alternator);
        break;
      case "Prowler":
        setPrimaryPic(prowler);
        break;
      case "R99":
        setPrimaryPic(R99);
        break;
      case "Volt":
        setPrimaryPic(volt);
        break;
      case "Devotion":
        setPrimaryPic(devotion);
        break;
      case "L-Star":
        setPrimaryPic(lstar);
        break;
      case "Spitfire":
        setPrimaryPic(spitfire);
        break;
      case "G7 Scout":
        setPrimaryPic(g7);
        break;
      case "Triple Take":
        setPrimaryPic(tripple);
        break;
      case "Repeater":
        setPrimaryPic(repeater);
        break;
      case "Bocek Bow":
        setPrimaryPic(bocek);
        break;
      case "Charge Rifle":
        setPrimaryPic(charge);
        break;
      case "Longbow":
        setPrimaryPic(longbow);
        break;
      case "Kraber":
        setPrimaryPic(kraber);
        break;
      case "Sentinel":
        setPrimaryPic(sentinel);
        break;
      case "EVA8":
        setPrimaryPic(eva8);
        break;
      case "Mastiff":
        setPrimaryPic(mastiff);
        break;
      case "Mozambique":
        setPrimaryPic(mozambique);
        break;
      case "PeaceKeeper":
        setPrimaryPic(peacekeeper);
        break;
      case "RE-45":
        setPrimaryPic(re45);
        break;
      case "P2020":
        setPrimaryPic(p2020);
        break;
      case "Wingman":
        setPrimaryPic(wingman);
        break;
    }
    switch (secondFirearm.Firearm) {
      case "Havoc":
        setSecondaryPic(havoc);
        break;
      case "Flatline":
        setSecondaryPic(flatline);
        break;
      case "Hemlok":
        setSecondaryPic(hemlok);
        break;
      case "R301":
        setSecondaryPic(r301);
        break;
      case "Alternator":
        setSecondaryPic(alternator);
        break;
      case "Prowler":
        setSecondaryPic(prowler);
        break;
      case "R99":
        setSecondaryPic(R99);
        break;
      case "Volt":
        setSecondaryPic(volt);
        break;
      case "Devotion":
        setSecondaryPic(devotion);
        break;
      case "L-Star":
        setSecondaryPic(lstar);
        break;
      case "Spitfire":
        setSecondaryPic(spitfire);
        break;
      case "G7 Scout":
        setSecondaryPic(g7);
        break;
      case "Triple Take":
        setSecondaryPic(tripple);
        break;
      case "Repeater":
        setSecondaryPic(repeater);
        break;
      case "Bocek Bow":
        setSecondaryPic(bocek);
        break;
      case "Charge Rifle":
        setSecondaryPic(charge);
        break;
      case "Longbow":
        setSecondaryPic(longbow);
        break;
      case "Kraber":
        setSecondaryPic(kraber);
        break;
      case "Sentinel":
        setSecondaryPic(sentinel);
        break;
      case "EVA8":
        setSecondaryPic(eva8);
        break;
      case "Mastiff":
        setSecondaryPic(mastiff);
        break;
      case "Mozambique":
        setSecondaryPic(mozambique);
        break;
      case "PeaceKeeper":
        setSecondaryPic(peacekeeper);
        break;
      case "RE-45":
        setSecondaryPic(re45);
        break;
      case "P2020":
        setSecondaryPic(p2020);
        break;
      case "Wingman":
        setSecondaryPic(wingman);
        break;
    }
  }, [firstFirearm, secondFirearm]);

  console.log(legendPic);

  return (
    <Wrapper>
      <RandomizerHeader>
        <LegendText>APEX LEGEND RANDOMIZER</LegendText>
      </RandomizerHeader>
      <LegendRandomizer>
        <RandomizeBtn onClick={() => setRandomize((prev) => !prev)}>
          Randomize
        </RandomizeBtn>
        <LegendNameWrapper>
          <Name>Your Legend</Name>
          <LegendName>{legend}</LegendName>
        </LegendNameWrapper>
        <LegendImg src={legendPic} />
        <FirearmWrapper>
          <LegendPrimary>Your Primary: {firstFirearm.Firearm}</LegendPrimary>
          <PrimaryPic src={primaryPic} />
          <LegendSecondary>
            Your Secondary: {secondFirearm.Firearm}
          </LegendSecondary>
          <SecondaryPic src={secondaryPic} />
        </FirearmWrapper>
      </LegendRandomizer>
      {isAuthenticated && (
        <SaveLegend
          legend={legend}
          firstFirearm={firstFirearm}
          secondFirearm={secondFirearm}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const LegendRandomizer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #343434;
`;

const RandomizerHeader = styled.div`
  height: 80px;
  max-width: 100vw;
  background-color: #202020;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LegendText = styled.p`
  color: white;
  font-size: 40px;
`;

const RandomizeBtn = styled.button`
  position: absolute;
  top: 700px;
  color: white;
  background-color: #202020;
  border: none;
  padding: 10px 30px;
  font-family: "roboto";
  font-size: 23px;

  &:focus {
    border: none;
  }
`;

const LegendName = styled.p`
  color: white;
  font-family: "roboto";
  font-size: 30px;
`;

const LegendNameWrapper = styled.div`
  position: relative;
  bottom: 166px;
  left: 326px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.p`
  color: white;
  font-family: "roboto";
  font-size: 40px;
`;

const LegendImg = styled.img`
  position: relative;
  right: 700px;
  margin-bottom: 50px;
`;

const LegendPrimary = styled.p`
  color: white;
  font-family: "roboto";
  font-size: 25px;
  margin-bottom: 15px;
`;

const FirearmWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 860px;
  left: 1350px;
`;

const PrimaryPic = styled.img`
  max-height: 100px;
  margin-bottom: 150px;
`;

const LegendSecondary = styled.p`
  color: white;
  font-family: "roboto";
  font-size: 25px;
  margin-bottom: 15px;
`;

const SecondaryPic = styled.img`
  max-height: 100px;
`;

export default RandomizerData;
