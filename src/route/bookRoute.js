import express from "express";
import bookModel from "../models/bookModel.js";
import multer from "multer";
import BookController from "../controller/bookController.js";
const Controller = new BookController();
const bookRoute = express.Router();
let imageName;
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/");
  },
  filename: function (req, file, cb) {
    imageName =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      "-" +
      file.originalname.trim();
    cb(null, imageName);
  },
});

const upload = multer({ storage: storage });

//book home page
bookRoute.get("/", Controller.bookHome);

//adding book
bookRoute.post("/add", upload.single("image"), (req, res) => {
  Controller.bookAdd(req, res, imageName);
}),
  //view book details according to id
  bookRoute.get("/:id", Controller.bookView);

//update book
bookRoute.post("/update/:id", upload.single("image"), (req, res) => {
  Controller.bookUpdate(req, res, imageName);
});
//delete book
bookRoute.delete("/delete/:id", Controller.bookDelete);

//for serach all according to author and bookname
bookRoute.get("/search/all", Controller.bookSearch);
export default bookRoute;
