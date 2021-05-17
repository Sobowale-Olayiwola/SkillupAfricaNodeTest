const router = require('express').Router();
const TodoController = require('../controllers/TodoController');

/**
 * List all todos
 */
router.get('/', (req, res) => {
  TodoController.getAllTodos(req, res);
});
/**
 * Create a Todo - unique id, description, isCompleted // application/json
 */
router.post('/', (req, res) => {
  TodoController.createTodo(req, res);
});  

/**
 *  Get a Todo by unique id
 */
router.get('/:id',  (req, res) => {
  TodoController.readToDo(req,res)
  // TODO return a proper response to the user when no todo is found.
}); 

router.delete('/:id', (req, res) => {
  TodoController.deleteTodos(req, res);
  // TODO Implement this route 
});  

module.exports = router;
