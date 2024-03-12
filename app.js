const express = require("express");
const app = express();
let http = require("http").Server(app);

app.get("/", (req, res) => {
  res.send("Test is working");
});

http.listen(1408, () => {
  console.log("Chlra h ");
});
