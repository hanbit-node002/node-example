var express = require('express');
var router = express.Router();
var couchbase = require('couchbase');
var cluster = new couchbase.Cluster('couchbase://localhost');
var bucket = cluster.openBucket('calendar');

router.get('/get', function(req, res, next) {
    bucket.get('temp', function(err, result) {
       if (err) {
           res.send([]);
           return;
       }

       res.send(result.value);
    });
});

router.post('/save', function(req, res, next) {
    var events = JSON.parse(req.body.events);

    bucket.upsert('temp', events, function(err, result) {
        res.end();
    });
});

module.exports = router;