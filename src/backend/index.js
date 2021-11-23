const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('requiredir');
const cors = require('cors');


const app = express();
app.use(express.json());

const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));

mongoose.connect('mongodb://localhost:27017/netflixCloneUsers', {useNewUrlParser: true});

requireDir('./models');

app.use('/system', require('./routes/routes'));
app.listen(3001, () => {
  console.log('Backend Pronto...')
});