const router = require("express").Router();
const subTaskapiRouter = require("../modules/subtasks/subtask.api");
const todoTaskapiRouter = require("../modules/todos/todo.api");

router.use('/subtask', subTaskapiRouter);
router.use('/todo',todoTaskapiRouter);

module.exports = router;