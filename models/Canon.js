const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CanonSchema = new mongoose.Schema({
  file: {
    type: Schema.Types.ObjectId,
    ref: 'file'
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  canonTicket: [
    {
      type: Schema.Types.ObjectId,
      ref: 'canonTicket'
    }
  ],
  description: [
    {
      code: Number,
      period: Number,
      year: Number,
      amount: Number,
      tax: Number
    }
  ],
  year: {
    type: Number
  },
  total: {
    type: Number
  },
  status: {
    type: String
  },
  //Ver de crear una subcategorìa en donde se almacene la fecha del pago, forma de pago, y si se genera algun comprobante de pago
  //Ver si o si antes de continuar
  payment: {
    type: Date
  },
  comment: {
    type: String
  },
  dateRequest: {
    type: String
  },
  dateDisapprove: {
    type: Date
  },
  date: {
    type: Date,
    default: Date.now
  },
  waiting: {
    type: String
  }
});

module.exports = Canon = mongoose.model('canon', CanonSchema);
