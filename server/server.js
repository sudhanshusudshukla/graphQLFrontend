const express = require("express");
const models = require("./models");
const expressGraphQL = require("express-graphql").graphqlHTTP;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const schema = require("./schema/schema");
//const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();

// Replace with your mongoLab URI
//old way of connection
const MONGO_URI =
  "mongodb+srv://sudshukla:sud1234@cluster-graphqlfe.7a4bo5s.mongodb.net/?retryWrites=true&w=majority";
if (!MONGO_URI) {
  throw new Error("You must provide a MongoLab URI");
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection
  .once("openUri", () => console.log("Connected to MongoLab instance."))
  .on("error", (error) => console.log("Error connecting to MongoLab:", error));

//Latest  connection config mongodb
/* const uri =
  "mongodb+srv://sudshukla:sud1234@cluster-graphqlfe.7a4bo5s.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
}); */

app.use(bodyParser.json());
app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true,
  })
);

const webpackMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");
const webpackConfig = require("../webpack.config.js");
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;
