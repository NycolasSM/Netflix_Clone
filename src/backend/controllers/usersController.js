const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
  async insert (req, res) {
    const users = await User.create(req.body);
    return res.json(users);
  },
  async getAllUsers (req, res) {
    const users = await User.find({});
    return res.json(users);
  },
  async getUser(req, res) {
    const users = await User.findById(req.params.id);
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
}