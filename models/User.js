// models/User.js

const connection = require("../config/dbConfig");

const User = {
  createUser: function (userData, callback) {
    const { username, password } = userData;
    connection.query(
      "INSERT INTO users (username) VALUES (?, ?)",
      [username, password],
      callback
    );
  },

  getUserByUsername: function (username, callback) {
    connection.query(
      "SELECT * FROM users WHERE username = ?",
      [username],
      callback
    );
  },
};

module.exports = User;
