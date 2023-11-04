const express = require('express');
const homePageRouter = require('./router/homePageRoutes.js');
const getDataRouter = require('./router/getDataRoutes.js');
const newsRouter = require('./router/newsRoutes.js');
const findHospitalRouter = require('./router/findHospitalRoutes.js');
const calculateBMIRouter = require('./router/calculateBMIRoutes.js');

const app = express();

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use('/', homePageRouter);
app.use('/news', newsRouter);
app.use('/calculateBMI', calculateBMIRouter);
// app.use('/aboutUs', aboutUsRouter);
// app.use('/calculateBMI', calculateBMIRouter);
// app.use('/findHospital', findHospitalRouter);

app.use('/data', getDataRouter);
module.exports = app;
