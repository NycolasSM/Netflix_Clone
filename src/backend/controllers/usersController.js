const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const authConfig = require('../config/auth.json')

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  })
}

module.exports = {
  async register (req, res) {
    const { email } = req.body;

    try {

      if (await User.findOne({ email }))
        return res.status(400).send({ error: 'User already exists' });

      const user = await User.create(req.body);

      user.password = undefined;

      return res.send({
        user,
        token: generateToken({ id: user.id })
      })
      
    } catch (err) {
      return res.status(400).send({ error: 'Unexpected error on register'})
    }

  },

  async authenticate(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    if (!user)
      return res.status(400).send({ error: 'User not found' });

    if (!await bcrypt.compare(password, user.password))
      return res.status(400).send({ error: 'Invalid password '});

    user.password = undefined;

    res.send({ 
      user,
      token: generateToken({ id: user.id })
    });

  },

  async getUser(req, res) {
    const users = await User.findById(req.params.id);
    return res.json(users);
  },

  async getAllUsers (req, res) {
    const users = await User.find({});
    return res.json(users);
  },

  async updateUser(req, res) {
    const users = await User.findByIdAndUpdate(req.params.id, req.body, { new: true});
    return res.json(users);
  },

  async deleteUser(req, res) {
    await User.findByIdAndRemove(req.params.id);
    return res.send();
  }
  // async addProfile(req, res) {
  //   await User.aggregate([
  //     { $match: {(req.params.id)} }
  //   ])
  // }
}