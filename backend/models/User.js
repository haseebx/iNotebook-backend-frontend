const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const UserX = mongoose.model('user', UserSchema);
UserX.createIndexes();
module.exports = UserX;
