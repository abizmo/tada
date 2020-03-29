const Todo = require('./todos.model');

const getList = async (req, res, next) => {
  try {
    const todos = await Todo.find().select('title done');
    res.json({
      message: 'Todos listed',
      data: todos,
    });
  } catch (error) {
    console.log('[GETALL]: ', error);
    next(error);
  }
};

const getWithId = async (req, res, next) => {
  const { todoId } = req.params;
  try {
    const todo = await Todo.findById(todoId).select('title done createdAt');
    res.json({
      message: 'Todo found!',
      data: todo,
    });
  } catch (error) {
    console.log('[GETID]: ', error);
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const todo = new Todo(req.body);
    const createdTodo = await todo.save();
    res.status(201).json({
      message: 'Todo created',
      data: createdTodo,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(422);
    }
    console.log('[POST]: ', error);
    next(error);
  }
};

const modifyWithId = async (req, res, next) => {
  const { todoId } = req.params;
  const newTodo = req.body;
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(todoId, newTodo);
    res.json({
      message: 'modify todo with todoId',
      data: updatedTodo,
    });
  } catch (error) {
    console.log('[PUT]: ', error);
    next(error);
  }
};

const updateWithId = async (req, res, next) => {
  const { todoId } = req.params;
  const { done } = req.body;
  try {
    const todo = await Todo.findById(todoId);
    todo.done = done;
    const updatedTodo = await todo.save();
    res.json({
      message: done ? 'Todo done!' : 'Todo undone',
      data: updatedTodo,
    });
  } catch (error) {
    console.log('[DONE]: ', error);
    next(error);
  }
};

const deleteWithId = async (req, res, next) => {
  const { todoId } = req.params;
  try {
    const todo = await Todo.findByIdAndRemove(todoId);
    res.json({
      message: 'Todo deleted!',
      data: todo,
    });
  } catch (error) {
    console.log('[DELETE]: ', error);
    next(error);
  }
};

module.exports = {
  getList,
  getWithId,
  updateWithId,
  create,
  modifyWithId,
  deleteWithId,
};
