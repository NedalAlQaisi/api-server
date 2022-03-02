'use strict';

module.exports = (req, res, next) => {
    res.status(500).json({

        message: '500/Server Error'
    })
}