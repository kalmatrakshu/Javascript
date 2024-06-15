
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const connection =require("../mysql/mysql.js")
const handleError = require("./error_handler.js")




const JWT_SECRET = 'your_jwt_secret';

const login = (req, res) => {
    const { Email, Password } = req.body;

    if (!Email || !Password) {
        return res.status(400).send('Please provide all required fields.');
    }

    console.log('Received login request:', { Email, Password });

    const query = `SELECT * FROM users WHERE Email = ?`;
    connection.query(query, [Email], async (err, results) => {
        if (err) {
            console.error('Database query error:', err);
            return handleError(err, res);
        }

        console.log('Database query results:', results);

        if (results.length === 0) {
            console.log('No user found with that email.');
            return res.status(401).send('Invalid email or password.');
        }

        const user = results[0];
        console.log('User found:', user);

        const isMatch = await bcrypt.compare(Password, user.Password);
        console.log('Password comparison result:', isMatch);

        if (!isMatch) {
            console.log('Passwords do not match.');
            return res.status(401).send('Invalid email or password.');
        }

        const token = jwt.sign({ userID: user.UserID, email: user.Email }, JWT_SECRET, {
            expiresIn: '1h'
        });

        res.status(200).json({ token });
    });
};

module.exports = login;
