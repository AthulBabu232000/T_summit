'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tsummit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tsummit.init({
    college: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty : true
      }
    },
    location: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty : true
      }
    },
    delegateonename: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty : true
      }
    },
    delegateonemail: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty : true
      }
    },
    delegateonephno: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty : true
      }
    },
    delegatetwoname: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty : true
      }
    },
    delegatetwomail: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty : true
      }
    },
    delegatetwophno: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty : true
      }
    },
    delegatethreename: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty : true
      }
    },
    delegatethreemail: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty : true
      }
    },
    delegatethreephno: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty : true
      }
    },
    delegatefourname: {
      type: DataTypes.STRING,
      allowNull:true,
      validate:{
        notEmpty : true
      }
    },
    delegatefourmail: {
      type: DataTypes.STRING,
      allowNull:true,
      validate:{
        notEmpty : true
      }
    },
    delegatefourphno: {
      type: DataTypes.STRING,
      allowNull:true,
      validate:{
        notEmpty : true
      }
      
    },

  }, {
    sequelize,
    modelName: 'tsummit',
  });
  return tsummit;
};