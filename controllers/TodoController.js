const TodoService = require('../services/TodoService');

module.exports = class TodoController {
  static async createTodo(request, response) {
    try {
      let newTodo = await TodoService.createTodo(request.body.description);
      response.status(201).json({ code: 'SUCCESS', success: newTodo, error: null });
    } catch (error) {
      response
        .status(500)
        .json({ code: 'FAILED', success: null, error: error.message || 'Oops you cannot create todo at the moment' });
    }
  }
  static async readToDo(request, response) {
    try {
      let todo = await TodoService.readToDo(request.params.id);
      if (todo) {
        response.json({ code: 'SUCCESS', success: todo, error: null });
      } else {
        response
      .status(404)
      .json({ code: 'FAILED', success: null, error: error.message || 'Oops you cannot create todo at the moment' });
      }
      
    } catch (error) {
      response
      .status(404)
      .json({"code": "NOT FOUND", "success": {}, "error": true});
    }
  }

  static async getAllTodos(request, response) {
    try {
      let todoList = await TodoService.getAllTodos();
      todoList.sort(function (a, b) {
        let x = a.description.toUpperCase(),
            y = b.description.toUpperCase();
        return x == y ? 0 : x > y ? 1 : -1;
    });
      response.json({ code: 'SUCCESS', success: todoList, error: null });
    } catch (error) {
      response
        .status(500)
        .json({ code: 'FAILED', success: null, error: error.message || 'Oops you cannot get all todo at the moment' })
    }
  }
  static async deleteTodos(request, response) {
    let deletedTodo = await TodoService.deleteTodo(request.params.id);
    if (deletedTodo) {
      response.status(200).json({"code" :"SUCCESS", "success": deletedTodo, "error":null})
    } else {
      response.status(404).json({"code": "NOT FOUND", "success": {}, "error": true});
    }

  }
};
