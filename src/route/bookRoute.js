import express from "express";
import bookModel from "../models/bookModel.js";
const bookRoute = express.Router();

bookRoute.get("/", async (req, res) => {
  res.status(200).json({ success: true, message: "you are inside book" });
});
bookRoute.post("/add", async (req, res) => {
  const { name, author, genre, description, image } = req.body;
  const data = await bookModel.create({
    name,
    author,
    genre,
    description,
    image,
  });
  res.send(data);
});
export default bookRoute;
