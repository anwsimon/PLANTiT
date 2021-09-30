const Sequelize = require("sequelize");
const db = require("../db");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
// const axios = require("axios");

// const SALT_ROUNDS = 5;

const Plant = db.define("plant", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  notes: {
    type: Sequelize.TEXT,
  },
  imageURL: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
  },
  schedule: {
    type: Sequelize.ENUM("1 WEEK", "2 WEEKS", "2 DAYS"),
    defaultValue: "1 WEEK"
  },
  lastWatered: {
    type: Sequelize.DATE
  },
  reminder: {
    type: Sequelize.ENUM("ON", "OFF"),
    defaultValue: "ON"
  }
})

module.exports = Plant
