const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRoutes");

const app = express();
const PORT = process.env.API_PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", userRouter);

app.listen(PORT, () => {
  console.log("API is listenning at my a$$");
});
