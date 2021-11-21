const express = require('express')
const authMiddleware = require('../middlewares/auth')

module.exports = {
  async test(req, res) {
    return res.send({ 
      ok: 'true',
      user: req.userId
    })
  }
}