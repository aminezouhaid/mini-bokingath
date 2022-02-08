const {Schema, model}= require('mongoose');

const userSchema = new Schema({
  username: {
    type: String,
    require: [true, ''],
    minlength: [3, ''],
    maxlength: [100, ''],
  },
  email: {
    type: String,
    require: true,
    min: 6,
    max: 255,
   
  },
  password: {
    type: String,
    require: true,
    min: 6,

    max: 255,
   
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = model('users', userSchema)