// controllers/authController.js

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");

exports.registerUser = (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      User.createUser({ username, password: hash }, (err, results) => {
        if (err) {
          res.status(500).json({ error: "Failed to register user" });
        } else {
          res.status(201).json({ message: "User registered successfully" });
        }
      });
    }
  });
};

exports.loginUser = (req, res) => {
  const { username, password } = req.body;
  User.getUserByUsername(username, (err, results) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else if (results.length === 0) {
      res.status(401).json({ error: "Invalid username or password" });
    } else {
      const user = results[0];
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          res.status(500).json({ error: "Internal server error" });
        } else if (!result) {
          res.status(401).json({ error: "Invalid username or password" });
        } else {
          const token = jwt.sign({ username: user.username }, "secret_key", {
            expiresIn: "1h",
          });
          res.json({ token });
        }
      });
    }
  });
};
