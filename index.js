const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

const PORT = 8000;

app.use(cors());
app.use(express.json());

const thl_data = async () => {
  return thl_data;
};

app.get("/", async (req, res) => {
  const thl_res = await axios.get(
    "https://sampo.thl.fi/pivot/prod/en/vaccreg/cov19cov/fact_cov19cov.json"
  );
  res.send(thl_res.data);
});

app.listen(8000, () => {
  console.log("Running");
});
