require("dotenv").config();
const { Sequelize } = require("sequelize");
const { characterModel } = require("./models/Character");
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT,
} = process.env;
console.log(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`);
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
characterModel(sequelize)



module.exports = {
    ...sequelize.models,
    sequelize,
  };
  