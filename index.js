const express = require("express");
const app = express();
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.resolve("./Views"));
const StaticRouter = require("./Routes/StaticRouter");
const apiRouter = require("./Routes/Router");
const { connectMongoDB } = require("./connection");
connectMongoDB("mongodb://localhost:27017/assessment1");
app.use(express.urlencoded({ extended: false }));
app.use("/", StaticRouter);
app.use("/api", apiRouter);
const port = 8000;
app.listen(port, () => {
  console.log(`server stated on the ${port} port`);
});
