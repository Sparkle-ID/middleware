import request from 'supertest';
import { app } from '../../app';
import { response } from 'express';

it('has a route handler listening to /api/dids for post requests', async () => {
    const response = await request(app)
        .post('/api/dids')
        .send({})

    expect(response.status).not.toEqual(404);
});

it('can only be accessed if the user is signed', async () => {
    const response = await request(app)
        .post('/api/dids')
        .send({}).expect(401);
});

it('returns a status other than 401 if the user is signed in', async () => {
    const response = await request(app)
        .post('/api/dids')
        .set('Cookie', global.signin())
        .send({});
    
    expect(response.status).not.toEqual(401);
});

it('returns an error if invalid input provided', async () => {

});

it('creates a did with valid input', async () => {

});