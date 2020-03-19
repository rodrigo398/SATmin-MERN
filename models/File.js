const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FileSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  header: {
    type: String
  },
  name: {
    type: String
  },
  kind: {
    type: String
  },
  initiator: {
    type: String
  },
  location: {
    type: String
  },
  department: {
    type: String
  },
  category: {
    type: String
  },
  deposit: {
    type: String
  },
  extract: {
    type: [String]
  },
  area: {
    type: Number
  },
  unity: {
    type: Number
  },
  address: {
    type: String
  },
  propertyAddress: {
    type: String
  },
  start: {
    type: Date
  },
  end: {
    type: Date
  },
  created: {
    type: Date,
    default: Date.now
  },
  lastCanon: {
    type: Schema.Types.ObjectId,
    ref: 'canon'
  },
  provision: [
    {
      type: Schema.Types.ObjectId,
      ref: 'provision'
    }
  ],
  canon: [
    {
      type: Schema.Types.ObjectId,
      ref: 'canon'
    }
  ],
  roadmap: [
    {
      type: Schema.Types.ObjectId,
      ref: 'roadmap'
    }
  ],
  production: [
    {
      type: Schema.Types.ObjectId,
      ref: 'production'
    }
  ]
});

module.exports = File = mongoose.model('file', FileSchema);
