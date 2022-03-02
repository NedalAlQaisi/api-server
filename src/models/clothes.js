"use strict";

const Clothes = (sequelize, DataTypes) =>
    sequelize.define("clothes", {
        clothesName: {
            type: DataTypes.STRING,

        },
        clothesSize: {
            type: DataTypes.STRING,

        },
    });

module.exports = Clothes;
