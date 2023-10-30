const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const mongoose = require('mongoose');
const fs = require('fs');
const features = require('./../db/features_schema.js');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

// console.log(DB); //MUST CHANGE THE CONFIG, ADD cohealth before ?
mongoose
  .connect(DB)
  .then(() => console.log('Connect to database successfully'));

const featuresHolder = JSON.parse(
  fs.readFileSync(`${__dirname}/features-data.json`, 'utf-8')
);
// console.log(newsHolder);

const importData = async function () {
  try {
    // console.log(featuresHolder);
    for (let i = 0; i < featuresHolder.length; ++i) {
      await features.create(featuresHolder[i]);
    }
    console.log('Data successfully imported!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteData = async function () {
  try {
    await features.deleteMany();
    console.log('Data successfully deleted!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};
if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
