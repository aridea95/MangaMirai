'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mangas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      mangas.belongsToMany(models.users, { through: 'models.favorite' });
    }
  };
  mangas.init({ 
    title: {
        type : DataTypes.STRING,
        validate : {
          notEmpty : {
            msg : "Title must be inserted."
          }
        }
      },
    image: {
        type : DataTypes.STRING,
        validate : {
          notEmpty : {
            msg : "Please input the image."
          },
          isUrl : {
            msg : "Image must be URL."
          }
        }
       },
    genre: {
        type : DataTypes.STRING,
        validate : {
          notEmpty : {
            msg : "Genre must be inserted."
          }
        }
      },
    author: {
        type : DataTypes.STRING,
        validate : {
          notEmpty : {
            msg : "Author must be inserted."
          }
        }
      },
    rate: {
        type : DataTypes.INTEGER,
        validate : {
          notEmpty : {
            msg : "How's the rate for the manga."
          },
          isNumeric : {
            msg : "Use number format."
          }
        }
      },
    synopsis: {
        type : DataTypes.STRING,
        validate : {
          notEmpty : {
            msg : "Please enter the details"
          }
        }
      }
  }, {
    hooks : {
        beforeCreate(manga, options){
          manga.rate = manga.rate || 1;
        }},
    sequelize,
    modelName: 'mangas',
  });
  return mangas;
};