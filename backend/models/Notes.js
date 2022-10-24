const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  tag: {
    type: String,
    default: 'gernal',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('note', NotesSchema);
