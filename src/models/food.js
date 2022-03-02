"use strict";

const Food = (sequelize, DataTypes) =>
    sequelize.define("food", {
        foodName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dishSize: {
            type: DataTypes.STRING,

        },
    });

module.exports = Food;
