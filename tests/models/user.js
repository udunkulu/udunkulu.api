/* eslint-disable no-undef */
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const chai = require('chai');
const chaiHttp = require('chai-http');
const _ = require('lodash');
const server = require('../../index');
const { User } = require('../../models/user');
const { SECRET } = require('../../config/env');

const { expect } = chai;
const should = chai.should();

describe('User', () => {
  describe('Token', () => {
    it('It should generate user auth token', (done) => {
      const payload = {
        _id: mongoose.Types.ObjectId().toHexString(),
        email: 'test@email.com',
        role: 'user'
      };

      const user = new User(payload);
      const token = user.generateAuthToken();
      const decoded = jwt.verify(token, SECRET);

      _decoded = _.omit(decoded, ['exp', 'iat']);

      decoded.should.be.a('object');
      decoded.should.have.property('email');
      decoded.should.have.property('_id');
      decoded.should.have.property('role');
      expect(_decoded).to.deep.equal(payload);
      done();
    });
  });
});
