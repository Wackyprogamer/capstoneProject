const express = require('express')
const port = process.env.PORT || 5550;
const cors = require("cors");
const app = express();

const client = require('./config/database.js')

require("dotenv").config();
app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
  const { email, password } = req.body
  const text =
    "SELECT email, password FROM students WHERE email = $1 AND password = $2;";
  const values = [email, password];
  client.query(text, values, (err, res) => {
    if (err) {
      console.log(err.stack);
    } else if (res.rows[0]) {
      console.log("email and password correct:)");
    } else {
      console.log("email or password incorrect:(");
    }
  });
  res.json({ message: "login request", loggedIn: true });
});


app.listen(port, () => {
  console.log(`Server is running on port 5550.`);
});