'use strict';

function validator(req, res, next) {


    const name = req.query.name;

    if (name) {

        next();
    } else {
        next(`There is not Query`)
    }

}

module.exports = validator;