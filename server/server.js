//imported modules
const express = require('express')
const cors = require("cors");
const app = express();


app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
  console.log(req.body)
  const { username, password } = req.body
   
  res.json({ message: "login request", loggedIn: true });
});


app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});