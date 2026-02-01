const express = require("express");
const connection = require("./config/db");

const userRoute  = require("./router/userRouter");
const app = express();
const PORT =  4000;
connection();
// app.use(JSON())

app.use("/api", userRoute);

app.listen(PORT, () => {
  console.log("Server listening on port :", PORT);
});
