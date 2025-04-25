const request = require('supertest');
const app = require('../app');

describe('GET /health', () => {
    it('deve retornar uma mensagem Parabéns! Deu certo! :D', async () => {
        const response = await request(app).get('/health');
        expect(response.status).toBe(200);
        expect(response.body.status).toBe('Parabéns! Deu certo! :D');
    })
})

describe('GET /users', () => {
    it('deve retornar uma lista de usuários', async () => {
        const response = await request(app).get ('/users');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBe(3);
        
        expect(response.body[0]).toMatchObject({ id: 1, name: 'Bruna' });
        expect(response.body[1]).toMatchObject({ id: 2, name: 'Aura' });
        expect(response.body[2]).toMatchObject({ id: 3, name: 'Marina' },);
    })
})

