const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const ObjectId = require('mongodb').ObjectId;

const authConfig = require('../config/auth.json');
const { NetworkWifiRounded } = require('@material-ui/icons');

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  })
}

module.exports = {
  async register(req, res) {
    const { email } = req.body;

    try {

      if (await User.findOne({ email }))
        return res.status(400).send({ error: 'User already exists' });

      const user = await User.create(req.body);

      user.password = undefined;

      return res.status(201).send({ message: 'Usuário Criado' });

    } catch (err) {
      return res.status(500).send({ error: 'Unexpected error on register' });
    }

  },

  async authenticate(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

      if (!user)
        return res.status(400).send({ error: "Usuário não encontrado" });

      if (!await bcrypt.compare(password, user.password))
        return res.status(400).send({ error: "Senha Inválida" });

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

  async getAllUsers(req, res) {
    const users = await User.find({});
    return res.json(users);
  },

  async updateUser(req, res) {
    const users = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.json(users);
  },

  async deleteUser(req, res) {
    await User.findByIdAndRemove(req.params.id);
    return res.send();
  },

  async removeProfile(req, res) {

    const { userId, profileId } = req.body

    await User.findByIdAndUpdate(
      {
        _id: userId
      },
      {
        $pull: {
          profiles: { _id: new ObjectId(profileId) }
        },
      }
    )
    return res.status(200).send({
      ok: "perfil removido"
    })
  },

  async removeAllProfiles(req, res) {
    await User.findOneAndUpdate(
      {
        _id: req.body.userId
      },
      {
        $pull: {
          profiles: {}
        }
      }
    )
    return res.status(200).send({
      ok: "todos os perfis removidos"
    })
  },

  async addProfile(req, res) {

    const { userId, name, img } = req.body;

    await User.findByIdAndUpdate(
      {
        _id: userId
      },
      {
        $addToSet: {
          profiles: {
            _id: mongoose.Types.ObjectId(),
            name: name,
            img: img
          }
        }
      }
    )
    return res.status(200).send({
      ok: "true"
    })
  }

  // async addProfile(req, res) {
  //   await User.aggregate([
  //     { $match: {(req.params.id)} }
  //   ])
  // }
}


// async authenticate(req, res) {
//   const { email, password } = req.body;

//   const { password: userPassword, ...user } = await User.findOne({ email }).select('+password');

//     if (!user)
//       return res.status(400).send({ error: 'Usuário não encontrado' });

//     if (!await bcrypt.compare(password, userPassword))
//       return res.status(400).send({ error: 'Senha Inválida' });

//     console.log(user)

//     res.send({
//       user,
//       token: generateToken({ id: user.id })
//     });

// },