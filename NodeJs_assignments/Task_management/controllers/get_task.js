const connection = require('../mysql/mysql.js');
const handleError = require('./error_handler.js');

const getTasks = (req, res) => {
    const { user_id } = req.params;

    if (!user_id) {
        return res.status(400).send('User ID is required.');
    }

    const query = 'SELECT * FROM tasks WHERE user_id = ?';

    connection.query(query, [user_id], (err, results) => {
        if (err) {
            return handleError(err, res);
        }
        res.status(200).json(results);
    });
};

module.exports = getTasks;
