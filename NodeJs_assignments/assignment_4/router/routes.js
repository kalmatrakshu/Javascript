
const express = require('express');
const router = express.Router();

router.get('/api', function(req, res) {
    console.log('This is a first api');
    res.send('this is my first api implemented');
});

router.get('/api1', function(req, res) {
    res.statusCode=200;
    
    console.log('This is a first json api');
    res.json({ message: 'error in the server' });
});

router.post('/post-data', (req, res) => {
    res.json({ data: 'POST request received' });
});

module.exports = router;
