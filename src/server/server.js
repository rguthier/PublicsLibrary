const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "publics-library",
});
database.connect((err) => {
  if (err) throw err;
  console.log("Database connected");
});


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


app.get("/search", (req, res) => {
  const zipcode = req.query.zipcode;

  if (!zipcode) {
    return res.status(400).json({ error: "Please provide a zipcode." });
  }

  
  const query = `
    SELECT * FROM book 
    JOIN user ON book.owner_id = user.user_id
    WHERE user.zipcode = ?`;

  database.query(query, [zipcode], (err, results) => {
    if (err) {
      console.error("Error executing query:", err.message);
      return res.status(500).json({ error: "Database error." });
    }

    if (results.length > 0) {
      res.json(results); 
    } else {
      res.status(404).json({ message: "No books found for this zipcode." });
    }
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
