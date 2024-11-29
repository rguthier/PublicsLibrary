const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json()); 

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
    ",
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
  console.log(req.body); // Debug the request body

  const { title, author, owner_id, book_condition } = req.body; // Extract values from the request body

  // Ensure that the required fields are present
  if (!title || !author || !owner_id || !book_condition) {
    return res.status(400).send("Missing required fields");
  }

  // Use parameterized query to prevent SQL injection
  const query = "INSERT INTO book (title, author, owner_id, book_condition) VALUES (?, ?, ?, ?)";
  database.query(query, [title, author, owner_id, book_condition], (err) => {
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
  const query = "DELETE FROM book WHERE book_id = ?";  // Use book_id here

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
  const query = "UPDATE book SET `title` = ?, `author` = ?, `owner_id` = ?, `book_condition` = ? WHERE `book_id` = ?";

  const values = [
    req.body.title,
    req.body.author,
    req.body.owner_id,
    req.body.book_condition
  ];

  database.query(query, [...values, bookId], (err, data) => {
    if (err) {
      console.log(err);
      res.status(400).send("Error updating book");
      return;
    }
    res.json("Book has been updated successfully");
  });
});

app.get("/search", (req, res) => {
  const searchTerm = req.query.q; // Extract query string parameter

  if (!searchTerm) {
    return res.status(400).json({ error: "Search term is required" });
  }

  const query = `
    SELECT * FROM book
     JOIN user ON book.owner_id = user.user_id
    WHERE title LIKE ? OR author LIKE ?
  `;

  const searchValue = `%${searchTerm}%`; // Add wildcard for partial matching

  database.query(query, [searchValue, searchValue], (err, results) => {
    if (err) {
      console.error("Error executing search query:", err);
      return res.status(500).json({ error: "Internal server error" });
    }

    res.json(results); // Return matching books
  });
});



app.get("/books/:id", (req, res) => {
  const bookId = req.params.id;  // Expects book ID from URL
  const query = "SELECT * FROM book WHERE book_id = ?";

  database.query(query, [bookId], (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json(results[0]);  // Return the first (and only) book in the result
  });
});


app.listen(8800);

