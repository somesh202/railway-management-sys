const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "Acer_somesh", // Your MySQL server host
  user: "somesh", // Your MySQL username
  password: 'somesh@1569', // Your MySQL password
  database: "railway_management", // Your MySQL database name
});

module.exports = connection;
