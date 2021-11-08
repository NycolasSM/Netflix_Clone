const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
  async insert (req, res) {
    const user = await User.create(req.body);
    return res.json(user)
  },
  async getAllUsers (req, res) {
    const users = await User.find({});
    return res.json(users)
  },
  async getUser(req, res) {
    const user = await User.findById(req.params.id);
    return res.json(user)
  }
}