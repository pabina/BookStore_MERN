import { Op } from "sequelize";
import bookModel from "../models/bookModel.js";
class BookController {
  //for bookhome
  async bookHome(req, res) {
    let { limit } = req.query;
    if (!limit) limit = 5;
    const data = await bookModel.findAll({});
    res.send(data);
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

  //for book search
  async bookSearch(req, res) {
    let { q } = req.query;
    if (q) {
      const data = await bookModel.findAll({
        where: {
          [Op.or]: {
            name: {
              [Op.like]: `%${q}%`,
            },
            author: { [Op.like]: `%${q}%` },
          },
        },
      });
      res.json(data);
    } else res.send("dont match any value");
  }
}
export default BookController;
