const express = require("express");
const app = express();

app.use(express.json());

let users = []; // in-memory storage

app.get("/", (req, res) => {
  res.send("API is working 🚀");
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    role: req.body.role
  };

  users.push(newUser);

  res.status(201).json(newUser);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
