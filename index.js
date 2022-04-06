
var express = require('express');
var env = require('dotenv');
var cors = require('cors');


env.config();

var dbService = require('./services/db.service');
var userRouter = require('./routes/user.route');

dbService.connectToDB(process.env.MONGO_URL);

var app = express();
app.use(cors());
app.use(express.json());
app.use(userRouter);

app.get("/healthcheck", (req,res) => {
    res.send("<h1>App is running!!</h1>")
})


app.listen(process.env.PORT_NO, () => {
    console.log("server started on", process.env.PORT_NO);
})