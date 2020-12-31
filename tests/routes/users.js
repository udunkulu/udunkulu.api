/* eslint-disable no-undef */
const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');

const { server } = require('../../index');
const { BASE_PATH } = require('../../config/env');
const { User } = require('../../models/user');

const { expect } = chai;
const should = chai.should();

chai.use(chaiHttp);

/**
 * NB: The Get /users has been tested,
 * some code repeated in some test cases, example: token variable
 * later it will be refactored and cleaned up
 */

describe(`${BASE_PATH}/users`, () => {
  after(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  describe('List all users ::: Get: /users', () => {
    afterEach(async () => {
      await User.deleteMany({});
    });

    beforeEach(async () => {
      await User.deleteMany({});
    });
    // ***Test Summary for GET: /users***
    // It should return 401
    //  - if not token provided
    //  - if token length is less than 10 characters
    // it should return status of 200
    // it should returns all users
    // it should return 404 when user(s) does not exist

    it('should return 401 if not token or if token is less than 10 characters', async () => {
      const token = '';
      const user = new User({
        firstName: 'ezeh',
        lastName: 'Livinus',
        password: '123456',
        email: 'ezeh@mail.com'
      });
      await user.save();

      const res = await chai.request(server)
        .get(`${BASE_PATH}/users`)
        .set({ token });

      expect(res.status).to.equal(401);
      expect(res.body.status).to.equal(false);
      expect(res.body).to.have.property('message');
    });

    it('should return status of 200', async () => {
      const user = new User({
        firstName: 'ezeh',
        lastName: 'Livinus',
        password: '123456',
        email: 'ezeh@mail.com'
      });
      await user.save();

      const token = user.generateAuthToken();

      const res = await chai.request(server)
        .get(`${BASE_PATH}/users`)
        .set({ token });

      expect(res.status).to.equal(200);
      expect(res.body.status).to.equal(true);
    });

    it('should return all users', async () => {
      const data = [
        {
          firstName: 'ezeh',
          lastName: 'Livinus',
          password: '123456',
          email: 'ezeh@mail.com'
        },
        {
          firstName: 'Mark',
          lastName: 'John',
          password: '123456',
          email: 'mark@Gmail.com'
        },
        {
          firstName: 'Steven',
          lastName: 'McConnel',
          password: '123456',
          email: 's.connel@mail.com'
        }
      ];

      const users = await User.insertMany(data);
      const token = users[0].generateAuthToken();

      const res = await chai.request(server)
        .get(`${BASE_PATH}/users`)
        .set({ token });

      res.body.should.be.an('object');
      res.body.should.have.property('data');
      res.body.data.should.be.an('array');
      res.body.data.should.have.lengthOf(3);
      expect(res.body).to.have.property('message');
      expect(res.body.status).to.equal(true);
      expect(res.body.data[0]).to.have.property('email');
    });

    it('should return 404 when user(s) does not exist', async () => {
      const payload = {
        _id: mongoose.Types.ObjectId().toHexString(),
        email: 'test@email.com',
        role: 'user'
      };

      const user = new User(payload);
      const token = user.generateAuthToken();

      const res = await chai.request(server)
        .get(`${BASE_PATH}/users`)
        .set({ token });

      expect(res.status).to.equal(404);
      res.body.should.be.a('object');
      res.body.should.have.property('status');
      expect(res.body.status).to.equal(false);
    });
  });

  describe('Retrieve a user ::: Get: /users/:id', () => {
    // same as above for Get: /users
    // but now with user id and res.body.data of type object
  });

  describe('Create a user ::: Post: /users', () => {});

  describe('Update a user ::: Update: /users/:id', () => {});

  describe('Delete a user ::: Delete: /users/:id', () => {});
});
