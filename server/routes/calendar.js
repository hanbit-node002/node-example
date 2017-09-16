var express = require('express');
var router = express.Router();

router.get('/get', function(req, res, next) {
    res.send([{
        title: '임시',
        start: '2017-09-17'
    }]);
});

module.exports = router;