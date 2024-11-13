const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mochareli24:)",
  database: "publics_library",
});
database.connect((err) => {
  if (err) throw err;
  console.log("Database connected");
});

//endpoints
app.get("/", (req, res) => {
  res.send("Working");
});

app.get("/books", (req, res) => {
  database.query(
    "SELECT * FROM book JOIN user ON book.owner_id=user.user_id",
    (err, result) => {
      if (err) {
        console.log("error in query");
        res.send("error");
        return;
      }
      res.json(result);
    }
  );
});

app.get("/users", (req, res) => {
  database.query("SELECT user_id, username, email FROM user", (err, result) => {
    if (err) {
      console.log("error in query");
      res.status(404).send("error");
      return;
    }
    res.json(result);
  });
});

app.post("/addbook", (req, res) => {
  const title = req.params.title;
  const author = req.params.author;
  const owner = req.params.author;
  database.query(
    "INSERT INTO book (title, author, owner_id) VALUES (" +
      title +
      ", " +
      author +
      ", " +
      owner +
      ")",
    (err) => {
      if (err) {
        res.status(400).send("error");
        return;
      }
      res.json("book added");
    }
  );
});

app.listen(000);
