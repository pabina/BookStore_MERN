import bookModel from "../models/bookModel.js";
class BookController {
  //for bookhome
  async bookHome(req, res) {
    res.status(200).json({ success: true, message: "you are inside book" });
  }

  //for book add
  async bookAdd(req, res, imageName) {
    const data = await bookModel.create({ ...req.body, image: imageName });
    res.send(data);
  }
  //for book view by id
  async bookView(req, res) {
    const { id } = req.params;
    const data = await bookModel.findByPk(`${id}`);
    res.send(data);
  }
  //for book update
  async bookUpdate(req, res, imageName) {
    const { id } = req.params;
    const data = await bookModel.update(
      { ...req.body, image: imageName },
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
