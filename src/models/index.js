'use strict';

const { Sequelize, DataTypes } = require('sequelize')
const food = require('./food');
const clothes = require('./clothes');
const clothesCollection = require('./collection-class')
const foodCollection = require('./collection-class')
require('dotenv').config();

//prepare the connection to the database
const myPOSTGRES_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    }
} : {};
let sequelize = new Sequelize(myPOSTGRES_URL, sequelizeOptions);

let clothesModel = clothes(sequelize, DataTypes);
let clothesCollect = new clothesCollection(clothesModel);

let foodModel = food(sequelize, DataTypes);
let foodCollect = new foodCollection(foodModel)




module.exports = {
    // for connection and will use it in index.json
    db: sequelize,

    // for creating the table and will use in our route 
    Food: foodCollect,

    // for creating the table and will use in our route
    Clothes: clothesCollect
}