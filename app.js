const express = require('express');
const homePageRouter = require('./router/homePageRouter.js');
const getDataRouter = require('./router/getDataRouter.js');
const app = express();

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use('/', homePageRouter);
app.use('/data', getDataRouter);
// app.get('/data', (req,res)=>{
//     res.status(200).json({
//         status: "success",
//         data:{
//             name: "lmao"
//         }
//     })
// });

module.exports = app;
