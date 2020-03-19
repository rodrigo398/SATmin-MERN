const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductionSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  file: {
    type: Schema.Types.ObjectId,
    ref: 'file'
  },
  month: {
    type: Number
  },
  year: {
    type: Number
  },
  roadmap: {
    type: Number
  },
  personal: {
    type: Number
  },
  accidents: {
    type: Number
  },
  accidents_per_month: {
    type: Number
  },
  accidents_day: {
    type: Number
  },
  incapacity: {
    type: Number
  },
  productionRaw: [
    {
      item: String,
      production: Number
    }
  ],
  productionElaborate: [
    {
      item: String,
      production: Number
    }
  ],
  soldElaborate: [
    {
      item: String,
      production: Number
    }
  ],
  soldRaw: [
    {
      item: String,
      production: Number
    }
  ],
  stateProduction: {
    type: String
  }
});

module.exports = Production = mongoose.model('production', ProductionSchema);
