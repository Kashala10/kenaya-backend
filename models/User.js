const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Utils = require('../utils')
require('mongoose-type-email')

// schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: mongoose.SchemaTypes.Email,
    required: true    
  },
  birthday: {
    type: Number,
    required: true
  },
  mobile: {
    type: Number,
    required: true
  },
  adress: {
    type: String,
    required: true
  },
  adress2: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String    
  }
}, { timestamps: true })

// encrypt password field on save
userSchema.pre('save', function(next) {
  // check if password is present and is modifed  
  if( this.password && this.isModified() ){
      this.password = Utils.hashPassword(this.password);
  }
  next()
})

// model
const userModel = mongoose.model('User', userSchema)

// export
module.exports = userModel




