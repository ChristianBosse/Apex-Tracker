"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const {
  getPlayerProfile,
  RandomLegend,
  RandomGunOne,
  RandomGunTwo,
} = require("./handler");
const { getUsers, AddConfig, AddUsername } = require("./mongo");

//Load the config.env file to use API and URL
dotenv.config({ path: "./config.env" });

//declare express to use.
const app = express();
//chain these after express for ease of mind.
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(express.static("public"));

//port on which the server will listen to. Change the number to use another port.
const PORT = 4000;

//Endpoint down below which are located into the handler.js file.

app.get("/api/v2/profile/:platform/:gamertag", getPlayerProfile);

app.get("/random/legend", RandomLegend);

app.get("/random/firearmone", RandomGunOne);

app.get("/random/firearmtwo", RandomGunTwo);

app.get("/mongo/:userEmail", getUsers);

app.post(
  "/mongo/add/:userEmail/:SelectedLegend/:SelectedPrimary/:SelectedSecondary",
  AddConfig
);

app.patch("/mongo/username/:userEmail/:username", AddUsername);

// this is to catch all endpoint if their is any error.
app.get("*", (req, res) => {
  res.status(404).json({ status: 404, message: "This doesn't exist." });
});
// Node start our server with yarn start:server and listen on port 4000.
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
