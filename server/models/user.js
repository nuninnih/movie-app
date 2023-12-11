'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull : false,
      unique : true, 
      validate: {
        notEmpty: {
          msg : "Email required!"
        },
        notNull: { 
          msg : "Email required!"
        },
        isEmail :{
          msg : "Use the right email format!"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull : false,
      unique : true, 
      validate: {
        notEmpty: {
          msg : "Password required!"
        },
        notNull: {
          msg : "Password required!"
        },
        len: {
          args: [5, 50],
          msg : "Minimal length of password is 5 characters"
        }
      }
    },
    role: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate((instance) => {
    instance.password = hashPassword(instance.password)
  })

  return User;
};