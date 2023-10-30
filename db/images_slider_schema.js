const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A news must have a name!'],
    unique: true,
    trim: true,
  },
  imgSRC: {
    type: String,
    required: [true, 'A news must have a image source!'],
    trim: true,
  },
  imgAlt: {
    type: String,
    required: [true, "A news' image must have an alt!"],
    trim: true,
  },
  imgFormat: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
    required: [true, 'A news must have a description!'],
  },
  descriptionPosition: {
    type: String,
    enum: ['right', 'left'],
    default: 'left',
    trim: true,
  },
  newsContent: {
    type: String,
    trim: true,
    required: [true, 'A news must have some content in there!'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const news = mongoose.model('news', newsSchema);

module.exports = news;
