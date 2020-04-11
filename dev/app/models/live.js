const mongoose = require('mongoose');

const LiveSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  url: {
    type: String,
    required: true,
  },
  caracteristique: {
    type: String,
    required: true,
  },
  titre: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Live = mongoose.model('live', LiveSchema);