var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function (req, res, next) {
    if(req.username === "Spaghetti" && req.password === "Eddie") {
        return res.status(200).json({success: true});
    } else {
        return res.status(200).json({success: false});
    }
});

module.exports = router;
