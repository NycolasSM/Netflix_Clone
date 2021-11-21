const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

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
    maxlength: 50,
    select: false,
  },
  favoriteItens: {
    type: Array
  },
  profiles: {
    type: Array
  },
  registerAt: {
    type: Date,
    default: Date.now
  }
});

UserSchema.pre('save', async function(next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});

mongoose.model('User', UserSchema)