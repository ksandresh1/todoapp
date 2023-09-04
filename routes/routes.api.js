const router = require("express").Router();
const subTaskapiRouter = require("../modules/subtask/subtask.api");
const todoTaskapiRouter = require("../modules/todo/todo.api");

router.use('/subtask/', subTaskapiRouter);
router.use('/todo/',todoTaskapiRouter);

module.exports = router;