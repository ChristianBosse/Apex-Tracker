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

module.exports = { getPlayerProfile };
