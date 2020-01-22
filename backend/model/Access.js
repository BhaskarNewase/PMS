const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Access = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  status:{
    type: Boolean,
    required: true
  }
}, {
  collection: 'access'
})

module.exports = mongoose.model('Access', Access)
