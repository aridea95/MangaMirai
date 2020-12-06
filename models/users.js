'use strict';
const {encryptPwd} = require('../helpers/bcrypt')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      users.belongsToMany(models.mangas, { through: 'models.favorite' });

    }
  };
  users.init({
    name: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : "Name must be filled."
        },
      }
    },       
    password: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : "Pwd must be filled thanks."
        }
      }
    },
    email: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : "usersname must be filled."
        },
        isEmail : {
          msg : "usersname must be email."
        }
      }
    },    
    age: {
      type : DataTypes.INTEGER,
      validate : {
        notEmpty : {
          msg : "Age must be filled."
        },
      }
    },
    gender: {
      type : DataTypes.STRING,
    }, 
  },
  {
    // hooks : {
    //   beforeCreate(users){
    //     users.password = encryptPwd(users.password)
    //   }
    // },
    sequelize,
    modelName: 'users', 
  });
  return users;
};