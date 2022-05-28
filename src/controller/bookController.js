import bookModel from "../models/bookModel.js";
class BookController {
  //for bookhome
  async bookHome(req, res) {
    res.status(200).json({ success: true, message: "you are inside book" });
  }

  //for book add
  async bookAdd(req, res) {
    const { name, author, genre, description, image } = req.body;
    const data = await bookModel.create({
      name,
      author,
      genre,
      description,
      image,
    });
    res.send(data);
  }
  //for book view by id
  async bookView(req, res) {
    const { id } = req.params;
    const data = await bookModel.findByPk(`${id}`);
    res.send(data);
  }
  //for book update
  async bookUpdate(req, res) {
    const { name, author, genre, description, image } = req.body;
    const { id } = req.params;
    const data = await bookModel.update(
      { name, author, genre, description, image },
      {
        where: { id },
      }
    );
    res.send(data);
  }

  //for book delete
  async bookDelete(req, res) {
    const { id } = req.params;
    const data = await bookModel.destroy({ where: { id } });
    res.json(data);
  }
}
export default BookController;
