import express from "express";
import bookModel from "../models/bookModel.js";
const bookRoute = express.Router();

//book home page
bookRoute.get("/", async (req, res) => {
  res.status(200).json({ success: true, message: "you are inside book" });
});

//adding book
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

//view book details according to id
bookRoute.get("/:id", async (req, res) => {
  const { id } = req.params;
  const data = await bookModel.findByPk(`${id}`);
  res.send(data);
});

//update book
bookRoute.post("/update/:id", async (req, res) => {
  const { name, author, genre, description, image } = req.body;
  const { id } = req.params;
  const data = await bookModel.update(
    { name, author, genre, description, image },
    {
      where: { id },
    }
  );
  res.send(data);
});
//delete book
bookRoute.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const data = await bookModel.destroy({ where: { id } });
  res.json(data);
});
export default bookRoute;
