const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CanonTicketSchema = new mongoose.Schema({
  canon: {
    type: Schema.Types.ObjectId,
    ref: 'canon'
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  transaction: {
    type: String
  },
  datePayment: {
    type: Date
  },
  payment: {
    type: Number
  },
  status: {
    type: String
  },
  actionDate: {
    type: Date
  },
  userAction: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = CanonTicket = mongoose.model('canonTicket', CanonTicketSchema);
