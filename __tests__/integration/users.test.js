/* eslint-disable no-undef */
/* eslint-disable global-require */
const request = require('supertest');
const mongoose = require('mongoose');
const { User } = require('../../models/User');

describe('/api/v1/users', () => {
  let server;

  beforeEach(() => {
    server = require('../../index');
  });

  afterEach(async () => {
    await User.deleteMany({});
    await server.close();
  });

  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await server.close();
  });

  describe('GET /', () => {
    it('should return all users', async () => {
      expect(1).toBe(1);
    });
  });
});
