const Bookinstance = require("../models/bookinstance");
const asyncHandler = require("express-async-handler");

//Display List of all Bookinstances.
exports.bookinstance_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: bookinstance list");
});

//Display detail page for a specific Bookinstance.
exports.bookinstance_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: bookinstance details: ${req.params.id}`);
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