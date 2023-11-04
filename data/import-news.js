const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const mongoose = require('mongoose');
const fs = require('fs');
const news = require('../db/news_schema.js');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

// console.log(DB); //MUST CHANGE THE CONFIG, ADD cohealth before ?
mongoose
  .connect(DB)
  .then(() => console.log('Connect to database successfully'));

const newsHolder = JSON.parse(
  fs.readFileSync(`${__dirname}/newsContents.json`, 'utf-8')
);
// console.log(newsHolder);

const importData = async function () {
  try {
    for (let i = 0; i < newsHolder.length; ++i) {
      await news.create(newsHolder[i]);
    }
    console.log('Data successfully imported!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteData = async function () {
  try {
    await news.deleteMany();
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
