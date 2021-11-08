const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('requiredir');
// const cors = require('cors');

const app = express();
app.use(express.json());
// app.use(cors()); // security

mongoose.connect('mongodb://localhost:27017/netflixCloneUsers', {useNewUrlParser: true});

requireDir('./models');

app.use('/system', require('./routes/routes'));
app.listen(3001);