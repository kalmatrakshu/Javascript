const connection =require("../mysql/mysql.js")
const handleError = require("./error_handler.js")



const addTask = (req, res) => {
    const { user_id, title, description, due_date } = req.body;

    if (!user_id || !title || !description || !due_date) {
        return res.status(400).send('Please provide all required fields.');
    }

    const query = `INSERT INTO tasks (user_id, title, description, due_date, status, created_at)
                   VALUES (?, ?, ?, ?, 'pending', NOW())`;

    connection.query(query, [user_id, title, description, due_date], (err, results) => {
        if (err) {
            return handleError(err, res);
        }
        res.status(201).send('Task added successfully.');
    });
};

module.exports = addTask;

