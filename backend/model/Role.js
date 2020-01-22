const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//const access = require('./Access');

let Role = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  status: {
    type: Boolean,
    required: true
  },
  access: [{
    type: Schema.Types.ObjectId,
    ref: "Access"
  }]
},
{
  collection: 'role'
})

module.exports = mongoose.model('Role', Role);
