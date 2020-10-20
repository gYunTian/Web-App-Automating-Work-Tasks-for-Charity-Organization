var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const UserSchema = new Schema ({
    email: { type: String, unique: true, required: true},
    name: { type: String, required: true},
    password: { type: String, required: true},
    createdDate: { type: Date, default: Date.now}

})

module.exports = mongoose.model('User', UserSchema);

