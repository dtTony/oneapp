var express = require('express');
var router = express.Router();

/* testing. */
router.post('/', function(req, res) {
    res.send('Got a POST request');
});

module.exports = router;