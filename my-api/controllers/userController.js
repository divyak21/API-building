const users = require("../data/users");

// GET /users
exports.getUsers = (req, res) => {
  res.json(users);
};

// GET /users/:id
exports.getUserById = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user);
};

// POST /users
exports.createUser = (req, res) => {
  const { name, role } = req.body;

  if (!name || !role) {
    return res.status(400).json({ message: "Name and role are required" });
  }

  const newUser = {
    id: Date.now(),
    name,
    role
  };

  users.push(newUser);
  res.status(201).json(newUser);
};

// PUT /users/:id
exports.updateUser = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.name = req.body.name || user.name;
  user.role = req.body.role || user.role;

  res.json(user);
};

// DELETE /users/:id
exports.deleteUser = (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users.splice(index, 1);
  res.json({ message: "User deleted" });
};
