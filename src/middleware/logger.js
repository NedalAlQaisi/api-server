'use strict';

const logger = (req, res, next) => {

    console.log(req.method, "METHOD");

    console.log("PATH:", req.path);

    next();
}

module.exports = logger;