const mongoose = require('mongoose');
const mongooseURI = 'mongodb://localhost:27017/NewDb';

const connectToMongo = () => {
  mongoose.connect(mongooseURI, () => {
    console.log('connect to MongoDb successfull');
  });
};

module.exports = connectToMongo;
