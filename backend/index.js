const express = require("express");
const app = express();
const cors = require("cors");
const { Mongoose } = require("mongoose");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "working" });
});

app.post("/admin", async (req, res) => {
  const { name, password } = await req.body;

  Admin.create({
    name: name,
    password: password,
  });

  if (Admin.create) {
    res.status(200).json({ message: "Successfully added admin" });
  }

  res.send(404).json({ message: "Any field is missing" });
});


app.listen(3000, () => {
  console.log(`Live on 3000`);
});
