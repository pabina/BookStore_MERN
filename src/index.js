import express from "express";
import connection from "./models/index.js";
import bookRoute from "./route/bookRoute.js";
import mymodel from "./models/bookModel.js";
import "dotenv/config";
const myserver = express();
myserver.use(express.json());

//for home
myserver.get("/", (req, res) => {
  res.send("you are in bookstore");
});
myserver.use("/book", bookRoute);
//for server listening
myserver.listen(process.env.PORT || 8000, async () => {
  console.log("server is working");
  try {
    await connection.authenticate();
    console.log("successfully connected to database");
  } catch (err) {
    console.log("error during connection to database");
  }
  connection.sync();
});
