# The Public's Library

This project aims to build a web application that people can use to trade books. Sometimes people want to keep a book for longer than the library allows, or they want a book that the library doesn't have available. This app allows them to find books that others are willing to trade for, in exchange for other books.

## Getting Started

Run the development server:

npm run dev

Go to http://localhost:5173 to view the app

## React + TypeScript + Vite

This is a React app in Typescript that was set up with Vite

## Database

To set up the database on your local machine, run the following SQL script:

```
CREATE SCHEMA publics_library;
USE publics_library;

CREATE TABLE user (
	user_id int PRIMARY KEY AUTO_INCREMENT,
    token CHAR(36) DEFAULT(UUID()),
    username varchar(45) NOT NULL UNIQUE,
    password varchar(45) NOT NULL,
    zip_code int,
    favorite_genres varchar(1000)
);

CREATE TABLE book (
	book_id int PRIMARY KEY AUTO_INCREMENT,
    title varchar(255) NOT NULL,
    author varchar(45) NOT NULL,
    book_condition ENUM('as new', 'good', 'fair', 'poor'),
    genre varchar(45),
    owner_id int,
    FOREIGN KEY (owner_id) REFERENCES user(user_id)
);

CREATE TABLE trade (
	trade_id int PRIMARY KEY AUTO_INCREMENT,
    book_id int,
    giver_id int,
    receiver_id int,
    FOREIGN KEY (book_id) REFERENCES book(book_id),
    FOREIGN KEY (giver_id) REFERENCES user(user_id),
    FOREIGN KEY (receiver_id) REFERENCES user(user_id),
    trade_status ENUM('complete', 'in progress', 'cancelled')
);

CREATE TABLE review (
	review_id int PRIMARY KEY AUTO_INCREMENT,
    trade_id int,
    reviewer_id int,
    reviewee_id int,
    FOREIGN KEY (trade_id) REFERENCES trade(trade_id),
    FOREIGN KEY (reviewer_id) REFERENCES user(user_id),
    FOREIGN KEY (reviewee_id) REFERENCES user(user_id),
    score int,
    CHECK(score <= 10 AND score >= 1),
    comments varchar(255)
);
```
