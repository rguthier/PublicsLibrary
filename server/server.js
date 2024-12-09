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
  console.log(req.body);
  const { title, author, username } = req.body; // Extract values from the request body

  // Ensure that the required fields are present
  if (!title || !author || !username) {
    return res.status(400).send("Missing required fields");
  }

  database.query(
    "SELECT user_id FROM user WHERE username = ?",
    [req.body.username],
    (err, result) => {
      if (err) {
        console.log("error in query");
        res.send("error");
        return;
      }
      console.log(result[0]);
      const query =
        "INSERT INTO book (title, author, owner_id) VALUES (?, ?, ?)";
      database.query(query, [title, author, result[0].user_id], (err) => {
        if (err) {
          console.log(err);
          res.status(400).send("Error adding book");
          return;
        }
        res.json("Book added successfully");
      });
    }
  );
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

app.post("/yourequested", (req, res) => {
  user_id = null;
  database.query(
    "SELECT user_id FROM user WHERE username = ?",
    [req.body.username],
    (err, result) => {
      if (err) {
        console.log("error in query");
        return;
      }
      user_id = result[0].user_id;
      database.query(
        "SELECT * FROM trade, book, user WHERE receiver_id = ? AND trade.book_id = book.book_id  AND trade.giver_id = user.user_id AND trade_status = 'requested'",
        [user_id],
        (err, result) => {
          if (err) {
            console.log("error in query");
            return;
          }
          res.json(result);
        }
      );
    }
  );
});

app.post("/youreceived", (req, res) => {
  user_id = null;
  database.query(
    "SELECT user_id FROM user WHERE username = ?",
    [req.body.username],
    (err, result) => {
      if (err) {
        console.log("error in query");
        return;
      }
      user_id = result[0].user_id;
      database.query(
        "SELECT * FROM trade, book, user WHERE giver_id = ? AND trade.book_id = book.book_id AND trade.giver_id = user.user_id  AND trade_status = 'requested'",
        [user_id],
        (err, result) => {
          if (err) {
            console.log("error in query");
            return;
          }
          res.json(result);
        }
      );
    }
  );
});

app.post("/inprogresstrades", (req, res) => {
  user_id = null;
  database.query(
    "SELECT user_id FROM user WHERE username = ?",
    [req.body.username],
    (err, result) => {
      if (err) {
        console.log("error in query");
        return;
      }
      user_id = result[0].user_id;
      database.query(
        "SELECT * FROM trade, book, user WHERE (giver_id = ? OR receiver_id = ?) AND trade.book_id = book.book_id AND trade.giver_id = user.user_id AND trade_status = 'in progress'",
        [user_id, user_id],
        (err, result) => {
          if (err) {
            console.log("error in query");
            return;
          }
          res.json(result);
        }
      );
    }
  );
});

app.post("/completedtrades", (req, res) => {
  user_id = null;
  database.query(
    "SELECT user_id FROM user WHERE username = ?",
    [req.body.username],
    (err, result) => {
      if (err) {
        console.log("error in query");
        return;
      }
      user_id = result[0].user_id;
      database.query(
        "SELECT * FROM trade, book, user WHERE (giver_id = ? OR receiver_id = ?) AND trade.book_id = book.book_id AND trade.giver_id = user.user_id AND trade_status = 'complete'",
        [user_id, user_id],
        (err, result) => {
          if (err) {
            console.log("error in query");
            return;
          }
          res.json(result);
        }
      );
    }
  );
});

app.post("/traderequest", (req, res) => {
  let giver = null;
  let receiver = null;
  console.log(req.body.book_id);
  database.query(
    "SELECT owner_id FROM book WHERE book_id = ?",
    [req.body.book_id],
    (err, result) => {
      if (err) {
        console.log("error in query: " + err);
        return;
      }
      giver = result[0].owner_id;
      database.query(
        "SELECT user_id FROM user WHERE username = ?",
        [req.body.username],
        (err, result) => {
          if (err) {
            console.log("error in query: " + err);
            return;
          }
          receiver = result[0].user_id;
          database.query(
            "INSERT INTO trade (trade_status, book_id, giver_id, receiver_id) VALUES (?, ?, ?, ?)",
            ["requested", req.body.book_id, giver, receiver],
            (err, result) => {
              if (err) {
                console.log("error in query: " + err);
                return;
              }
              res.json("success");
            }
          );
        }
      );
    }
  );
});

app.post("/accepttrade", (req, res) => {
  database.query(
    "UPDATE trade SET trade_status = 'in progress' WHERE trade_id = ?",
    req.body.trade_id,
    (err, result) => {
      if (err) {
        console.log("error in query: " + err);
        return;
      }
      res.json("success");
    }
  );
});

app.post("/completetrade", (req, res) => {
  let book_id = null;
  let new_owner_id = null;
  console.log(req.body.trade_id);
  database.query(
    "SELECT book_id, receiver_id FROM trade WHERE trade_id = ?",
    [req.body.trade_id],
    (err, result) => {
      if (err) {
        console.log("error in query");
        return;
      }
      book_id = result[0].book_id;
      new_owner_id = result[0].receiver_id;
      database.query(
        "UPDATE trade SET trade_status = 'complete' WHERE trade_id = ?",
        req.body.trade_id,
        (err, result) => {
          if (err) {
            console.log("error in query");
            return;
          }
          database.query(
            "UPDATE book SET owner_id = ? WHERE book_id = ?",
            [new_owner_id, book_id],
            (err, result) => {
              if (err) {
                console.log("error in query");
                return;
              }
              res.json("success");
            }
          );
        }
      );
    }
  );
});

app.listen(8800);
