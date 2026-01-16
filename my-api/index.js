const express = require("express");
const app = express();

// Allows API to read JSON
app.use(express.json());

// Test API
app.get("/", (req, res) => {
  res.send("API is working 🚀");
});

// GET users
app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Divyak" }
  ]);
});

// POST user
app.post("/users", (req, res) => {
  const user = req.body;
  res.status(201).json({
    message: "User created",
    user
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
