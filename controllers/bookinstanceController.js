const Bookinstance = require("../models/bookinstance");
const asyncHandler = require("express-async-handler");

//Display List of all Bookinstances.
exports.bookinstance_list = asyncHandler(async (req, res, next) => {
  
  const allBookInstances = await Bookinstance.find().populate("book").exec();

  res.render("bookinstance_list", {
    title: "Book Instance List",
    bookinstance_list: allBookInstances,
  });
});

//Display detail page for a specific Bookinstance.
exports.bookinstance_detail = asyncHandler(async (req, res, next) => {
  const bookInstance = await BookInstance.findById(req.params.id)
  .populate("book")
  .exec();

if (bookInstance === null) {
  // No results.
  const err = new Error("Book copy not found");
  err.status = 404;
  return next(err);
}

res.render("bookinstance_detail", {
  title: "Book:",
  bookinstance: bookInstance,
});
});

//Display bookinstance create form on GET
exports.bookinstance_create_get = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: bookinstance create GET`);
  });

//Handle bookinstance create on POST
exports.bookinstance_create_post = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: bookinstance create POST`);
  });

//Display bookinstance delete form on GET
exports.bookinstance_delete_get = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: bookinstance delete GET`);
  });

//Handle bookinstance delete on POST
exports.bookinstance_delete_post = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: bookinstance delete POST`);
  });

  //Display bookinstance update form on GET
exports.bookinstance_update_get = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: bookinstance update GET`);
  });

//Handle bookinstance update on POST
exports.bookinstance_update_post = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: bookinstance update POST`);
  });