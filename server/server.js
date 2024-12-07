const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());

app.use(cors());

const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "publics_library",
  multipleStatements: true,
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
  database.query("SELECT user_id, username FROM user", (err, result) => {
    if (err) {
      console.log("error in query");
      res.status(404).send("error");
      return;
    }
    res.json(result);
  });
});

app.post("/addbook", (req, res) => {
  console.log(req.body); // Debug the request body

  const { title, author, owner_id } = req.body; // Extract values from the request body

  // Ensure that the required fields are present
  if (!title || !author || !owner_id) {
    return res.status(400).send("Missing required fields");
  }

  // Use parameterized query to prevent SQL injection
  const query = "INSERT INTO book (title, author, owner_id) VALUES (?, ?, ?)";
  database.query(query, [title, author, owner_id], (err) => {
    if (err) {
      console.log(err);
      res.status(400).send("Error adding book");
      return;
    }
    res.json("Book added successfully");
  });
});

app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const query = "DELETE FROM book WHERE book_id = ?"; // Use book_id here

  database.query(query, [bookId], (err, data) => {
    if (err) {
      console.log(err);
      res.status(400).send("Error deleting book");
      return;
    }
    res.json("Book deleted successfully");
  });
});

app.put("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const query = "Update book SET `title` = ?, `author` = ?, `owner_id`= ?";

  const values = [req.body.title, req.body.author, req.body.owner_id];

  database.query(query, [...values, bookId], (err, data) => {
    if (err) {
      console.log(err);
      res.status(400).send("Error deleting book");
      return;
    }
    res.json("Book has been updated successfully");
  });
});

app.post("/login", (req, res) => {
  username = req.body.username;
  password = req.body.password;

  database.query(
    "SELECT username, token FROM user WHERE username=?  AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        console.log("error in query");
        res.status(404).send("error");
        return;
      }
      if (result.length == 0) {
        res.send("error");
      }
      res.json(result[0]);
    }
  );
});

app.post("/register", (req, res) => {
  const username = req.body.username;

  database.query(
    "SELECT username FROM user WHERE username = ?",
    [username],
    (err, result) => {
      if (err) {
        console.log("error in query");
        res.json({ error: "query" });
        return;
      } else if (result.length > 0) {
        res.json({ error: "username" });
      } else {
        database.query(
          "INSERT INTO user (username, password, zip_code, favorite_genres) VALUES (?, ?, ?, ?); SELECT token FROM user WHERE username = ?",
          [
            username,
            req.body.password,
            req.body.zip_code,
            req.body.favorite_genres,
            username,
          ],
          (err, result) => {
            if (err) {
              console.log("error in query");
              res.json({ error: "query" });
              return;
            }
            res.json(result[1][0]);
          }
        );
      }
    }
  );
});

app.post("/userdata", (req, res) => {
  const finalResult = {};
  database.query(
    "SELECT user_id, username, zip_code, favorite_genres FROM user WHERE username = ? AND token = ?",
    [req.body.username, req.body.token],
    (err, result) => {
      if (err) {
        console.log("error in query");
        res.json({ error: "query" });
        return;
      }
      finalResult.userData = result[0];
      database.query(
        "SELECT * FROM book WHERE owner_id = ?",
        [finalResult.userData.user_id],
        (err, result) => {
          if (err) {
            console.log("error in query");
            res.json({ error: "query" });
            return;
          }
          finalResult.books = result;
          res.json(finalResult);
        }
      );
    }
  );
});

app.listen(8800);
