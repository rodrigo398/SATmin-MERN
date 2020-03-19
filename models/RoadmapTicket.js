const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoadmapTicketSchema = new mongoose.Schema({
  roadmap: {
    type: Schema.Types.ObjectId,
    ref: 'roadmap'
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

module.exports = RoadmapTicket = mongoose.model(
  'roadmapTicket',
  RoadmapTicketSchema
);
