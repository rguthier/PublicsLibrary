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
app.use(express.json());


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

app.use(express.json()); // Ensure this line is present

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


// app.post("/addbook", (req, res) => {
//   const title = req.body.title;
//   const author = req.body.author;
//   const owner = req.body.author;
//   database.query(
//     "INSERT INTO book (title, author, owner_id) VALUES (" +
//       title +
//       ", " +
//       author +
//       ", " +
//       owner +
//       ")",
//     (err) => {
//       if (err) {
//         res.status(400).send("error");
//         return;
//       }
//       res.json("book added");
//     }
//   );
// });

app.listen(8800);
