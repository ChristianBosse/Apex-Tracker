const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

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
module.exports = { getUsers, AddConfig, AddUsername };
