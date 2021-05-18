const TodoService = require('../services/TodoService');

module.exports = class FrontendTodoController {
  static todoFormPage( request, response) {
    response.render('description')
  }

  static async createTodo(request, response) {
    try {
      let newTodo = await TodoService.createTodo(request.body.description);
      response.render('todoSubmitted')
    } catch (error) {
      response.render('error')
    }
  }

  static async getAllTodos(request, response) {
    try {
      let allTodos = await TodoService.getAllTodos();
      response.render('allTodos', { todos: allTodos });
    } catch (error) {
      response.render('error')
    }
  }

  static async getTodoById(request, response) {
    try {
      let foundTodo = await TodoService.getTodoById(request.params.id);

      response.status(200).json({ code: 'SUCCESS', success: foundTodo, error: null });
    } catch (error) {
      response
        .status(500)
        .json({ code: 'FAILED', success: null, error: error.message || 'Oops you cannot create todo at the moment' });
    }
  }

  static updateTodoForm (request, response) {
    response.render('updateForm', {uniqueid: request.params.uniqueid})
  }

  static async updateTodo(request, response) {
    try {
      let todo = await TodoService.updateTodo(request.params.uniqueid, request.body.description);
      console.log(todo);
      if (todo) {
        response.render('success');
      } else {
        response.render('error');
      }
      
    } catch (error) {
      response.render('error');
    }
  }

  static async deleteTodoById(request, response) {
    try {
      await TodoService.deleteTodoById(request.params.uniqueid);
      response.render('delete')
    } catch (error) {
      response.render('error')
    }
  }
};
