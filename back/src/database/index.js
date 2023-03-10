require("dotenv").config();
const { Sequelize } = require("sequelize");
const { characterModel } = require("./models/Character");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
    { logging: false, native: false }
  );

characterModel(sequelize)



module.exports = {
    ...sequelize.models,
    sequelize,
  };
  