//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");
const connectDB = require('./db');

const app = express();
connectDB();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
// w9r9GZzbhCD2mpRI
// mrajneesh723


const bookSchema = {
  name: {
    type: String,
    required: true,
  },
  author:{
    type:String,
    required:true,
  }
};

const Books = mongoose.model("Books", bookSchema);


app.get("/", (req, res) => {
  res.redirect("/api/books");
});

app.get("/api/books", function (req, res) {
  Books.find({})
    .exec()
    .then((books) => {
      res.render("list", { newListItems: books });
    })
    .catch((err) => {
      res.render("error", { error: err });
    });
});

app.post("/api/books", function (req, res) {
  console.log(req.body)
  const book = new Books({
    name: req.body.name,
    author: req.body.author,
  });
  book
    .save()
    .then((result) => {
      res.redirect("/api/books");
    })
    .catch((err) => {
      res.render("error", { error: err });
    });
});

app.post("/api/books/:id", function (req, res) { //this works as put

  const bookId = req.params.id;
  const book = req.body.updatedBook;
  Books.updateMany({ _id: bookId }, { book: book })
    .then((result) => {
      res.redirect("/api/books");
    })
    .catch((err) => {
      res.render("error", { error: err });
    });
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server started on port 3000");
});
