const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true, // parece não estar funcionando
    require: true,
    minlength: 3,
    maxlength: 50
  },
  userName: {
    type: String,
    require: true,
    minlength: 3,
    maxlength: 50
  },
  password: {
    type: String,
    require: true,
    minlength: 3,
    maxlength: 50
  },
  favoriteItens: {
    type: Array
  },
  registerAt: {
    type: Date,
    default: Date.now
  }
})

mongoose.model('User', UserSchema)