const mongoose = require('mongoose');

const membersSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: [true, 'Each member must have a different name with each other'],
    trim: true,
    required: [true, 'Each member must include a name'],
  },
  id: {
    type: Number,
    required: [true, 'Each member must have a custom ID'],
  },
  imageName: {
    type: String,
    required: [true, 'Each member must a profile picture'],
    trim: true,
  },
  imageAlt: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
    required: [true, 'Each member must have some description'],
  },
});

const members = mongoose.model('Members', membersSchema);

module.exports = members;
