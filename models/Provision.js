const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProvisionSchema = new mongoose.Schema({
  provisionHeader: {
    type: String,
    required: true,
    unique: true
  },
  provisionType: {
    type: String
  },
  provisionDate: {
    type: Date
  },
  provisionDocument: {
    type: String
  },
  file: {
    type: Schema.Types.ObjectId,
    ref: 'file'
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Provision = mongoose.model('provision', ProvisionSchema);
