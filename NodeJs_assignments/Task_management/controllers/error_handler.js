
const handleError = (err, res) => {
    console.error(err);
    res.status(500).send('Server error.');
};

module.exports = handleError;
