"use strict";

const { app } = require('../src/server');
const supertest = require("supertest");
const request = supertest(app);
const { db } = require('../src/models/index')
let id;
beforeAll(async () => {
    await db.sync();
})
afterAll(async () => {
    await db.drop();
})
describe('testing 404', () => {
    it('testing /person', async () => {
        const response = await request.get('/wrongPath')
        expect(response.status).toEqual(404);
    })

    it('testing bad method', async () => {
        id = 1;
        const response = await request.post('/')
        expect(response.status).toEqual(404);
    })
})

describe('testing food routes', () => {
    it('testing get all food', async () => {
        const response = await request.get('/api/v1/food')
        expect(response.status).toEqual(200)
    })
    it('post new food', async () => {
        const response = await request.post('/api/v1/food').send({
            foodName: "test",
            dishSize: "test"
        });
        expect(response.status).toEqual(201);
        id = response.body.id
    });

    it('testing food get by id method', async () => {
        const response = await request.get(`/api/v1/food/${id}`)
        expect(response.status).toEqual(200);
    })


    it('update new food', async () => {
        const response = await request.put(`/api/v1/food/${id}`).send({
            foodName: "test",
            dishSize: "test"
        })
        expect(response.status).toEqual(201);
    });

    it('deleting food by id', async () => {
        const response = await request.delete(`/api/v1/food/${id}`)
        expect(response.status).toEqual(204);
    })

})

describe('testing clothes routes', () => {
    it('testing get all clothes', async () => {
        const response = await request.get('/api/v1/clothes')
        expect(response.status).toEqual(200)
    })
    it('post new clothes', async () => {
        const response = await request.post('/api/v1/clothes').send({
            clothesName: "test",
            clothesSize: "test"
        });
        expect(response.status).toEqual(201);
        id = response.body.id
    });

    it('testing clothes get by id method', async () => {
        const response = await request.get(`/api/v1/clothes/${id}`)
        expect(response.status).toEqual(200);
    })


    it('update new clothes', async () => {
        const response = await request.put(`/api/v1/clothes/${id}`).send({
            clothesName: "test",
            clothesSize: "test"
        })
        expect(response.status).toEqual(201);
    })
    it('deleting clothes by id', async () => {
        const response = await request.delete(`/api/v1/clothes/${id}`)
        expect(response.status).toEqual(204)

    })
})