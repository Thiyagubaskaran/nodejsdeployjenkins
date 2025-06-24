const request = require('supertest');
const server = require('./app');

describe('GET /', () => {
  it('should return Hello World', async () => {
    const res = await request(server).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Hello World\n');
  });

  afterAll((done) => {
    server.close(done);
  });
});
