const faker = require('faker');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { isLength } = require('lodash');
const { User } = require('../models/user');
const { Artist } = require('../models/artist');

const _users = [];

try {
  mongoose.connect('mongodb://localhost:27017/udunkulu', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
    .then(() => console.log('connected'))
    .catch((e) => console.log(e));

  const numbers = [...Array(10).keys()];

  numbers.forEach((number, index) => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const password = '123456';
    const phoneNumber = faker.phone.phoneNumber();
    const role = 'artist';

    _users.push({
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      role
    });
  });
} catch (e) {
  console.log(e);
}

const createUser = async () => {
  try {
    const artists = [];

    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash('123456', salt);

    _users.map((user, index, _users) => {
      _users[index].password = password;
    });

    const users = await User.insertMany(_users);

    users.map((user, index, users) => {
      artists.push({
        stageName: faker.name.lastName(),
        user: user._id
      });
    });

    const a = await Artist.insertMany(artists);
    return a;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

createUser()
  .then((result) => {
    console.log('success');
  })
  .catch((e) => {
    console.log(e);
  });
