'use strict';
const express = require('express');
const { Clothes } = require('../models/index.js');
const router = express.Router();


// Routes
router.get('/clothes', getClothes);
router.get('/clothes/:id', getClothesById);
router.put('/clothes/:id', updatedClothes);
router.post('/clothes', addClothes);
router.delete('/clothes/:id', deleteClothes);



async function getClothes(req, res) {
    let clothes = await Clothes.get();
    res.status(200).json(clothes);
}

async function addClothes(req, res) {
    let newClothes = req.body;
    let addedClothes = await Clothes.create(newClothes);
    res.status(201).json(addedClothes);
}
async function getClothesById(req, res) {
    let id = parseInt(req.params.id);
    let clothesAskedFor = await Clothes.get(id);
    res.status(200).json(clothesAskedFor);
}

async function deleteClothes(req, res) {
    let deletedId = parseInt(req.params.id);
    let deletedClothes = await Clothes.delete(deletedId);
    res.status(204).json(deletedClothes);
}

async function updatedClothes(req, res) {
    let body = req.body;
    let id = req.params.id;

    const UpdatedClothes = await Clothes.update(body, id);
    res.status(201).json(UpdatedClothes);
}


module.exports = router;