const express=require("express")
const router=express.Router()

const register = require("../controllers/register_api.js")
const login = require("../controllers/login_api.js")
const addTask=require("../controllers/task_controller.js")
const getTasks=require("../controllers/get_task.js")
const updateTaskStatus = require('../controllers/update_task_status_controller.js');
const deleteTask = require('../controllers/delete_task_controller.js');



router.post("/register", register);
router.post("/login", login);
router.post('/tasks', addTask);
router.get('/tasks/:user_id', getTasks);
router.put('/tasks/:task_id', updateTaskStatus);
router.delete('/tasks/:task_id', deleteTask);

router.get('/api/test', (req, res) => {
    res.send('API is working');
});

module.exports = router;