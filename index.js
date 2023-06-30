const express = require("express");
const app = express();
require('./connection/connection');
const bodyparser = require('body-parser');
const cors = require('cors')
const userRouter = require('./routes/userRoute')
const Port = 4500;

app.use(cors());
app.use(express.json());
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }));

app.use('/', userRouter);

app.listen(Port, () => {
    console.log(`Server is running at port ${Port}`)
});