const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/route");
const app = express();
const port = 3000;

app.use(bodyParser.json()); // support json encoded bodies

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
