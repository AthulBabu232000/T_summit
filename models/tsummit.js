"use strict";
const { Model } = require("sequelize");
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
  tsummit.init(
    {
      college: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      delegateonename: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      delegateonemail: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
        },
      },
      delegateonephno: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      delegatetwoname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      delegatetwomail: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
        },
      },
      delegatetwophno: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      delegatethreename: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      delegatethreemail: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
        },
      },
      delegatethreephno: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      delegatefourname: {
        type: DataTypes.STRING,
      },
      delegatefourmail: {
        type: DataTypes.STRING,
      },
      delegatefourphno: {
        type: DataTypes.STRING,
      },
      delegatefivename: {
        type: DataTypes.STRING,
      },
      delegatefivemail: {
        type: DataTypes.STRING,
      },
      delegatefivephno: {
        type: DataTypes.STRING,
      },
      delegatesixname: {
        type: DataTypes.STRING,
      },
      delegatesixmail: {
        type: DataTypes.STRING,
      },
      delegatesixphno: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "tsummit",
    }
  );
  return tsummit;
};
