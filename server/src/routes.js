const router = require('express').Router();
const todosController = require('./todos/todos.controller');

router.get('/todos', todosController.getList);
router.post('/todos', todosController.create);
router.get('/todos/:todoId', todosController.getWithId);
router.put('/todos/:todoId', todosController.modifyWithId);
router.patch('/todos/:todoId', todosController.updateWithId);
router.delete('/todos/:todoId', todosController.deleteWithId);

module.exports = router;
