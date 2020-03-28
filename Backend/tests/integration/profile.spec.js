const app = require('../../src/app');
const request = require('supertest');
const connection = require('../../src/database/connection');

describe('Profile', () => {
    beforeAll(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should return an array of incidents', async () => {
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
            .post('/incidents')
            .set({Authorization: id})
            .send({
                title: "Caso React Native",
                description: "Descrição caso feito React Native",
                value: 100.0
            });

        expect(response.body).toHaveProperty('id');

        response = await request(app)
            .get('/profile')
            .set({Authorization: id});

        const [ incident ] = response.body;

        expect(incident).toHaveProperty('id');
        expect(incident).toHaveProperty('title');
        expect(incident).toHaveProperty('description');
        expect(incident).toHaveProperty('value');
        expect(incident).toHaveProperty('ong_id');
        expect(incident.ong_id).toHaveLength(8);
    });
});