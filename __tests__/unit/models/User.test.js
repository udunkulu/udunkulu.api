/* eslint-disable no-undef */
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { User } = require('../../../models/User');
const { SECRET } = require('../../../config/env');

describe('User authentication token', () => {
  it('should return a valid json web token', () => {
    const payload = {
      _id: mongoose.Types.ObjectId().toHexString(),
      email: 'test@email.com',
      role: 'user'
    };

    const user = new User(payload);
    const token = user.generateAuthToken();
    const decoded = jwt.verify(token, SECRET);

    expect(decoded).toMatchObject(payload);
  });
});
