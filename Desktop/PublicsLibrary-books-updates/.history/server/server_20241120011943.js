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

// Start a trade (POST request)
app.post('/trade', (req, res) => {
  const { book_id, giver_id, receiver_id, trade_status } = req.body;

  // SQL query to insert a new trade
  const query = "INSERT INTO trade (book_id, giver_id, receiver_id, trade_status) VALUES (?, ?, ?, ?)";
  const values = [book_id, giver_id, receiver_id, trade_status];

  database.query(query, values, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(400).send("Error starting trade");
    }
    res.json({ message: "Trade initiated successfully", tradeId: data.insertId });
  });
});

// Get all trades for a user (GET request)
app.get('/trades/:userId', (req, res) => {
  const userId = req.params.userId;

  // SQL query to get all trades for a specific user
  const query = "
    SELECT t.trade_id, b.title AS book_title, u1.username AS giver, u2.username AS receiver, t.trade_status
    FROM trade t
    JOIN book b ON t.book_id = b.book_id
    JOIN user u1 ON t.giver_id = u1.user_id
    JOIN user u2 ON t.receiver_id = u2.user_id
    WHERE t.giver_id = ? OR t.receiver_id = ?
  ";

  database.query(query, [userId, userId], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(400).send("Error retrieving trades");
    }
    res.json(data);
  });
});

// Update trade status (PUT request)
app.put('/trade/:tradeId', (req, res) => {
  const tradeId = req.params.tradeId;
  const { trade_status } = req.body;

  // SQL query to update the trade status
  const query = "UPDATE trade SET trade_status = ? WHERE trade_id = ?";
  const values = [trade_status, tradeId];

  database.query(query, values, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(400).send("Error updating trade status");
    }
    res.json({ message: "Trade status updated successfully" });
  });
});

app.listen(8800);
