
const bcrypt = require('bcryptjs');
const connection =require("../mysql/mysql.js")
const handleError = require("./error_handler.js")



const register = async (req, res) => {
    const {UserID, FirstName, LastName, Email, Password, Address } = req.body;

    if (!FirstName || !LastName || !Email || !Password) {
        return res.status(400).send('Please provide all required fields.');
    }

    try {
        const hashedPassword = await bcrypt.hash(Password, 10);

        const query = `INSERT INTO users (UserID,FirstName, LastName, Email, Password, Address, created_at)
                       VALUES (?,?, ?, ?, ?, ?, NOW())`;
        connection.query(query, [UserID,FirstName, LastName, Email, hashedPassword, Address], (err, results) => {
            if (err) {
                return handleError(err, res);
            }

            res.status(201).send('User registered successfully.');
        });
    } catch (err) {
        handleError(err, res);
    }
};

module.exports = register;
