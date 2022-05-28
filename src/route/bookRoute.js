import express from "express";
import bookModel from "../models/bookModel.js";

import BookController from "../controller/bookController.js";
const Controller = new BookController();
const bookRoute = express.Router();

//book home page
bookRoute.get("/", Controller.bookHome);

//adding book
bookRoute.post("/add", Controller.bookAdd);

//view book details according to id
bookRoute.get("/:id", Controller.bookView);

//update book
bookRoute.post("/update/:id", Controller.bookUpdate);
//delete book
bookRoute.delete("/delete/:id", Controller.bookDelete);
export default bookRoute;
