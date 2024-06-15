const connection = require('../mysql/mysql.js');
const handleError = require('./error_handler.js');

const deleteTask = (req, res) => {
    const { task_id } = req.params;

    if (!task_id) {
        return res.status(400).send('Task ID is required.');
    }

    const query = 'DELETE FROM tasks WHERE task_id = ?';

    connection.query(query, [task_id], (err, results) => {
        if (err) {
            return handleError(err, res);
        }
        if (results.affectedRows === 0) {
            return res.status(404).send('Task not found.');
        }
        res.status(200).send('Task deleted successfully.');
    });
};

module.exports = deleteTask;
