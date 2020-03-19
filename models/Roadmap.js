const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoadmapSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  file: {
    type: Schema.Types.ObjectId,
    ref: 'file'
  },
  roadmapTicket: [
    {
      type: Schema.Types.ObjectId,
      ref: 'roadmapTicket'
    }
  ],
  numberRoadmap: {
    type: String
  },
  stateRoadmap: {
    type: String
  },
  amountRoadmap: {
    type: Number
  },
  requestRoadmap: {
    type: Number
  },
  dateRoadmap: {
    type: Date,
    default: Date.now
  },
  dateApproveRoadmap: {
    type: Date
  },
  roadmapFile: {
    type: String,
    default: 'Empty'
  }
});

module.exports = Roadmap = mongoose.model('roadmap', RoadmapSchema);
