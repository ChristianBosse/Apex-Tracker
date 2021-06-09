"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

//port on which the server will listen to.
const PORT = 4000;

//declare express to use.
express()
  //chain these after express for ease of mind.
  .use(morgan("tiny"))
  .use(bodyParser.json())
  .use(express.static("public"))

  //Endpoint down below.

  .get()

  // this is to catch all endpoint if their is any error.
  .get("*", (req, res) => {
    res.status(404).json({ status: 404, message: "This doesn't exist." });
  });
// Node start our server with yarn start:server and listen on port 4000.
  .listen(`${PORT}`, () => console.log("Listening on port 4000"))