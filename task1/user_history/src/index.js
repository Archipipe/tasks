const express = require("express");
const bodyParser = require("body-parser");
const historyRouter = require("./routes/historyRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.API_PORT || 3003;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", historyRouter);

app.listen(PORT, () => {
  console.log("API is listenning at my a$$");
});
