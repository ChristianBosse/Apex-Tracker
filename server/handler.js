"use strict";
const dotenv = require("dotenv");
const fetch = require("node-fetch");

//Load the config.env file to use API and URL
dotenv.config({ path: "./config.env" });

//get player profile with your API Key.
const getPlayerProfile = async (req, res) => {
  try {
    //Header for the API and location of your API
    const headers = {
      "TRN-Api-Key": process.env.TRACKER_API_KEY,
    };

    //Platform selection and user gamertag.
    const { platform, gamertag } = req.params;

    //response from the API with user data.
    const response = await fetch(
      `${process.env.TRACKER_API_URL}/profile/${platform}/${gamertag}`,
      {
        headers,
      }
    );

    //Server is awaiting the response of the data.
    const data = await response.json();

    //If profile is not found this will be the default error.
    if (data.errors && data.errors.length > 0) {
      return res.status(404).json({ message: "Profile Not Found" });
    }

    //show the data after it has been received.
    res.json(data);
  } catch (error) {
    //Catch any error if their is something wrong.
    console.log("Error", error);
    res.status(500).json({ Status: 500, message: "Server Error" });
  }
};

const RandomLegend = (req, res) => {
  //Array of all Legend in Season 9 used for randomizer
  let allLegend = [
    "Bloodhound",
    "Gibraltar",
    "Lifeline",
    "Pathfinder",
    "Wraith",
    "Bangalore",
    "Caustic",
    "Mirage",
    "Octane",
    "Wattson",
    "Crypto",
    "Revenant",
    "Loba",
    "Rampart",
    "Horizon",
    "Fuse",
    "Valkyrie",
  ];
  //randomize the legend
  const random = allLegend[Math.floor(Math.random() * allLegend.length)];
  //returning randomized legend
  res.status(200).json({ Status: 200, data: random });
};

const RandomGunOne = (req, res) => {
  //Array of all Firearm in season 9 for the randomizer
  let allFirearms = [
    "Havoc",
    "Flatline",
    "Hemlok",
    "R301",
    "Alternator",
    "Prowler",
    "R99",
    "Volt",
    "Devotion",
    "L-Star",
    "Spitfire",
    "G7 Scout",
    "Triple Take",
    "Repeater",
    "Bocek Bow",
    "Charge Rifle",
    "Longbow",
    "Kraber",
    "Sentinel",
    "EVA8",
    "Mastiff",
    "Mozambique",
    "PeaceKeeper",
    "RE-45",
    "P2020",
    "Wingman",
  ];
  //Randomize all firearm
  const Firearms = allFirearms[Math.floor(Math.random() * allFirearms.length)];
  //send randomized firearm
  res.status(200).json({ Status: 200, Firearm: Firearms });
};
const RandomGunTwo = (req, res) => {
  //Array of all Firearm in season 9 for the randomizer
  let allFirearms = [
    "Havoc",
    "Flatline",
    "Hemlok",
    "R301",
    "Alternator",
    "Prowler",
    "R99",
    "Volt",
    "Devotion",
    "L-Star",
    "Spitfire",
    "G7 Scout",
    "Triple Take",
    "Repeater",
    "Bocek Bow",
    "Charge Rifle",
    "Longbow",
    "Kraber",
    "Sentinel",
    "EVA8",
    "Mastiff",
    "Mozambique",
    "PeaceKeeper",
    "RE-45",
    "P2020",
    "Wingman",
  ];
  //randomize firearm
  const Firearms = allFirearms[Math.floor(Math.random() * allFirearms.length)];
  //send randomized firearm
  res.status(200).json({ Status: 200, Firearm: Firearms });
};

module.exports = { getPlayerProfile, RandomLegend, RandomGunOne, RandomGunTwo };
