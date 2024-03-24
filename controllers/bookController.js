const Book = require("../models/book");
const asyncHandler = require("express-async-handler");

//Site home page.
exports.index = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Site Home Page");
  });
  
//Display List of all Books.
exports.book_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: book list");
});

//Display detail page for a specific Book.
exports.book_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: book details: ${req.params.id}`);
});

//Display book create form on GET
exports.book_create_get = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: book create GET`);
  });

//Handle book create on POST
exports.book_create_post = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: book create POST`);
  });

//Display book delete form on GET
exports.book_delete_get = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: book delete GET`);
  });

//Handle book delete on POST
exports.book_delete_post = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: book delete POST`);
  });

  //Display book update form on GET
exports.book_update_get = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: book update GET`);
  });

//Handle book update on POST
exports.book_update_post = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: book update POST`);
  });