const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Session', () => {
    beforeAll(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should return an ong name', async () => {
        let response = await request(app)
            .post('/ongs')
            .send({
                name: "ong",
                email: "email@email.com",
                whatsapp: "00000000000",
                city: "Marataízes",
                uf: "ES"
            });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);

        const { id } = response.body;

        response = await request(app)
            .post('/sessions')
            .send({
                id: id
            });

        expect(response.body).toHaveProperty('name');
    });
})