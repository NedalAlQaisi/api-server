'use strict';

const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());

const logger = require('./middleware/logger.js')

const notFound = require('./error-handlers/404.js');

const serverError = require('./error-handlers/500.js');

const clothesRouter = require('./routes/clothes.js');

const foodRouter = require('./routes/food');


app.use(cors());
app.use(logger);
app.use("/api/v1", clothesRouter);
app.use("/api/v1", foodRouter);


app.get('/', (req, res) => {
    res.send('Home Route')
})


app.use(notFound);
app.use(serverError);


function start(port) {
    app.listen(port, () => {
        console.log(`The PORT ${port}`);
    })
}

module.exports = {
    app: app,
    start: start
}