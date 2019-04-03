var express = require('express');
var router = express.Router();
var fs = require('fs');


router.post('/login', function (req, res, next) {
    return res.status(200).json({success: true});
    /*
    if(req.username == 'Spaghetti' && req.password == 'Eddie') {
        return res.status(200).json({success: true});
    } else {
        return res.status(200).json({success: false});
    }
    */
});

module.exports = router;
