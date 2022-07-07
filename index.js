import { graphqlHTTP } from "express-graphql";
import { MongoClient, ServerApiVersion } from "mongodb";

import express from "express";
import schema from "./graphql/index.js";
import mongoose from "mongoose";
const port = 3000;

const app = express();

const dbName = "simpleMes";

const uri = `mongodb+srv://hyeon3051:tjqtjq12@cluster0.ozx2q.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose.Promise = global.Promise;

mongoose.connect(uri, { useNewUrlParser: true });

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
