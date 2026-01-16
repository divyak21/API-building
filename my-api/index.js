const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("User Management API running 🚀");
});

app.use("/users", require("./routes/userRoutes"));

// ⚠️ THIS MUST BE LAST
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
