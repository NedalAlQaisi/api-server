"use strict";

// CRUD operations
class Collection {
    constructor(model) {
        this.model = model;
    }

    //>>>>>>>>CREATE
    async create(obj) {
        try {
            return await this.model.create(obj);
        } catch (e) {
            console.log('error in creating new record for model: ', this.model.name);
        }
    }

    //>>>>>>>>GET
    async get(id) {
        try {
            if (id) {
                return await this.model.findOne({ where: { id: id } });
            }
            else {
                return await this.model.findAll();
            }
        } catch (e) {
            console.log('error in reading record(s) for model: ', this.model.name);
        }
    }

    //>>>>>>>>UPDATE
    async update(body, id) {
        try {
            let clothesAskedFor = await this.model.findOne({ where: { id: id } });
            return clothesAskedFor.update(body);
        } catch (e) {
            console.log('error in updating record for model: ', this.model.name);
        }
    }

    //>>>>>>>>DELETE
    async delete(id) {
        try {
            let deletedID = await this.model.findOne({ where: { id: id } });
            return deletedID.destroy(id);
        } catch (e) {
            console.log('error in deleting record for model: ', this.model.name);
        }
    }
}

module.exports = Collection;