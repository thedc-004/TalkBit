require("dotenv").config();
require("express-async-errors");

const express = require("express");
const port = process.env.PORT || 3000;
const cors = require("cors");
const app = express();
const postsHandler = require("./routes/post");
const channelHandler = require("./routes/channel");
const userHandler = require("./routes/user");
const commentHandler = require("./routes/comment");
const connectDB = require("./db/connect");
const { mongodb_uri } = require("./consts");

// Middlewares
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

//  Route Handlers
app.use("/api/post", postsHandler);
app.use("/api/channel", channelHandler);
app.use("/api/user", userHandler);
app.use("/api/comment", commentHandler);

// To start server and connect to database
async function main() {
  try {
    await connectDB(mongodb_uri);
    console.log("DB Connected");
    app.listen(port, () => {
      console.log(`Server is listening on port : ${port}`);
    });
  } catch (error) {
    console.log(error);
    throw new Error("Server has crashed");
  }
}

main();
