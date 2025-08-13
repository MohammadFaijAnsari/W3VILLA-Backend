const mongoose = require('mongoose');

async function connectToMongoDB(uri) {
  return mongoose.connect(uri, {
    useNewUrlParser: true,

  });
}

module.exports = { connectToMongoDB };
