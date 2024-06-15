const connection = require('../mysql/mysql.js');
const handleError = require('./error_handler.js');

const updateTaskStatus = (req, res) => {
    const { task_id } = req.params;
    const { status } = req.body;

    if (!task_id || !status) {
        return res.status(400).send('Task ID and status are required.');
    }

    const query = 'UPDATE tasks SET status = ? WHERE task_id = ?';

    connection.query(query, [status, task_id], (err, results) => {
        if (err) {
            return handleError(err, res);
        }
        if (results.affectedRows === 0) {
            return res.status(404).send('Task not found.');
        }
        res.status(200).send('Task status updated successfully.');
    });
};

module.exports = updateTaskStatus;
