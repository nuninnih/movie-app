'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Movie.init({
    title: {
      type: DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty: {
          msg : "Title required!"
        },
        notNull: {
          msg : "Title required!"
        }
      }
    },
    synopsis: {
      type: DataTypes.TEXT,
      allowNull : false,
      validate : {
        notEmpty: {
          msg : "Synopsis required!"
        },
        notNull: {
          msg : "Synopsis required!"
        }
      }
    },
    trailerUrl: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    rating: {
      type: DataTypes.INTEGER,
      validate : {
        min : {
          args : 1,
          msg : "Minimal rating is 1"
        }
      }
    },
    genreId: {
      type: DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notEmpty: {
          msg : "Genre required!"
        },
        notNull: {
          msg : "Genre required!"
        }
      }
    },
    authorId: {
      type: DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notEmpty: {
          msg : "Author required!"
        },
        notNull: {
          msg : "Author required!"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};