var mongoose = require('mongoose');

const Test = new mongoose.Schema({
    avatar: {
        type: String
    }
});


module.exports = mongoose.model('Test', Test);