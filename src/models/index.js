import { Sequelize } from "sequelize";
import "dotenv/config";

export default new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  //   "project1",
  //   "root",
  //   "pabina1234",
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    pool: {
      max: 5,
    },
  }
);
