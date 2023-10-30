const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const mongoose = require('mongoose');
const app = require('./app.js');

const port = process.env.PORT || 8000;

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
// console.log(DB); //MUST CHANGE THE CONFIG, ADD cohealth before ?
mongoose
  .connect(DB)
  .then(() => console.log('Connect to database successfully'));

const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
