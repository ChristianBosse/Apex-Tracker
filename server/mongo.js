const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//gets user from your mongo database
const getUsers = async (req, res) => {
  const { userEmail } = req.params;

  const client = await MongoClient(MONGO_URI, options);

  await client.connect();

  const db = client.db("db-name");

  console.log("connected");

  const users = await db
    .collection("users")
    .find({ email: userEmail })
    .toArray();
  res.json({ status: 200, data: users });
  console.log(users);

  client.close();
  console.log("disconnected");
};

//add saved configuration on Apex Randomizer when user is logged In
const AddConfig = async (req, res) => {
  const { userEmail, SelectedLegend, SelectedPrimary, SelectedSecondary } =
    req.params;

  const client = await MongoClient(MONGO_URI, options);

  await client.connect();

  const db = client.db("db-name");

  console.log("connected");

  const users = await db.collection("users").insert({
    email: userEmail,
    Legend: SelectedLegend,
    Primary: SelectedPrimary,
    Secondary: SelectedSecondary,
  });
  res.json({ status: 200, data: users });
  console.log(users);

  client.close();
  console.log("disconnected");
};

//Add/Update username for the person profile
const AddUsername = async (req, res) => {
  const { userEmail, username } = req.params;

  const client = await MongoClient(MONGO_URI, options);

  await client.connect();

  const db = client.db("db-name");

  console.log("connected");

  const users = await db
    .collection("users")
    .updateOne({ email: userEmail }, { $set: { Username: username } });
  res.json({ status: 200, data: users });
  console.log(users);

  client.close();
  console.log("disconnected");
};

//used to delete saved config on your profile.
const DeleteConfig = async (req, res) => {
  const { id } = req.params;

  const client = await MongoClient(MONGO_URI, options);

  await client.connect();

  const db = client.db("db-name");

  console.log("connected");

  const users = await db.collection("users").deleteOne({ _id: id });

  res.json({ status: 200, data: users });
  console.log(users);

  client.close();
  console.log("disconnected");
};

module.exports = { getUsers, AddConfig, AddUsername, DeleteConfig };
