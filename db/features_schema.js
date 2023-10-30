const mongoose = require('mongoose');

const featuresSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: [true, 'A feature must have a title'],
    trim: true,
  },
  iconSRC: {
    type: String,
    required: [true, 'A feature must have a icon source'],
    unique: true,
    trim: true,
  },
  iconAlt: {
    type: String,
    required: [true, 'A feature must have a icon alt'],
    trim: true,
    unique: false,
  },
  description: {
    type: String,
    trim: true,
  },
  main: {
    type: String,
    trim: true,
    enum: ['true', 'false'],
    default: 'false',
  },
});

const features = mongoose.model('features', featuresSchema);

module.exports = features;
