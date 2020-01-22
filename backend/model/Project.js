const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//mongoose

// Define collection and schema
let Project = new Schema({
  project_name: {
    type: String,
    required: true,
    unique: true
  },
  project_key: {
    type: String
  },
  project_type: {
    type: String
  },
  project_lead: {
    type: String
  },
  project_category: {
    type: String
  },
  project_url: {
    type: String
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId
  }
}, {
  collection: 'projects'
})

module.exports = mongoose.model('Project', Project)