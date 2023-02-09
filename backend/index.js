const express = require("express");
const app = express();
app.use(express.json());
var cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.post("/v1/update", (req, res) => {
  try {
    setTimeout(() => {
      return res.status(200).json(req.body);
    }, [2000]);
  } catch (err) {
    console.log(err);
  }
});

app.listen(8000, () => {
  console.log("running");
});
