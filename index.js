const express = require("express");
require("dotenv").config();
const app = express();
const indexRouter = require("./routes");
const PORT = Number(process.env.PORT) || 8000;
app.use(express.json());
app.use("/", indexRouter);

app.use((err, req, res, next) => {
  const errMSg = err.toString() || "Something went wrong";
  res.status(500).json({ msg: errMSg });
});
app.listen(PORT, () => {
  console.log(`app is running ${PORT}`);
});
