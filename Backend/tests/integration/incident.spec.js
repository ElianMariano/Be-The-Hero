const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Incident', () => {
    beforeAll(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new incident', async () => {
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

        response = await request(app)
            .post('/incidents')
            .set({Authorization: response.body.id})
            .send({
                title: "Caso React Native",
                description: "Descrição caso feito React Native",
                value: 100.0
            });

        expect(response.body).toHaveProperty('id');
    });
})