const router = require('express').Router();
const FrontendTodoController = require('../controllers/FrontendTodoController');

/**
 * List all todos
 */
router.get('/allTodos', (req, res) => {
  FrontendTodoController.getAllTodos(req, res);
});

// Route for description submission page
router.get('/form', (req, res) => {
    FrontendTodoController.todoFormPage(req, res);
} )
/**
 * Create a Todo - unique id, description, isCompleted // application/json
 */
router.post('/', (req, res) => {
  FrontendTodoController.createTodo(req, res);
});  

router.get('/', (req, res) => {
    res.render('index')
})

/**
 *  Get a Todo by unique id
 */
router.post('/update/:uniqueid',  (req, res) => {
  FrontendTodoController.updateTodo(req,res)
  // TODO return a proper response to the user when no todo is found.
}); 

router.get('/updateForm/:uniqueid', (req, res) => {
  FrontendTodoController.updateTodoForm(req,res)
})

router.get('/delete/:uniqueid', (req, res) => {
  FrontendTodoController.deleteTodoById(req, res);
  // TODO Implement this route 
});  

module.exports = router;
