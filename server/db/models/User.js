const Sequelize = require("sequelize");
const db = require("../db");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
// const axios = require("axios");

// const SALT_ROUNDS = 5;

const User = db.define("user", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
  },
})

// const hashPassword = async (user) => {
//   //in case the password has been changed, we want to encrypt it with bcrypt
//   if (user.changed("password")) {
//     user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
//   }
// };

// User.beforeCreate(hashPassword);
// User.beforeUpdate(hashPassword);

module.exports = User
